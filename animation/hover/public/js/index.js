document.addEventListener("DOMContentLoaded", () => {
    
    // When we hover the container we want to fade out all text color
    const container = document.querySelector('.container');
    
    container.addEventListener('mouseover', () => {
        gsap.to(".name", {color: '#c5c7c6', duration: 0.2})
    })

    // When mouse leaves the container, we need to make the text color black again
    container.addEventListener('mouseleave', () => {
        gsap.to(".name", {color: "black", duration: 0.2})
    })


    //This creates duplicate elements to the name
    const nameItems = document.querySelectorAll(".name");
    nameItems.forEach((item) => {
        const copy = item.querySelector("p");

        if(copy){
            const duplicateCopy = document.createElement("p");
            duplicateCopy.textContent = copy.textContent;
            item.appendChild(duplicateCopy)
        }
    })

    //Select all of the project elements and assign them the mouse over animation
    document.querySelectorAll('.project-item').forEach((project) => {
        project.addEventListener("mouseover", () => {
            mouseOverAnimation(project)
        })

        project.addEventListener("mouseout", () => {
            mouseOutAnimation(project)
        })
    })
  
    //Grab the 1st p element child and animate
    //Grab the 2nd p element child and animate
    const mouseOverAnimation = (elem) => {
        gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
            y: '-100%',
            // top: '-100%',
            duration: 0.2,
        })
        gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
            y: '-100%',
            // top: '0%',
            color: '#000',
            duration: 0.2,
        })
    }

    const mouseOutAnimation = (elem) => {
        gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
            y:0,
            // top: '0%',
            duration: 0.35,
        })
        gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
            y: 0,
            // top:'-100%',
            duration: 0.35,
        })
    }

})