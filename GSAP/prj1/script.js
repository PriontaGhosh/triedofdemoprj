var tl = gsap.timeline(); /*******************/
tl.from("p", {
  opacity: 0,
  y: -50,
  delay: 0.7,
  stagger: 0.5 /*******************/,
});
tl.from("h2", {
  opacity: 0,
  x: -200,
  duration: 0.8,
  stagger: 0.5,
});
tl.from("img", {
  opacity: 0,
  x: 60,
  duration: 0.6,
  rotate: 720,
  stagger: 0.6,
});
tl.from("#btm p", {
  /*******************/ /*******************/ /*******************/
  duration: 0.4,
  stagger: 0.5,
});
