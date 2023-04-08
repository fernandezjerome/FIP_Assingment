const btnHamburger = document.querySelector("#btnHamburger");
const sideNav = document.querySelector("#sidenav");

btnHamburger.addEventListener("click", function () {
    if (btnHamburger.classList.contains("open")) {
        btnHamburger.classList.remove("open");
        sideNav.classList.remove("nav-slide");
    } else {
        btnHamburger.classList.add("open");
        sideNav.classList.add("nav-slide");
    }
});

const headerBtn = document.querySelector(".header__btn");
const chatApp = document.querySelector(".chat-app");
const otherBtn = document.querySelector(".header__qoute"); // select the additional button

function toggleChatApp() {
    if (headerBtn.classList.contains("open")) {
        headerBtn.classList.remove("open");
        chatApp.classList.remove("show");
    } else {
        headerBtn.classList.add("open");
        chatApp.classList.add("show");
    }
}

headerBtn.addEventListener("click", toggleChatApp);
otherBtn.addEventListener("click", toggleChatApp); // add the same event listener to the additional button

const elements = document.querySelectorAll(".to_right");

// Loop through each element with the class "to_right"
elements.forEach((element) => {
    const tl = gsap.timeline({ paused: true });

    // Add the animation to the timeline
    tl.from(
        element,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power1.out" }
    );

    // Position the element in the middle of the viewport
    gsap.set(element, {
        left: "50%",
        top: "50%",
        xPercent: -50,
        yPercent: -50,
    });

    // Use the ScrollTrigger plugin to start the animation when the element is 10% from the bottom of the viewport
    ScrollTrigger.create({
        trigger: element,
        start: "bottom 90%",
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
        // onEnterBack: () => tl.playReverse(),
        onLeave: () => tl.pause(),
    });
});

const elementss = document.querySelectorAll(".to-top");

// Loop through each element with the class "to-top"
elementss.forEach((element) => {
    const tl = gsap.timeline({ paused: true });

    // Add the animation to the timeline
    tl.from(
        element,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power1.out" }
    );

    // Position the element 100px from the top of the viewport
    gsap.set(element, { left: "50%", top: "100px", xPercent: -50 });

    // Use the ScrollTrigger plugin to start the animation when the element is 10% from the bottom of the viewport
    ScrollTrigger.create({
        trigger: element,
        start: "bottom 140%",
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
        // onEnterBack: () => tl.playReverse(),
        onLeave: () => tl.pause(),
    });
});
