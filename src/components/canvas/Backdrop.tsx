import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import type { ShaderMaterial } from 'three';

const PLANE_SIZE: [number, number] = [2, 2];
const GLOW_SPEED = 0.1;

const VERTEX_SHADER = `
    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 1.0, 1.0);
    }
`;

const FRAGMENT_SHADER = `
    uniform float uTime;
    uniform float uSpeed;
    varying vec2 vUv;

    const vec3 BACKGROUND = vec3(17.0/255.0, 17.0/255.0, 18.0/255.0);
    const vec3 GLOW = vec3(42.0/255.0, 42.0/255.0, 48.0/255.0);
    const vec2 CENTER = vec2(0.5, 0.5);
    const float GLOW_RADIUS = 0.5;
    const float TAU = 6.2831853;
    const float BREATH_DEPTH = 0.1;
    const float DITHER_STRENGTH = 1.0 / 255.0;

    float hash(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
        float d = length(vUv - CENTER);
        float radius = GLOW_RADIUS - BREATH_DEPTH * (sin(uTime * uSpeed * TAU) + 0.5 * 0.5);
        float falloff = smoothstep(0.0, radius, d);
        vec3 col = mix(GLOW, BACKGROUND, falloff);
        float noise = (hash(gl_FragCoord.xy) - 0.5) * DITHER_STRENGTH * (1.0 - step(1.0, falloff));
        col += noise;

        gl_FragColor = vec4(col, 1.0);
    }
`;

export function Backdrop() {
    const uniforms = useMemo(() => {
        return {
            uTime: { value: 0 },
            uSpeed: { value: GLOW_SPEED },
        };
    }, []);

    const materialRef = useRef<ShaderMaterial>(null);
    useFrame((_state, delta) => {
        if (!materialRef.current) return;
        const uTime = materialRef.current.uniforms.uTime;
        uTime.value = (uTime.value as number) + delta;
    });

    return (
        <mesh frustumCulled={false} renderOrder={-1}>
            <planeGeometry args={PLANE_SIZE} />
            <shaderMaterial
                ref={materialRef}
                uniforms={uniforms}
                vertexShader={VERTEX_SHADER}
                fragmentShader={FRAGMENT_SHADER}
                depthTest={false}
                depthWrite={false}
            />
        </mesh>
    );
}
