let TITLE_CHANGE_AMT = 0

document.addEventListener("DOMContentLoaded", () => {

    TITLE_CHANGE_AMT = window.innerWidth;

    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline({
        scrollTrigger : {
            trigger: '.hero',
            pin: true,
            scrub: 1,
            start: 'top top',
            end: 'bottom bottom',
            pinSpacing: false
        }
    })

    window.addEventListener('resize', () => {
        let width = window.innerWidth
        TITLE_CHANGE_AMT = width;
        // console.log(TITLE_CHANGE_AMT)
    })

    t1.to('#t1', {y: -(TITLE_CHANGE_AMT/12), opacity: 1}, 0);
    t1.to('#t3', {y: (TITLE_CHANGE_AMT/12), opacity: 1}, 0);
    t1.to('#moon', {scale: 1.45, rotation: 45}, 0)

    ScrollTrigger.create({
        trigger: ".information", // Element that triggers the animation
        start: "top top", // Animation starts when top of trigger element reaches top of viewport
        end: "bottom bottom", // Animation ends when bottom of trigger element reaches top of viewport
        pin: true, // Pin the trigger element during the animation
        pinSpacing: false, // Disable automatic spacer element for pinning
        // scrub: 1,
        onUpdate: self => {
            const scrollContainer = document.querySelector(".information-container");
            const scrollProgress = self.progress; // Get current progress of the ScrollTrigger
            const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth; // Calculate maximum scroll distance
    
            gsap.to(scrollContainer, {
                x: -maxScroll * scrollProgress, // Calculate horizontal scroll distance based on progress
                ease: "none" // Linear scrolling
            });
        }
    });
})