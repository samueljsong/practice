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
            end: 'bottom bottom'
        }
    })

    window.addEventListener('resize', () => {
        let width = window.innerWidth
        TITLE_CHANGE_AMT = width;
        // console.log(TITLE_CHANGE_AMT)
    })

    t1.to('#t1', {y: -(TITLE_CHANGE_AMT/12), opacity: 1}, 0);
    t1.to('#t3', {y: (TITLE_CHANGE_AMT/12), opacity: 1}, 0);
    t1.to('#moon', {scale: 1.5, rotation: 45}, 0)
})