var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
  },
});
tl.to(
  "#fanta",
  {
    top: "120%",
    left: "0%,",
  },
  "oran"
);
tl.to(
  "#oran2",
  {
    top: "160%",
    left: "20%",
  },
  "oran"
);
tl.to(
  "#oran1",
  {
    width: "15%",
    top: "160%",
    right: "10%",
  },
  "oran"
);
tl.to(
  "#leaf",
  {
    top: "110%",
    rotate: "130deg",
    left: "70%",
  },
  "orange"
);
tl.to(
  "#leaf2",
  {
    top: "110%",
    rotate: "130deg",
    left: "0%",
  },
  "orange"
);
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
  },
});
tl2.from(
  ".lemon",
  {
    rotate: "-90deg",
    left: "-100%",
    top: "110",
  },
  "ca"
);
tl2.from(
  "#coke",
  {
    rotate: "-90deg",
    top: "110",
    left: "-100%",
  },
  "ca"
);
tl2.from(
  ".lemon2",
  {
    rotate: "90deg",
    left: "100%",
    top: "110",
  },
  "ca"
);
tl2.from(
  "#pepsi",
  {
    rotate: "90deg",
    top: "110",
    left: "100%",
  },
  "ca"
);
tl2.to(
  "#oran2",
  {
    width: "23%",
    left: "38%",
    top: "204%",
  },
  "ca"
);
tl2.to(
  "#fanta",
  {
    width: "26%",
    top: "205%",
    left: "37%",
  },
  "ca"
);
