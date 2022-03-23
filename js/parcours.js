gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollToPlugin);
// gsap.registerPlugin(MotionPathPlugin);

window.addEventListener("load", function () {
  setTimeout(function () {
    //pour cacher la barre d'adresse
    window.scrollTo(0, 1);
  }, 0);
});


// 
    


  

// ----------------------------------------------------------
// --------------------- section parcours-------------------
// ----------------------------------------------------------

const sectionParcours = document.querySelector(".section-parcours");
const titleParcours = document.querySelector(".title-parcours")
//commander
const logoCommanderParcours = document.getElementById("logoCommanderParcours");
const conclusionCdt = document.querySelector('.conclusionCdt')
const commanderTitle = document.getElementById('commanderTitle')
const incarnerLeChef = document.getElementById('incarnerLeChef')
const titleExercerAutorite = document.getElementById('titleExercerAutorite')
var tlSectionParcours = gsap.timeline({ paused: true });
var tlcommander = gsap.timeline({ paused: true });


tlSectionParcours
.fromTo(titleParcours,{x:-50, opacity:0},
  {
    scrollTrigger: {
      trigger: sectionParcours,
      start: "top 10%",
      end: "15%",
      scrub: true,
      toggleActions: "restart pause reverse resume",
    },
    x:0, opacity: 1
  })

tlcommander
.fromTo(badgeCommander,{y:-50, opacity:0}, {
    scrollTrigger: {
      trigger: badgeCommander,
      start: "top center",
      end: "+=300",
    scrub: true,
      toggleActions: "restart pause reverse resume",
    },
    y: 0,
    opacity:1, 
})
.fromTo(commanderTitle,{opacity:0}, {
    scrollTrigger: {
      trigger: commanderTitle,
      start: "top center",
      end: "+=100",
    scrub: true,
      toggleActions: "restart pause reverse resume",
    },

  opacity: 1, 
    scale:2
})
.fromTo(titleExercerAutorite,{opacity:0}, {
    scrollTrigger: {
      trigger: titleExercerAutorite,
      start: "top center",
      end: "+=100",
    scrub: true,
      toggleActions: "restart pause reverse resume",
    },

  opacity: 1, 
    scale:1.8
})
.fromTo(incarnerLeChef,{opacity:1, scale:2}, {
    scrollTrigger: {
      trigger: commanderTitle,
      start: "top center",
      end: "+=100",
    scrub: true,
      toggleActions: "restart pause reverse resume",
    },

  opacity: 0, 
    scale:0.8
})
  .fromTo(logoCommanderParcours,{ y: -50, scale:1}, {
    scrollTrigger: {
      trigger: logoCommanderParcours,
      start: "top 40%",
    endTrigger: ".moduleCdt30",
      end: "top bottom",
      scrub: true,
      yoyo: true,
      pin: logoCommanderParcours,
      toggleActions: " reverse ",
    }, scale:1.5          })
.fromTo("#imgCdt10",{x:50, opacity:0}, {
    scrollTrigger: {
      trigger: logoCommanderParcours,
      start: "top 40%",
      end: "-=20px 10%",
    scrub: true,
  }, 
  x:0,
  opacity:1,
          })
.fromTo(".moduleCdt10",{x:-50, opacity:0}, {
    scrollTrigger: {
      trigger: "#imgCdt10",
      start: "top 40%",
      end: "-=20px 10%",
    scrub: true,
      toggleActions: "restart pause reverse resume",
  }, x: 0,
  opacity:1,
          })
.fromTo("#cdt10alpha",{x:-50, opacity:0}, {
    scrollTrigger: {
      trigger: "#imgCdt10",
      start: "top 40%",
      end: "-=20px 10%",
    scrub: true,
      toggleActions: "restart pause reverse resume",
  }, x: 0,
  opacity:1,
          })
.fromTo("#imgCdt20",{x:-50, opacity:0}, {
    scrollTrigger: {
      trigger: "#imgCdt20",
      start: "top 40%",
      end: "-=20px 10%",
    scrub: true,
  }, x: 0,
  opacity:1,
          })
.fromTo(".moduleCdt20",{ opacity:0}, {
    scrollTrigger: {
      trigger: "#imgCdt20",
      start: "top 40%",
      end: "-=20px 10%",
    scrub: true,
      toggleActions: "restart pause reverse resume",
  },
  opacity:1,
          })
.fromTo("#imgCdt30",{ x:50,  opacity:0}, {
    scrollTrigger: {
      trigger: "#imgCdt30",
      start: "top 40%",
      end: "-=20px 10%",
    scrub: true,
  },
  x:0,
  opacity:1,
          })
.fromTo(".moduleCdt30",{x:-50, opacity:0}, {
    scrollTrigger: {
      trigger: "#imgCdt30",
      start: "top 40%",
      end: "-=20px 10%",
    scrub: true,
      toggleActions: "restart pause reverse resume",
  }, x: 0,
  opacity:1,
          })
          
            



//se situer
// const logoSituerParcours = document.getElementById("logoSituerParcours");
// const containerCompetenceSituer = document.querySelector(
//   ".container-competence-seSituer"
// );

// var tlsituer = gsap.timeline({ paused: true });

// tlsituer.to(logoSituerParcours, {
//   scrollTrigger: {
//     trigger: logoSituerParcours,
//     start: "top center",
//     end: "+=2000",
//     scrub: true,
//     toggleActions: "restart pause reverse resume",
//   },

//   y: 1500,
// });

//instruire
// const logoInstruireParcours = document.getElementById("logoInstruireParcours");
// const containerCompetenceInstruire = document.querySelector(
//   ".container-competence-instruire"
// );

// var tlinstruire = gsap.timeline({ paused: true });

// tlinstruire.to(logoInstruireParcours, {
//   scrollTrigger: {
//     trigger: logoInstruireParcours,
//     start: "top center",
//     end: "+=1000",
//     scrub: true,
//     toggleActions: "restart pause reverse resume",
//   },

//   y: 990,
// });

//eduquer
// const logoEduquerParcours = document.getElementById("logoEduquerParcours");
// const containerCompetenceEduquer = document.querySelector(
//   ".container-competence-eduquer"
// );

// var tleduquer = gsap.timeline({ paused: true });

// tleduquer.to(logoEduquerParcours, {
//   scrollTrigger: {
//     trigger: logoEduquerParcours,
//     start: "top center",
//     end: "+=1000",
//     scrub: true,
//     toggleActions: "restart pause reverse resume",
//   },

//   y: 980,
// });


//communiquer
// const logoCommuniquerParcours = document.getElementById(
//   "logoCommuniquerParcours"
// );
// const containerCompetenceCommuniquer = document.querySelector(
//   ".container-competence-communiquer"
// );

// var tlcommuniquer = gsap.timeline({ paused: true });

// tlcommuniquer
//   .to(logoCommuniquerParcours, {
//   scrollTrigger: {
//     trigger: logoCommuniquerParcours,
//     start: "top center",
//     end: "+=1000",
//     scrub: true,
//     toggleActions: "restart pause reverse resume",
//   },
//   y: 980,
// })
