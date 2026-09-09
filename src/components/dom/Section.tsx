export function Section({ heading, text }: { heading: string; text: string }) {
    return (
        <section className="section">
            <h2>{heading}</h2>
            <p>{text}</p>
        </section>
    );
}
