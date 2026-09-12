import type { ReactNode } from 'react';

export function Section({
    heading,
    text,
    children,
}: {
    heading: string;
    text: string;
    children?: ReactNode;
}) {
    return (
        <section className="section">
            <h2 className="section__heading">{heading}</h2>
            <p className="section__text">{text}</p>
            {children}
        </section>
    );
}
