import { useState } from 'react';

export function CallToAction() {
    const [registered, setRegistered] = useState(false);
    const BEFORE_REGISTER = 'Register';
    const AFTER_REGISTER = 'Registered';

    return (
        <button
            type="button"
            disabled={registered}
            className="section__cta"
            onClick={() => {
                setRegistered(true);
            }}
        >
            {registered ? AFTER_REGISTER : BEFORE_REGISTER}
        </button>
    );
}
