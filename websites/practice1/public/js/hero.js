

document.addEventListener("DOMContentLoaded", () => {

    // Gets window width for spacing
    let windowWidth = window.innerWidth;
    console.log(windowWidth)

    window.addEventListener('resize', () => {
        windowWidth = window.innerWidth
    })

    // Grabs all the heading text
    let heading = document.querySelector('.heading').textContent;
    let headingArray = heading.split(" ");

    let newHTML = ''

    headingArray.forEach((word) => {
        if (word.toLowerCase() === 'forward'){
            newHTML += `<span>${word}</span><br>`
        }
        else{
            newHTML += `<span>${word}</span>`
        };
    })

    document.querySelector('.heading').innerHTML = newHTML

    const allwords = document.querySelectorAll('.heading span')
  
    let firstline = 120;
    let secondline = 120;

    allwords.forEach((span, index) => {
        if(index < 4){
            firstline += span.offsetWidth;
            console.log(span.offsetWidth)
        }
        else{
            secondline += span.offsetWidth
        }
    })

    let firstlineStart = (windowWidth - firstline) / 2;
    let secondlineStart = (windowWidth - secondline) / 2;

    allwords.forEach((span, index) => {
        if(index < 4){
            span.style.left = `${firstlineStart}px`
            firstlineStart = firstlineStart + span.clientWidth + 40;
        }
        else{
            span.style.left = `${secondlineStart}px`
            secondlineStart = secondlineStart + span.clientWidth + 40;
        }
    })




    let t1 = gsap.timeline();

    t1.to(allwords, {
        opacity: 1,
        marginTop: -50,
        duration: 0.5,
        stagger: 0.2
    })

})