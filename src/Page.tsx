import { Viewer } from './components/canvas/Viewer';
import { Section } from './components/dom/Section';

export function Page() {
    return (
        <main>
            <div className="canvas-layer">
                <Viewer />
            </div>
            <div className="dom-layer">
                <Section heading="Presence" text="Holds attention" />
                <Section heading="Made, not Moulded" text="Handcrafted by master watchmakers" />
                <Section
                    heading="Three Hundred"
                    text="Only three hundred pieces available worldwide"
                />
            </div>
        </main>
    );
}
