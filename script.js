// gsap.to(".fleftelm", {
//   scrollTrigger: {
//     trigger: "#fimages",
//     pin: true,
//     start: "top top",
//     end: "bottom bottom",
//     endTrigger: ".last",
//     scrub: 1
//   },
//   y: "-300%",
//   ease: power1
// })

// Trigger animations on scroll using ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animating fleft section
gsap.from(".fleftelm", {
  scrollTrigger: {
    trigger: "#featured",
    start: "top 60%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: 0.2, // Stagger the animations
});

// Animating fright section
gsap.from("#fright", {
  scrollTrigger: {
    trigger: "#featured",
    start: "top 60%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  x: -100,
  duration: 1,
});

// You can adjust the values and animations as per your requirement.


// Trigger animations on scroll using ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Magnet effect on button div
let magnetBtn = document.getElementById(".magnetBtn");
gsap.to(magnetBtn, {
  scrollTrigger: {
    trigger: "#featured",
    start: "top 60%",
    end: "top 90%",
    scrub: true,
  },
  rotation: 10,
  modifiers: {
    rotation: (rotation) => {
      return 10 * Math.sin(rotation * 0.1);
    },
  },
});
