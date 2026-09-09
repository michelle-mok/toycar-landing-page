import { Viewer } from './components/canvas/Viewer';
import { Section } from './components/dom/Section';

export function Page() {
    return (
        <main>
            <div className="canvas-layer">
                <Viewer />
            </div>
            <div className="dom-layer">
                <Section heading="Presence" text="text" />
                <Section heading="Made, not Moulded" text="text" />
                <Section heading="Three Hundred" text="text" />
            </div>
        </main>
    );
}
