let screenPosition = 0;

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);
    
    let titleXAnimation = setXAnimationWidth();
    
    window.addEventListener('resize', () => {
        titleXAnimation = setXAnimationWidth();
    });

    let t1 = gsap.timeline();
    t1.to('.title1', {
        x: titleXAnimation,
        opacity: 1,
        duration: 2,
        ease: 'power2.out'
    }, 1)

    t1.to('.title2', {
        x: -titleXAnimation,
        opacity: 1,
        duration: 2,
        ease: 'power2.out'
    }, 1)

    t1.to('nav', {
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out'
    }, 2.25)

    t1.to('.positions-container', {
        opacity: 1,
        ease: 'power2.out',
        duration: 1.5
    }, 2.5)

    t1.to('.web-title', {
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out'
    }, 2.5)

    t1.to('.herovideo', {
        opacity: 1,
        duration: 2,
        ease: "power2.out"
    }, 1)

    window.addEventListener('scroll', () => {
        let scrollingDown = false;

        if(window.pageYOffset > screenPosition){
            scrollingDown = true;
            screenPosition = window.pageYOffset;
        }else{
            scrollingDown = false;
            screenPosition = window.pageYOffset;
        }

        if(scrollingDown){
            t1.to('nav', {
                opacity: 0,
                duration: 0.5,
                ease: "power2.out"
            })
        }else{
            t1.to('nav', {
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out'
            })
        }
    })

})

function setXAnimationWidth() {
    return (getWindowSize() / 3) / 1.75
}

function getWindowSize(){
    return window.innerWidth
}