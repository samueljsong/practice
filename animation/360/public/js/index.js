document.addEventListener("DOMContentLoaded", () => {
    
    let t1 = gsap.timeline()

    const textList = document.querySelectorAll('.text');

    console.log(textList)

    t1.to(".text", {
        xPercent: -100,
        duration: 5,
        repeat: -1,
        ease: "linear"
    })

})

