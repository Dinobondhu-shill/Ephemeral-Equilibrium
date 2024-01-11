// Smooth Scroller

const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});
// Gsap Animation

gsap.from(".nav_link", {
  stagger:.10,
  y:10,
  duration:1,
  ease: Power2,

})

Shery.textAnimate(".emphemeral_image h1", {
  style: 2,
  y: 10,
  delay: 0.3,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});
gsap.from(".anime2", {
  y:50,
  stagger:.3,
  ease: Expo,
  duration:2

})
Shery.imageEffect(".emphemeral_image img", {
  style:3,
  debug:true,
  opacity:1,
  
})