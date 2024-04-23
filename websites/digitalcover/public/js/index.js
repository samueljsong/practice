

document.addEventListener("DOMContentLoaded", () => {

    console.log(gsap)
    gsap.registerPlugin(ScrollTrigger)

    const t1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom bottom',
            pin: true,
            scrub: 1
        }
    })
    
    t1.to('#title1', {x: '-100%', duration: 1}, 0)

    t1.to('#title2', {x: '100%', duration: 1}, 0)
})