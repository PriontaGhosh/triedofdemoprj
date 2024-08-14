const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
function cursurAnimation() {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.1,
  });
  Shery.makeMagnet("#nav a");
}

cursurAnimation();
let tl = gsap.timeline();
tl.from(
  "body",
  {
    opacity: 0,
    duration: 0.8,
  },
  "-=.5"
);
tl.from(".count-time", {
  y: -10,
  opacity: 0,
  delay: 0.5,
  onStart: function () {
    let time_update = document.querySelector(".count-time h5");
    let count = 15;
    let loop = setInterval(function () {
      if (count < 100) {
        time_update.innerHTML = count++;
      } else {
        time_update.innerHTML = count;
        clearInterval(loop);
      }
    }, 35);
  },
}),
  tl.from(".loader_h1_container h1", {
    y: 100,
    delay: 0.3,
    opacity: 0,
    stagger: 0.25,
  }),
  tl.from(
    ".loader_h1_container h2",
    {
      y: 100,
      opacity: 0,
    },
    "-=.5"
  ),
  tl.to("#loader", {
    delay: 3.3,
    duration: 1.5,
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
  style: 5,
  config: {
    a: { value: 1.6, range: [0, 30] },
    b: { value: 0.4, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6947331015150702 },
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
    maskVal: { value: 1.18, range: [1, 5] },
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
Shery.imageEffect(".ephemeral_img", {
  style: 3,
  config: {
    uFrequencyX: { value: 14.5, range: [0, 100] },
    uFrequencyY: { value: 8.4, range: [0, 100] },
    uFrequencyZ: { value: 38.93, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 62.08 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.7367271788090966 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0.04, range: [0, 0.5] },
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
Shery.imageEffect(".biodegradable_img", {
  style: 4,
  config: {
    uColor: { value: false },
    uSpeed: { value: 0.21, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 0.53, range: [0, 5] },
    uFrequency: { value: 1.45, range: [0, 10] },
    geoVertex: { range: [1, 64], value: 6.77 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.5090688011758426 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0.5, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 2.28, range: [1, 15] },
    durationOut: { value: 1.15, range: [0.1, 5] },
    durationIn: { value: 0.77, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.18, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.69, range: [0, 10] },
    metaball: { value: 0.09, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.35, range: [0, 2] },
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
