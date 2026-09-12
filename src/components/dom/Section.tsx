export function Section({ heading, text }: { heading: string; text: string }) {
    return (
        <section className="section">
            <h2 className="section__heading">{heading}</h2>
            <p className="section__text">{text}</p>
        </section>
    );
}
