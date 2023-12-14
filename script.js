Shery.mouseFollower();

Shery.makeMagnet(".right i, .right a, .left img, .btn-div button");

Shery.hoverWithMediaCircle(".headings h1", {
  videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
});

var tl = gsap.timeline();

gsap.to(".f-left-elem", {
  scrollTrigger: {
    trigger: ".featured-images",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});

let sections = document.querySelectorAll(".f-left-elem");

Shery.imageEffect(".f-right .images", {
  style: 5,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: (prog) => {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});

tl.from(".left img , .right a, .right i", {
  delay: 0.4,
  opacity: 0,
  scale: 1.5,
  duration: 0.65,
});

tl.from(".home-main .light", {
  opacity: 0,
  scale: 1.1,
  duration: 0.4,
});

tl.from(".headings h1", {
  y: "-100%",
  opacity: 0,
  stagger: 0.2,
});
