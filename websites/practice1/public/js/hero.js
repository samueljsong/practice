

document.addEventListener("DOMContentLoaded", () => {

    const t1 = gsap.timeline();

    const textArray = document.querySelectorAll('.text-wrapper h1');
    
    t1.from('nav', {
        y: -20,
        duration: 0.75,
        opacity: 0
    },0)

    t1.from('.consultation', {
        y: -20,
        duration: 0.75,
        opacity: 0
    },0)

    t1.from('.logo', {
        y: -20,
        duration: 0.75,
        opacity: 0
    },0)

    t1.from('.menu', {
        y: -20,
        duration: 0.75,
        opacity: 0
    },0)

    t1.from('.message', {
        y: -20,
        duration: 0.75,
        opacity: 0
    },0)

    t1.to(textArray, {
        opacity:1,
        duration: 0.5,
        stagger: 0.15,
        y: -20
    }, 0.5)

    

})