document.addEventListener('DOMContentLoaded', () => {
    const neonElements = document.querySelectorAll('.neon-text, .neon-link, .neon-button');

    neonElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.textShadow = '0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff';
        });

        element.addEventListener('mouseout', () => {
            element.style.textShadow = '';
        });
    });

    const animateNeon = () => {
        const now = Date.now();
        const intensity = Math.sin(now / 1000) * 20 + 20;

        document.querySelectorAll('.neon-box').forEach(box => {
            box.style.boxShadow = `0 0 ${intensity}px rgba(0, 255, 0, 0.8)`;
        });

        document.querySelectorAll('button').forEach(button => {
            button.style.boxShadow = `0 0 ${intensity}px #0ff`;
        });

        requestAnimationFrame(animateNeon);
    };

    animateNeon();
});
