const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
function cursurAnimation() {
  let bd = document.querySelector("body");
  bd.addEventListener("mousemove", function (delts) {
    gsap.to("#crsr", {
      top: delts.y,
      left: delts.x,
      duration: 0.1,
      ease: "power2",
    });
  });

  Shery.makeMagnet("#nav a");
}
cursurAnimation();
let tl = gsap.timeline();
tl.from(".count-time", {
  y: -10,
  opacity: 0,
  delay: 0.5,
  onStart: function () {
    let time_update = document.querySelector(".count-time h5");
    let count = 10;
    let loop = setInterval(function () {
      if (count < 100) {
        time_update.innerHTML = count++;
      } else {
        time_update.innerHTML = count;
        clearInterval(loop);
      }
    }, 33);
  },
}),
  tl.from(
    ".loader_h1_container h1",
    {
      y: 100,
      delay: 0.6,
      opacity: 0,
      stagger: 0.25,
    },
    "-=.5"
  ),
  tl.from(
    ".loader_h1_container h2",
    {
      y: 100,
      opacity: 0,
    },
    "-=.5"
  ),
  tl.to("#loader", {
    delay: 2.5,
    duration: 0.1,
    opacity: 0,
  }),
  tl.from(
    "#main",
    {
      y: 1600,
      duration: 2.5,
      opacity: 0,
      ease: "power4",
    },
    "-=.5"
  ),
  tl.to("#loader", {
    display: "none",
  }),
  tl.from(
    "#nav a",
    {
      y: 20,
      opacity: 0,
      duration: 0.7,
      stagger: 0.25,
    },
    "-=.5"
  ),
  tl.from(
    ".anime2",
    {
      y: -30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.25,
      ease: "expo",
    },
    "-=1"
  ),
  tl.from(
    "#headings",
    {
      onStart: function () {
        Shery.textAnimate("#headings h1", {
          style: 1,
          duration: 1.5,
          ease: "cubic-bezier(0.23, 1, 0.320, 1)",
          multiplier: 0.1,
        });
      },
    },
    "-=1"
  );

Shery.imageEffect(".sustain_img", {
  style: 3,
  config: {
    uFrequencyX: { value: 25.19, range: [0, 100] },
    uFrequencyY: { value: 21.37, range: [0, 100] },
    uFrequencyZ: { value: 10.69, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 64 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6947330928657804 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.24, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});
Shery.imageEffect(".ephemeral_img", {
  style: 1,
  config: {
    a: { value: 12.1, range: [0, 30] },
    b: { value: -0.91, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.7367271661820038 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.15, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});
Shery.imageEffect(".biodegradable_img", {
  style: 2,
  config: {
    resolutionXY: { value: 100 },
    distortion: { value: true },
    mode: { value: -10 },
    mousemove: { value: 0 },
    modeA: { value: 1 },
    modeN: { value: 0 },
    speed: { value: 1, range: [-500, 500], rangep: [-10, 10] },
    frequency: { value: -800, range: [-800, 800], rangep: [-50, 50] },
    angle: { value: 0.5, range: [0, 3.141592653589793] },
    waveFactor: { value: 1.4, range: [-3, 3] },
    color: { value: 10212607 },
    pixelStrength: { value: 3, range: [-20, 100], rangep: [-20, 20] },
    quality: { value: 5, range: [0, 10] },
    contrast: { value: 1, range: [-25, 25] },
    brightness: { value: 1, range: [-1, 25] },
    colorExposer: { value: 0.18, range: [-5, 5] },
    strength: { value: 0.2, range: [-40, 40], rangep: [-5, 5] },
    exposer: { value: 8, range: [-100, 100] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.509068812447097 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 3.24, range: [1, 15] },
    durationOut: { value: 0.1, range: [0.1, 5] },
    durationIn: { value: 0.1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.21, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 1.07, range: [0, 10] },
    metaball: { value: 0.12, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.31, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  gooey: true,
});
let btn = document.getElementById("change-opacity-btn");
let video = document.getElementById("future-video");
let flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    video.style.opacity = 1;
    video.play();
    flag = 1;
  } else {
    video.pause();
    video.style.opacity = 0;
    flag = 0;
  }
});
