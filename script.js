let t1 = gsap.timeline();

t1.from(".cont-lhs", {
  duration: 0.2,
  opacity: 0,
  ease: "power2.out",
  scale: 0,
});
t1.to(".cont-lhs", {
  duration: 0.2,
  opacity: 1,
  ease: "power2.out",
  scale: 1,
});

let t2 = gsap.timeline();

t2.from(".cont-rhs", {
  duration: 0.2,
  opacity: 0,
  scale: 0,
  ease: "power2.out",
});

t2.to(".cont-rhs", {
  duration: 0.2,
  opacity: 1,
  scale: 1,
  ease: "power2.out",
});

gsap.from("video", {
  duration: 1,
  opacity: 0,
  x: "-100%",
  ease: "power2.out",
  scrollTrigger: {
    trigger: "video",
    scrooler: "body",
    start: "top 80%",
    end: "top 0%",
    // scrub: 1,
    // pin: true
    // markers: true
  },
});

gsap.to(".vert", {
  transform: "translateX(-75%)",
  backgroundColor: "gray",
  color: "white",
  start: "top 0%",
  end: "top 0%",
  scrollTrigger: {
    trigger: ".vert",
    scroller: "body",
    // markers: true,
    pin: true,
    scrub: 2,
  },
});
gsap.from(".logo", {
  y: -100,
  delay: 0,
  duration: 0.5,
  opacity: 0,
  scale: 0.5,
  scrub: true,
});
gsap.from(".nav", {
  y: -100,
  duration: 0.5,
  opacity: 0,
  delay: 1,
  // scale: 0.5,
  scrub: true,
});

gsap.from(".frm", {
  duration: 1,
  opacity: 0,
  x: "-100%",
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".frm",
    scrooler: "body",
    start: "top 50%",
    end: "top 0%",
    // scrub: 1,
    // pin: true
  },
});
// gsap.from("footer", {
//   duration: 1,
//   opacity: 0,
//   scale: 0.2,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: "footer",
//     scrooler: "body",
//     start: "top 100%",
//     end: "top 0%",
//   },
// });