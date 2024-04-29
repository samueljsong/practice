const container = document.querySelector('.container')

const textList = container.querySelectorAll('.tbox');

let spacing = 0

let t1 = gsap.timeline({
    scrollTrigger : {
        trigger : ".horizontal-container",
        start : "top top", 
        end:"bottom bottom",
        pin: '.container',
        scrub: 1,
        markers: true
    }
})

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    setupWordSpacing()

    wordAnimation()

    window.addEventListener('resize', () => {
        setupWordSpacing();
    })



    const lenis = new Lenis()

        lenis.on('scroll', (e) => {
        console.log(e)
        })

        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time)=>{
        lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)
})

const setupWordSpacing = () => {
    textList.forEach((tbox) => {
        tbox.style.left = '' + spacing + 'px'
        spacing += tbox.scrollWidth + 10
    })

    spacing = 0
}

const wordAnimation = () => {
    textList.forEach((tbox) => {

        let width = tbox.scrollWidth
        console.log(width)
        t1.to(".tbox",{
            x: `-=${width}`,
            ease: 'slow'
        })
    })
}

