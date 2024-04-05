/**
 * Timeline is a list of tweens that will be animated sequentially
 */
const t1 = gsap.timeline();
const t2 = gsap.timeline();

document.addEventListener("DOMContentLoaded", () => {

    /**
     * To change the order and time of the animation
     * we can decide when exactly using numbers at the end
     * 
     * A normal integer at the end:
     * Start tween after that many seconds into the timeline
     * 
     * A quotation with +/- number:
     * Start tween x amount before or after the tween before it
     */
    t1.to('.green-box', {x:750, rotation:360, duration: 2}, 1)        //will start 1 seconds after the timeline starts
      .to('.blue-box', {x:300, rotation: 360, duration:1}, "+=1")     //start 1 second after first tween finishes

    t2.to('.pink-box', {x:20, rotation: 720, duration:2})
})