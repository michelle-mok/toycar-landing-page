const PLANE_SIZE: [number, number] = [2, 2];

const VERTEX_SHADER = `
    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 1.0, 1.0);
    }
`;

const FRAGMENT_SHADER = `
    varying vec2 vUv;

    const vec3 BACKGROUND = vec3(17.0/255.0, 17.0/255.0, 18.0/255.0);
    const vec3 GLOW = vec3(42.0/255.0, 42.0/255.0, 48.0/255.0);
    const vec2 CENTER = vec2(0.5, 0.5);
    const float GLOW_RADIUS = 0.5;

    void main() {
        float d = length(vUv - CENTER);
        float falloff = smoothstep(0.0, GLOW_RADIUS, d);
        vec3 col = mix(GLOW, BACKGROUND, falloff);

        gl_FragColor = vec4(col, 1.0);
    }
`;

export function Backdrop() {
    return (
        <mesh frustumCulled={false} renderOrder={-1}>
            <planeGeometry args={PLANE_SIZE} />
            <shaderMaterial
                vertexShader={VERTEX_SHADER}
                fragmentShader={FRAGMENT_SHADER}
                depthTest={false}
                depthWrite={false}
            />
        </mesh>
    );
}
