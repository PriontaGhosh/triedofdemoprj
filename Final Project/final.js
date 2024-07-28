function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    delay: 0.7,
    duration: 0.6,
    stagger: 0.25,
  });
  /*///////////////////////////*/
  tl.from(".line h2", {
    y: 150,
    delay: -0.2,
    opacity: 0,
  });
  tl.from(".line1-prt1, .line1-prt1 h5", {
    opacity: 0,
    y: -30,
    stagger: 0.1,
    // duration: 0.1,
    /*///////////////////////////*/ onStart: function () {
      let h5timer = document.querySelector(".line1-prt1 h5");
      let grow = 15;
      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 33);
    },
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.3,
    delay: 1,
  });
  tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    duration: 0.6,
    ease: "power4.inOut" /*///////////////////////////*/,
  });
  tl.to("#loader", {
    display: "none" /*///////////////////////////*/,
  });
  tl.from(".hero h1, #hero3 #innerHero", {
    y: 120,
    delay: -0.4,
    duration: 0.6,
    stagger: 0.25,
  });
}
function cursorAnimation() {
  /*///////////////////////////*/
  /*///////////////////////////*/
  // selecting the whole html
  // mousemove   ...not...... mouseover
  document.addEventListener("mousemove", function (delts) {
    gsap.to("#crsr", {
      top: delts.y /*///////////////////////////*/,
      left: delts.x /*///////////////////////////*/,
    });
  });
  // Sheryjs Make Magnet (gsap code)
  Shery.makeMagnet("#nav-prt2 h4"); /*///////////////////////////*/
}
loadingAnimation();
cursorAnimation();
