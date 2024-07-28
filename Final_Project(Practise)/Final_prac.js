function loadingAnimation() {
  let tl = gsap.timeline();
  /*///////*/ tl.from("#time-counter", {
    delay: 0.4,
    opacity: 0,
    y: -10,
    onStart: function () {
      let h6Counter = document.querySelector("#time-counter h6");
      let count = 14;
      setInterval(function () {
        if (count < 100) {
          h6Counter.innerHTML = count++;
        } else {
          h6Counter.innerHTML = count;
          clearInterval(interval);
          // Simplified the setInterval logic by adding a clear interval when the count reaches 100.
        }
      }, 43);
    },
  })
    .from(".line h1", {
      delay: -0.2,
      opacity: 0,
      y: 100,
      duration: 0.4,
      // delay: 0.3,  /*///////*/
      stagger: 0.3,
    })
    .from(".line h2", {
      delay: -0.4,
      opacity: 0,
      y: 100,
    })
    .to("#loader", {
      delay: 3,
      duration: 0.2,
      opacity: 0,
    })
    .from("#page1", {
      opacity: 0,
      y: 1600,
      duration: 0.6,
      delay: 0.45,
      ease: "power4.inOut",
    })
    .to("#loader", {
      display: "none" /*///////*/,
      // onComplete: function () {
      //   document.querySelector("#loader").style.display = "none";
      // },
    })
    .from("#nav-bar, #nav-bar h4, #nav-bar svg", {
      delay: 0.2,
      opacity: 0,
    })
    .from(".hero h1, .hero .hh", {
      y: 100,
      delay: -1,
      opacity: 0,
      duration: 0.3,
      stagger: 0.25,
    });
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
loadingAnimation();
curserAnimation();
