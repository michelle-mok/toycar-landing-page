import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, type ReactNode } from 'react';

const SCRUB_SECONDS = 2.5;
const DESKTOP_QUERY = '(min-width: 48rem)';
const MOBILE_QUERY = `not all and ${DESKTOP_QUERY}`;
const MOBILE_START = 'top 15%';
const MOBILE_END = 'top -15%';

export function Section({
    heading,
    text,
    children,
}: {
    heading: string;
    text: string;
    children?: ReactNode;
}) {
    const sectionRef = useRef<HTMLElement>(null);
    useGSAP(() => {
        if (!sectionRef.current) return;

        const mm = gsap.matchMedia();
        mm.add(DESKTOP_QUERY, () => {
            gsap.timeline({
                defaults: { ease: 'none' },
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'center bottom',
                    end: 'center top',
                    scrub: SCRUB_SECONDS,
                },
            })
                .fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1 })
                .to(sectionRef.current, { opacity: 0 });
        });

        mm.add(MOBILE_QUERY, () => {
            gsap.timeline({
                defaults: { ease: 'none' },
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: MOBILE_START,
                    end: MOBILE_END,
                    scrub: 1,
                },
            })
                .fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1 })
                .to(sectionRef.current, { opacity: 0 });
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
