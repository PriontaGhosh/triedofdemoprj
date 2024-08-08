function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
function loadingAnimation() {
  let tl = gsap.timeline();
  /*///////*/ tl.from("#time-counter", {
    delay: 0.4,
    opacity: 0,
    y: -10,
    onStart: function () {
      let h6Counter = document.querySelector("#time-counter h6");
      let count = 14;
      let interval = setInterval(function () {
        if (count < 100) {
          h6Counter.innerHTML = count++;
        } else {
          h6Counter.innerHTML = count;
          clearInterval(interval);
          // Simplified the setInterval logic by adding a clear interval when the count reaches 100.
        }
      }, 36);
    },
  })
    .from(
      ".line h1",
      {
        opacity: 0,
        y: 100,
        duration: 0.45,
        stagger: 0.33,
      },
      "-=0.3"
    )
    .from(
      ".line h2",
      {
        opacity: 0,
        y: 100,
      },
      "-=.4"
    )
    .to("#loader", {
      delay: 2.5,
      duration: 0.2,
      opacity: 0,
    })
    .from("#page1", {
      opacity: 0,
      y: 1600,
      duration: 1.5,
      ease: "power4.inOut",
    })
    .to("#loader", {
      display: "none" /*///////*/,
      onComplete: function () {
        document.querySelector("#loader").style.display = "none";
      },
    })
    .from("#nav-bar, #nav-bar h4, #nav-bar svg", {
      delay: 0.2,
      opacity: 0,
    })
    .from(
      ".hero h1, .hero .hh",
      {
        y: 160,
        opacity: 0,
        duration: 0.6,
        stagger: 0.23,
      },
      "-=1.9"
    );
}

function curserAnimation() {
  let bdy = document.querySelector("body");
  let crsr = document.querySelector("#crsr");
  /*////*********** Totally Forgot ***********/ //*/
  bdy.addEventListener("mousemove", function (detls) {
    gsap.to("#crsr", {
      x: detls.clientX /*///////*/ /* Another Way --> left: dets.y, */,
      y: detls.clientY /*///////*/ /* Another Way --> top: dets.x,  */,
      duration: 0.1, // Adjust the duration for a smoother or quicker follow
      ease: "power2.out", // Optional: Add easing for a smoother effect
    });
  });
  Shery.makeMagnet("#nav-prt2 h4" /* Element to target.*/);
}
locomotiveAnimation();
loadingAnimation();
// curserAnimation();
function sherijsAniamtion() {
  Shery.imageEffect(".imagediv", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.47, range: [-1, 1] },
      zindex: { value: "9996999", range: [-9999999, 9999999] },
      aspect: { value: 0.7739009474894417 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: true },
      growSize: { value: 3.46, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.24, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: false },
      onMouse: { value: 1 },
      noise_speed: { value: 0.46, range: [0, 10] },
      metaball: { value: 0.55, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.43, range: [0, 2] },
      noise_scale: { value: 9.16, range: [0, 100] },
    },
    gooey: true,
  });
}
sherijsAniamtion();
