import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, type ReactNode } from 'react';

const DESKTOP_SCRUB_SECONDS = 2.5;
const DESKTOP_QUERY = '(min-width: 48rem)';
const MOBILE_QUERY = `not all and ${DESKTOP_QUERY}`;
const MOBILE_START = 'top 25%';
const MOBILE_END = 'top -25%';
const MOBILE_SCRUB_SECONDS = 1;

export function Section({
    heading,
    text,
    children,
    fadeOut = true,
}: {
    heading: string;
    text: string;
    children?: ReactNode;
    fadeOut?: boolean;
}) {
    const sectionRef = useRef<HTMLElement>(null);
    useGSAP(() => {
        if (!sectionRef.current) return;
        const currentRef = sectionRef.current;

        const mm = gsap.matchMedia();
        mm.add(DESKTOP_QUERY, () => {
            gsap.timeline({
                defaults: { ease: 'none' },
                scrollTrigger: {
                    trigger: currentRef,
                    start: 'center bottom',
                    end: 'center top',
                    scrub: DESKTOP_SCRUB_SECONDS,
                },
            })
                .fromTo(currentRef, { opacity: 0 }, { opacity: 1 })
                .to(currentRef, { opacity: fadeOut ? 0 : 1 });
        });

        mm.add(MOBILE_QUERY, () => {
            gsap.timeline({
                defaults: { ease: 'none' },
                scrollTrigger: {
                    trigger: currentRef,
                    start: MOBILE_START,
                    end: MOBILE_END,
                    scrub: MOBILE_SCRUB_SECONDS,
                },
            })
                .fromTo(currentRef, { opacity: 0 }, { opacity: 1 })
                .to(currentRef, { opacity: fadeOut ? 0 : 1 });
        });
    });

    return (
        <section className="section" ref={sectionRef}>
            <h2 className="section__heading">{heading}</h2>
            <p className="section__text">{text}</p>
            {children}
        </section>
    );
}
