//create class when trigger
ScrollTrigger.create({
    trigger: ".box",
    start: "80%",
    end: "50%",
    markers: true,
    toggleClass: "box-red",
});

//Target nav class to add nav-active class
ScrollTrigger.create({
    markers: true,
    start: "top 6%",
    trigger: "test",
    loggleClass: { targets: "nav", className: "nav-active" },
});

//

//stagger animation
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".headline",
        markers: true,
        start: "0",
        end: "top 30%",
        scrub: 1,
    },
});

tl.to(".headline", { x: -50, duration: 2, opacity: 0.5 });
to(".headline", { x: -50, duration: 2, opacity: 0.5 });
