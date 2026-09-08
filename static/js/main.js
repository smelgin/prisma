document.addEventListener('DOMContentLoaded', () => {
    const parallaxBg = document.getElementById('parallax-bg');
    const parallaxText = document.getElementById('parallax-text');

    window.addEventListener('scroll', () => {
        let scrollPosition = window.pageYOffset;
        
        // Move the text down slightly as you scroll (creates depth)
        if (parallaxText) {
            parallaxText.style.transform = `translateY(${scrollPosition * 0.4}px)`;
            // Fade out text as it goes down
            parallaxText.style.opacity = 1 - (scrollPosition / 500); 
        }
        
        // Subtle background shift
        if (parallaxBg) {
            parallaxBg.style.backgroundPositionY = `${scrollPosition * 0.2}px`;
        }
    });
});