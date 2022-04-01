const titleAccueil = document.querySelector(".titleAccueil");
const subtitleAccueil = document.querySelector('.subtitleAccueil')

var t1 = gsap.timeline({ paused: true});
var t2 = gsap.timeline({ paused: true });

window.addEventListener("load", () => {
  t1.play();
});

t1
.from(titleAccueil, { y: 400, ease: "slow", duration: 2, scale: 2 })
.to(titleAccueil, {
  duration: 5,
  text: "Compétence",
  ease: "none",
  delay: 1,
  scale: 0.8,
})
.fromTo(subtitleAccueil,{y:0}, {
  scrollTrigger: {
    trigger: subtitleAccueil,
    start: "top 20%",
    end: "+=500 24%",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  y: 500
})