gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollToPlugin);
// gsap.registerPlugin(MotionPathPlugin);

// window.addEventListener("load", function () {
//   setTimeout(function () {
//     //pour cacher la barre d'adresse
//     window.scrollTo(0, 1);
//   }, 0);
// });


// 
    


  

// ----------------------------------------------------------
// --------------------- section parcours-------------------
// ----------------------------------------------------------

const sectionParcours = document.querySelector(".section-parcours");
const titleParcours = document.querySelector(".title-parcours")
var tlSectionParcours = gsap.timeline({ paused: true });
//------------------------------------------------------------commander------------------------------------------------------------
const logoCommanderParcours = document.getElementById("logoCommanderParcours");
const conclusionCDT = document.querySelector('#ConclusionCDT')
const commanderTitle = document.getElementById('commanderTitle')
const incarnerLeChef = document.getElementById('incarnerLeChef')
const titleExercerAutorite = document.getElementById('titleExercerAutorite')
const badgeCommander = document.getElementById('badgeCommander')

var tlcommander = gsap.timeline({ paused: true });

window.addEventListener("load", () => {
  tlSectionParcours.play();
});

tlSectionParcours
.fromTo("#iconeCommanderNav",{ y:0, opacity:0},
  {
   opacity: 1, duration:0.3
  })
.fromTo("#iconeSituerNav",{ y:0, opacity:0},
{
 opacity: 1, duration:0.3
})
.fromTo("#iconeInstruireNav",{ y:0, opacity:0},
{
  opacity: 1, duration:0.3
})
.fromTo("#iconeEduquerNav",{ y:0, opacity:0},
{
  opacity: 1, duration:0.3
})
.fromTo("#iconeCommuniquerNav",{ y:0, opacity:0},
  {
   opacity: 1, duration:0.3
  })
  .fromTo(titleParcours,{ y:0, opacity:0},
    {
     y:50, opacity: 1, scale: 1.15, duration:1
    })
    .fromTo(".btn-parcours",{ y:0, opacity:0},
    {
      y:-10, opacity: 1, scale: 1.15, duration: 0.5
    })

// //animation titre commander------------------------------------------------------------ 
tlcommander
.fromTo(badgeCommander,{y:-50, opacity:0}, {
    scrollTrigger: {
      trigger: badgeCommander,
      start: "top 70%",
      end: "+=300",
    scrub: true,
      toggleActions: "restart pause reverse resume",
    },
    y: 35,
    opacity:1, 
})
.fromTo(commanderTitle,{opacity:0}, {
    scrollTrigger: {
      trigger: commanderTitle,
      start: "top 70%",
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
      start: "top 70%",
      end: "+=100",
    scrub: true,
      toggleActions: "restart pause reverse resume",
    },
    opacity: 1, 
    scale:1.8
})
.fromTo(incarnerLeChef,{opacity:1, scale:0.8}, {
    scrollTrigger: {
      trigger: commanderTitle,
      start: "top 70%",
      end: "+=100",
    scrub: true,
      toggleActions: "restart pause reverse resume",
    },
    opacity: 0, 
    scale:1
})
  //animation pin du bonhomme Commander------------------------------------------------------------
  .to(logoCommanderParcours,{
    scrollTrigger: {
      trigger: ".moduleCdt10",
      start: "top 70%",
      pin:logoCommanderParcours, 
      end: "+=2200",
      scrub: true,
      yoyo: true,
      toggleActions: "restart pause reverse resume",
    }
  })
//   //moduleCDT10------------------------------------------------------------
.fromTo("#imgCdt10",{x:50, opacity:0, scale:1}, {
  scrollTrigger: {
    trigger: commanderTitle,
    start: "top 40%",
    end: "-=20px 10%",
    scrub: true,
  }, 
  x:0,
  opacity: 1,
  scale:1,
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
//   //moduleCDT20------------------------------------------------------------
.fromTo("#imgCdt20",{x:50, opacity:0, scale:1}, {
  scrollTrigger: {
    trigger: "#imgCdt20",
    start: "top 60%",
    end: "-=20px 20%",
    scrub: true,
  }, 
  x:0,
  opacity: 1,
  scale:1,
          })
.fromTo(".moduleCdt20",{x:-50, opacity:0}, {
  scrollTrigger: {
    trigger: "#imgCdt20",
    start: "top 40%",
    end: "-=20px 10%",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  }, x: 0,
  opacity:1,
})
//   //moduleCDT30------------------------------------------------------------
.fromTo("#imgCdt30",{x:50, opacity:0, scale:1}, {
  scrollTrigger: {
    trigger: "#imgCdt30",
    start: "top 60%",
    end: "-=20px 20%",
    scrub: true,
  }, 
  x:0,
  opacity: 1,
  scale:1,
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
//   //Ccl CDT------------------------------------------------------------
.fromTo(conclusionCDT,{x:-50, opacity:0, scale:1}, {
  scrollTrigger: {
    trigger: conclusionCDT,
    start: "top 80%",
    end: "-=20px 20%",
    scrub: true,
  }, 
  x:0,
  opacity: 1,
  scale:1,
          })




//------------------------------------------------------------se situer ------------------------------------------------------------
const logoSituerParcours = document.getElementById("logoSituerParcours");
const containerCompetenceSituer = document.querySelector(".container-competence-seSituer");
const situerTitle = document.getElementById('situerTitle')
const conclusionSIT = document.querySelector('#ConclusionSIT')
const adopterUnComportement = document.getElementById('adopterUnComportement')
const titlesensibilite = document.getElementById('titlesensibilite')
const badgeSituer = document.getElementById('badgeSituer')
var tlsituer = gsap.timeline({ paused: true });

// //animation titre se situer------------------------------------------------------------
tlsituer
.fromTo(badgeSituer,{y:-50, opacity:0}, {
  scrollTrigger: {
    trigger: badgeSituer,
    start: "top 70%",
    end: "+=300",
  scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  y: 35,
  opacity:1, 
})
.fromTo(situerTitle,{opacity:0}, {
  scrollTrigger: {
    trigger: situerTitle,
    start: "top 70%",
    end: "+=100",
  scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  opacity: 1, 
  scale: 1.5, 

})
.fromTo(titlesensibilite,{opacity:0}, {
  scrollTrigger: {
    trigger: titlesensibilite,
    start: "top 70%",
    end: "+=100",
  scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  opacity: 1, 
  scale:1.3
})
.fromTo(adopterUnComportement,{opacity:1, scale:0.8}, {
  scrollTrigger: {
    trigger: situerTitle,
    start: "top 70%",
    end: "+=100",
  scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  opacity: 0, 
  scale:1
})
  .fromTo(logoSituerParcours,{x:-3}, {
  scrollTrigger: {
    trigger: ".moduleSit10",
    start: "top 70%",
    pin:logoSituerParcours, 
    end: "+=2300",
    scrub: true,
    yoyo: true,
    toggleActions: "restart pause reverse resume",
    },
    x: -3
  })
//moduleSIT10------------------------------------------------------------
.fromTo("#imgSit10",{x:50, opacity:0, scale:1}, {
  scrollTrigger: {
    trigger: situerTitle,
    start: "top 40%",
    end: "-=20px 10%",
    scrub: true,
  }, 
  x:0,
  opacity: 1,
  scale:1,
          })
.fromTo(".moduleSit10",{x:-50, opacity:0}, {
  scrollTrigger: {
    trigger: logoSituerParcours,
    start: "top 40%",
    end: "-=20px 10%",
    scrub: true,
      toggleActions: "restart pause reverse resume",
  }, x: 0,
  opacity:1,
})
//moduleSIT20------------------------------------------------------------
.fromTo("#imgSit20",{x:50, opacity:0, scale:1}, {
  scrollTrigger: {
    trigger: "#imgSit20",
    start: "top 60%",
    end: "-=20px 20%",
    scrub: true,
  }, 
  x:0,
  opacity: 1,
  scale:1,
          })
.fromTo(".moduleSit20",{x:-50, opacity:0}, {
  scrollTrigger: {
    trigger: "#imgSit20",
    start: "top 40%",
    end: "-=20px 10%",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  }, x: 0,
  opacity:1,
})
  //moduleSIT30------------------------------------------------------------
.fromTo("#imgSit30",{x:50, opacity:0, scale:1}, {
  scrollTrigger: {
    trigger: "#imgSit30",
    start: "top 60%",
    end: "-=20px 20%",
    scrub: true,
  }, 
  x:0,
  opacity: 1,
  scale:1,
          })
.fromTo(".moduleSit30",{x:-50, opacity:0}, {
  scrollTrigger: {
    trigger: "#imgSit30",
    start: "top 40%",
    end: "-=20px 10%",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  }, x: 0,
  opacity:1,
})
  //moduleSIT40------------------------------------------------------------
.fromTo("#imgSit40",{x:50, opacity:0, scale:1}, {
  scrollTrigger: {
    trigger: "#imgSit40",
    start: "top 60%",
    end: "-=20px 20%",
    scrub: true,
  }, 
  x:0,
  opacity: 1,
  scale:1,
          })
.fromTo(".moduleSit40",{x:-50, opacity:0}, {
  scrollTrigger: {
    trigger: "#imgSit40",
    start: "top 40%",
    end: "-=20px 10%",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  }, x: 0,
  opacity:1,
})
  //moduleSIT50------------------------------------------------------------
.fromTo("#imgSit50",{x:50, opacity:0, scale:1}, {
  scrollTrigger: {
    trigger: "#imgSit50",
    start: "top 60%",
    end: "-=20px 20%",
    scrub: true,
  }, 
  x:0,
  opacity: 1,
  scale:1,
          })
.fromTo(".moduleSit50",{x:-50, opacity:0}, {
  scrollTrigger: {
    trigger: "#imgSit50",
    start: "top 40%",
    end: "-=20px 10%",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  }, x: 0,
  opacity:1,
})
  //Ccl SIT
.fromTo(conclusionSIT,{x:-50, opacity:0, scale:1}, {
  scrollTrigger: {
    trigger: conclusionSIT,
    start: "top 60%",
    end: "-=20px 20%",
    scrub: true,
  }, 
  x:0,
  opacity: 1,
  scale:1,
          })






//------------------------------------------------------------instruire------------------------------------------------------------





const logoInstruireParcours = document.getElementById("logoInstruireParcours");
const containerCompetenceInstruire = document.querySelector(".container-competence-instruire");
const instruireTitle = document.getElementById('instruireTitle')
const conclusionINS = document.querySelector('#ConclusionINS')
const innoverLaPedagogie = document.getElementById('innoverLaPedagogie')
const titleFormation = document.getElementById('titleformation')
const badgeInstruire = document.getElementById('badgeInstruire')
var tlinstruire = gsap.timeline({ paused: true });


//animation titre instruire------------------------------------------------------------
tlinstruire
.fromTo(badgeInstruire,{y:-50, opacity:0}, {
  scrollTrigger: {
    trigger: badgeInstruire,
    start: "top 70%",
    end: "+=300",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  y: 35,
  opacity:1, 
})
.fromTo(instruireTitle,{opacity:0}, {
  scrollTrigger: {
    trigger: instruireTitle,
    start: "top 70%",
    end: "+=100",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  
  opacity: 1, 
  scale:2
})
.fromTo(titleFormation,{opacity:0}, {
  scrollTrigger: {
    trigger: titleFormation,
    start: "top 70%",
    end: "+=100",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  opacity: 1, 
  scale:1.3
})
.fromTo(innoverLaPedagogie,{opacity:1, scale:0.8}, {
  scrollTrigger: {
    trigger: innoverLaPedagogie,
    start: "top 70%",
    end: "+=100",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  opacity: 0, 
  scale:1
})
.to(logoInstruireParcours, {
scrollTrigger: {
  trigger: ".moduleIns10",
  start: "top 70%",
  pin:logoInstruireParcours, 
  end: "+=470",
  scrub: true,
  yoyo: true,
  toggleActions: "restart pause reverse resume",
}
})
//moduleINS10------------------------------------------------------------
.fromTo("#imgIns10",{x:50, opacity:0, scale:1}, {
  scrollTrigger: {
    trigger: instruireTitle,
    start: "top 40%",
    end: "-=20px 10%",
    scrub: true,
  }, 
  x:0,
  opacity: 1,
  scale:1,
          })
.fromTo(".moduleIns10",{x:-50, opacity:0}, {
  scrollTrigger: {
    trigger: logoInstruireParcours,
    start: "top 40%",
    end: "-=20px 10%",
    scrub: true,
      toggleActions: "restart pause reverse resume",
  }, x: 0,
  opacity:1,
})
  //Ccl INS
.fromTo(conclusionINS,{x:-50, opacity:0, scale:1}, {
  scrollTrigger: {
    trigger: conclusionINS,
    start: "top 60%",
    end: "-=20px 20%",
    scrub: true,
  }, 
  x:0,
  opacity: 1,
  scale:1,
          })


//------------------------------------------------------------eduquer------------------------------------------------------------
const logoEduquerParcours = document.getElementById("logoEduquerParcours");
const containerCompetenceEduquer = document.querySelector(".container-competence-eduquer");
const eduquerTitle = document.getElementById('eduquerTitle')
const conclusionEDQ = document.querySelector('#ConclusionEDQ')
const insufflerUnEsprit = document.getElementById('insufflerUnEsprit')
const titleEdificationPersonnalite = document.getElementById('titleEdificationPersonnalite')
const badgeEduquer = document.getElementById('badgeEduquer')
var tleduquer = gsap.timeline({ paused: true });

//animation titre eduquer------------------------------------------------------------
tleduquer
  .fromTo(badgeEduquer,{y:-50, opacity:0}, {
  scrollTrigger: {
    trigger: badgeEduquer,
    start: "top 70%",
    end: "+=300",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  y: 35,
  opacity:1, 
})
.fromTo(eduquerTitle,{opacity:0}, {
  scrollTrigger: {
    trigger: eduquerTitle,
    start: "top 70%",
    end: "+=100",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  opacity: 1, 
  scale:2
})
.fromTo(titleEdificationPersonnalite,{opacity:0}, {
  scrollTrigger: {
    trigger: titleEdificationPersonnalite,
    start: "top 70%",
    end: "+=100",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  opacity: 1, 
  scale:1.6
})
.fromTo(insufflerUnEsprit,{opacity:1, scale:0.8}, {
  scrollTrigger: {
    trigger: eduquerTitle,
    start: "top 70%",
    end: "+=100",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  opacity: 0, 
  scale:1
})
.fromTo(logoEduquerParcours, {x:-3}, {
  scrollTrigger: {
    trigger: ".moduleEdq10",
    start: "top 70%",
    pin:logoEduquerParcours, 
    end: "+=1500",
    scrub: true,
    yoyo: true,
    toggleActions: "restart pause reverse resume",
  },
  x:-3
})
// //moduleEDQ10------------------------------------------------------------
.fromTo("#imgEdq10",{x:50, opacity:0, scale:1}, {
  scrollTrigger: {
    trigger: eduquerTitle,
    start: "top 40%",
    end: "-=20px 10%",
    scrub: true,
  }, 
  x:0,
  opacity: 1,
  scale:1,
          })
.fromTo(".moduleEdq10",{x:-50, opacity:0}, {
  scrollTrigger: {
    trigger: logoEduquerParcours,
    start: "top 40%",
    end: "-=20px 10%",
    scrub: true,
      toggleActions: "restart pause reverse resume",
  }, x: 0,
  opacity:1,
})
// //moduleEDQ20------------------------------------------------------------
.fromTo("#imgEdq20",{x:50, opacity:0, scale:1}, {
  scrollTrigger: {
    trigger: "#imgEdq20",
    start: "top 60%",
    end: "-=20px 20%",
    scrub: true,
  }, 
  x:0,
  opacity: 1,
  scale:1,
          })
.fromTo(".moduleEdq20",{x:-50, opacity:0}, {
  scrollTrigger: {
    trigger: "#imgEdq20",
    start: "top 40%",
    end: "-=20px 10%",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  }, x: 0,
  opacity:1,
})
//   //moduleEDQ30------------------------------------------------------------
.fromTo("#imgEdq30",{x:50, opacity:0, scale:1}, {
  scrollTrigger: {
    trigger: "#imgEdq30",
    start: "top 60%",
    end: "-=20px 20%",
    scrub: true,
  }, 
  x:0,
  opacity: 1,
  scale:1,
          })
.fromTo(".moduleEdq30",{x:-50, opacity:0}, {
  scrollTrigger: {
    trigger: "#imgEdq30",
    start: "top 40%",
    end: "-=20px 10%",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  }, x: 0,
  opacity:1,
})
  
//   //Ccl EDQ
.fromTo(conclusionEDQ,{x:-50, opacity:0, scale:1}, {
  scrollTrigger: {
    trigger: conclusionEDQ,
    start: "top 60%",
    end: "-=20px 20%",
    scrub: true,
  }, 
  x:0,
  opacity: 1,
  scale:1,
          })
          

//------------------------------------------------------------communiquer------------------------------------------------------------
const logoCommuniquerParcours = document.getElementById("logoCommuniquerParcours");
const containerCompetenceCommuniquer = document.querySelector(".container-competence-communiquer");
const communiquerTitle = document.getElementById('communiquerTitle')
const conclusionCOM = document.querySelector('#ConclusionCOM')
const developperEloquence = document.getElementById('developperEloquence')
const titleDiscourirEfficacement = document.getElementById('titleDiscourirEfficacement')
const badgeCommuniquer = document.getElementById('badgeCommuniquer')

var tlcommuniquer = gsap.timeline({ paused: true });

//animation titre communiquer------------------------------------------------------------

tlcommuniquer
.fromTo(badgeCommuniquer,{y:-50, opacity:0}, {
  scrollTrigger: {
    trigger: badgeCommuniquer,
    start: "top 70%",
    end: "+=300",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  y: 35,
  opacity:1, 
})
.fromTo(communiquerTitle,{opacity:0}, {
  scrollTrigger: {
    trigger: communiquerTitle,
    start: "top 70%",
    end: "+=100",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  opacity: 1, 
  scale:2
})
.fromTo(titleDiscourirEfficacement,{opacity:0}, {
  scrollTrigger: {
    trigger: titleDiscourirEfficacement,
    start: "top 70%",
    end: "+=100",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  opacity: 1, 
  scale:1.6
})
.fromTo(developperEloquence,{opacity:1, scale:0.8}, {
  scrollTrigger: {
    trigger: communiquerTitle,
    start: "top 70%",
    end: "+=100",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  opacity: 0, 
  scale:1
})
.fromTo(logoCommuniquerParcours,{x:7}, {
    scrollTrigger: {
        trigger: ".moduleCom10",
        start: "top 70%",
        pin:logoCommuniquerParcours, 
        end: "+=1200",
        scrub: true,
        yoyo: true,
        toggleActions: "restart pause reverse resume",
  },
  x:7
    })

    // //moduleCOM10------------------------------------------------------------
    .fromTo("#imgCom10",{x:50, opacity:0, scale:1}, {
      scrollTrigger: {
        trigger: communiquerTitle,
        start: "top 40%",
        end: "-=20px 10%",
        scrub: true,
      }, 
      x:0,
      opacity: 1,
      scale:1,
              })
    .fromTo(".moduleCom10",{x:-50, opacity:0}, {
      scrollTrigger: {
        trigger: logoCommuniquerParcours,
        start: "top 40%",
        end: "-=20px 10%",
        scrub: true,
          toggleActions: "restart pause reverse resume",
      }, x: 0,
      opacity:1,
    })
    // //moduleCOM20------------------------------------------------------------
    .fromTo("#imgCom20",{x:50, opacity:0, scale:1}, {
      scrollTrigger: {
        trigger: "#imgCom20",
        start: "top 60%",
        end: "-=20px 20%",
        scrub: true,
      }, 
      x:0,
      opacity: 1,
      scale:1,
              })
    .fromTo(".moduleCom20",{x:-50, opacity:0}, {
      scrollTrigger: {
        trigger: "#imgCom20",
        start: "top 40%",
        end: "-=20px 10%",
        scrub: true,
        toggleActions: "restart pause reverse resume",
      }, x: 0,
      opacity:1,
    })
    //   //moduleCom30------------------------------------------------------------
    .fromTo("#imgCom30",{x:50, opacity:0, scale:1}, {
      scrollTrigger: {
        trigger: "#imgCom30",
        start: "top 60%",
        end: "-=20px 20%",
        scrub: true,
      }, 
      x:0,
      opacity: 1,
      scale:1,
              })
    .fromTo(".moduleCom30",{x:-50, opacity:0}, {
      scrollTrigger: {
        trigger: "#imgCom30",
        start: "top 40%",
        end: "-=20px 10%",
        scrub: true,
        toggleActions: "restart pause reverse resume",
      }, x: 0,
      opacity:1,
    })
      
    //   //Ccl Com
  .fromTo(conclusionCOM, { x: -50, opacity: 0, scale: 1 }, {
    scrollTrigger: {
          trigger: conclusionCOM,
          start: "top 70%",
          end: "-40px 20%",
          scrub: true,
        }, 
        x:0,
        opacity: 1,
      scale: 1,
                })