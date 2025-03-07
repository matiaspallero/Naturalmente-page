import { gsap } from "gsap";

document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.navbar', { opacity: 0, duration: 1, y: -50 });
    gsap.from('.welcome-section h1', { opacity: 0, duration: 1, y: 50, delay: 0.5 });
    gsap.from('.welcome-section p', { opacity: 0, duration: 1, y: 50, delay: 1 });
});
