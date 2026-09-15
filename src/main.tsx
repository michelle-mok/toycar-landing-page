import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Page } from './Page.tsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Page />
    </StrictMode>,
);
