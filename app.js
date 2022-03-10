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
// ----------------------------------------------------------------------------
//--------------------section accueil-----------------------------------------
// ----------------------------------------------------------------------------
const commanderAccueil = document.querySelector("#commanderAccueil");
const iconeCommanderAccueil = document.querySelector("#iconeCommanderAccueil");
const eduquerAccueil = document.querySelector("#eduquerAccueil");
const iconeSituerAccueil = document.querySelector("#iconeSituerAccueil");
const instruireAccueil = document.querySelector("#instruireAccueil");
const iconeCommuniquerAccueil = document.querySelector(
  "#iconeCommuniquerAccueil"
);
const situerAccueil = document.querySelector("#situerAccueil");
const iconeEduquerAccueil = document.querySelector("#iconeEduquerAccueil");
const communiquerAccueil = document.querySelector("#communiquerAccueil");
const iconeInstuireAccueil = document.querySelector("#iconeInstruireAccueil");
const logoAlphaAccueil = document.querySelector("#logoAlphaAccueil");
const titre1 = document.querySelector("h1");
const incarnation = document.querySelector(".title-incarner");
const modjo = document.querySelector(".title-modjo");

var t0 = gsap.timeline({ paused: true });
var t1 = gsap.timeline({ paused: true, delay: 3 });
var t2 = gsap.timeline({ paused: true });

window.addEventListener("load", () => {
  t1.play();
  t2.play();
});

t0.to(iconeCommanderAccueil, {
  scrollTrigger: {
    trigger: incarnation,
    start: "top top",
    end: "1000",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  y: 350,
  scale: 2,
});
t1.from(commanderAccueil, {
  y: -700,
  opacity: 0,
  duration: 1,
  ease: "bounce",
  delay: 5,
})
  .from(
    communiquerAccueil,
    { x: 700, opacity: 0, duration: 1, ease: "bounce" },
    "<-0.1"
  )
  .from(iconeCommuniquerAccueil, { x: -500, opacity: 0, ease: "bounce" })
  .from(situerAccueil, { y: -700, opacity: 0, duration: 1, ease: "bounce" })
  .from(iconeSituerAccueil, { y: 250, opacity: 0, ease: "bounce" })
  .from(
    eduquerAccueil,
    { x: 700, opacity: 0, duration: 1, ease: "bounce" },
    "<-0.1"
  )
  .from(iconeEduquerAccueil, { x: 500, opacity: 0, ease: "bounce" })
  .from(
    instruireAccueil,
    { x: -300, opacity: 0, duration: 1, ease: "bounce" },
    "<-0.1"
  )
  .from(iconeInstuireAccueil, { y: -200, opacity: 0, ease: "bounce" })
  .from(
    incarnation,
    { y: -50, opacity: 0, duration: 3, opacity: 0, ease: "rought" },
    "<-3"
  )
  .fromTo(
    modjo,
    { x: -600, y: 10, opacity: 0 },
    { x: 0, y: -10, opacity: 1, duration: 1, ease: "sine" },
    "<-4"
  )
  .from(logoAlphaAccueil, { opacity: 0, scale: 0.1, duration: 3 });

t2.from(titre1, { y: -400, ease: "bounce", duration: 3, scale: 2 }).to(titre1, {
  duration: 5,
  text: "La formation au comportement du militaire",
  ease: "none",
  delay: 1,
  scale: 1.2,
});
// ----------------------------------------------------------------------------
//----------------------------- section mission--------------------------------
// ----------------------------------------------------------------------------

const titleMission = document.querySelector(".title-mission");
const sectionMission = document.querySelector(".section-mission");
const subtitleMission = document.querySelector(".subtitle-mission");
const mission = document.getElementById("mission");
const developper = document.getElementById("developper-mission");
const savoirEtre = document.getElementById("savoirEtre-mission");
const un = document.getElementById("un");
const officier = document.getElementById("officier-mission");
var t3 = gsap.timeline({ paused: true });

t3.to(iconeCommanderAccueil, {
  scrollTrigger: {
    trigger: mission,
    start: "top top",
    end: "100",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  opacity: 0,
})
  .to(mission, {
    scrollTrigger: {
      trigger: mission,
      start: "top top",
      end: "+=100",
      scrub: true,
      toggleActions: "restart pause reverse resume",
    },
    backgroundColor: "#f1f1f1",
  })
  .fromTo(
    titleMission,
    { y: -150, opacity: 0 },
    {
      scrollTrigger: {
        trigger: mission,
        start: "top 10%",
        end: "200px top",
        scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      opacity: 0.9,
      y: 0,
    }
  )
  .fromTo(
    titleMission,
    { y: -150, opacity: 1 },
    {
      scrollTrigger: {
        trigger: titleMission,
        start: "top 10%",
        end: "100px top",
        scrub: true,
        // markers: {startColor: "green", endColor: "red", fontSize: "12px", indent:200},
        toggleActions: "restart pause reverse resume",
      },
      opacity: 0,
    }
  )
  .to(developper, {
    scrollTrigger: {
      trigger: titleMission,
      start: "top center",
      end: "100px",
      scrub: true,
      toggleActions: "restart pause reverse resume",
    },
    fontSize: "3rem",
    fontWeight: "600",
    opacity: 1,
  })
  .to(un, {
    scrollTrigger: {
      trigger: developper,
      start: "bottom 70%",
      end: "100px",
      scrub: true,
      toggleActions: "restart pause reverse resume",
    },
    fontSize: "4rem",
    fontWeight: "600",
    opacity: 0,
  })
  .to(savoirEtre, {
    scrollTrigger: {
      trigger: un,
      start: "bottom 80%",
      end: "100px",
      scrub: true,
      toggleActions: "restart pause reverse resume",
    },
    fontSize: "2.8rem",
    fontWeight: "900",
  })
  .fromTo(
    officier,
    { y: -200, opacity: 0, fontSize: "1rem" },
    {
      scrollTrigger: {
        trigger: developper,
        start: "top 70%",
        end: "150px 60%%",
        scrub: true,
        // markers: {startColor: "green", endColor: "red", fontSize: "12px", indent:200},
        toggleActions: "restart pause reverse resume",
      },
      y: 500,
      fontSize: "4rem",
      fontWeight: "900",
      opacity: 1,
    }
  );

// ----------------------------------------------------------------------------
// ------------------------------------section formation-----------------------
// ----------------------------------------------------------------------------
const formation = document.getElementById("formation");
const appuis = document.getElementById("appuis");
const phi = document.getElementById("phi");
const roue = document.getElementById("roue");
const peda = document.getElementById("peda");

var t4 = gsap.timeline({ paused: true });

t4.to(formation, {
  scrollTrigger: {
    trigger: formation,
    start: "10% center",
    end: "+=100%",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  background: "linear-gradient(to bottom, #294062, #5c7590 )",
})
  .to(appuis, {
    scrollTrigger: {
      trigger: formation,
      start: "1200 30%",
      end: "+=300",
      scrub: true,
      toggleActions: "restart pause reverse resume",
    },
    color: "#294062",
    fontWeight: "900",
    y: 50,
    opacity: 0.8,
  })
  .fromTo(
    phi,
    { x: -50, y: 200, color: "#294062" },
    {
      scrollTrigger: {
        trigger: formation,
        start: "200px 50%",
        end: "+=300px 20%",
        scrub: true,
        toggleActions: "restart pause reverse resume",

      },
      opacity: 1,
      fontWeight: "900",
      x: 0,
      y: 0,
      color: "#f1f1f1",
    }
  )
  .fromTo(
    roue,
    { x: 50, y: 300, color: "#294062" },
    {
      scrollTrigger: {
        trigger: formation,
        start: "400px 50%",
        end: "+=300px 20%",
        scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      opacity: 1,
      fontWeight: "900",
      x: 0,
      y: 0,
      color: "#f1f1f1",
    }
  )
  .fromTo(
    peda,
    { x: -50, y: 200, color: "#294062" },
    {
      scrollTrigger: {
        trigger: formation,
        start: "600px 50%",
        end: "+=300px 20%",
        scrub: true,
        toggleActions: "restart pause reverse resume",
        immediateRender: false,
      },
      opacity: 1,
      fontWeight: "900",
      x: 0,
      y: 0,
      color: "#f1f1f1",
    }
  );

// ----------------------------------------------------------------------------
// --------------------------------------section pedagogie---------------------
// ----------------------------------------------------------------------------

const pedagogie = document.getElementById("pedagogie");
const titlePeda = document.querySelector(".title-pedagogie");
const caroussel = document.querySelector("#carouselExampleCaptions");
var t5 = gsap.timeline({ paused: true });

t5.fromTo(
  titlePeda,
  { y: -450, opacity: 0 },
  {
    scrollTrigger: {
      trigger: pedagogie,
      start: "-10% 40%",
      end: "+=300",
      scrub: true,
      toggleActions: "restart pause reverse none",
    },
    color: "white",
    fontWeight: "900",
    y: 0,
    opacity: 1,
  }
).fromTo(
  caroussel,
    {
 scale: 0.8
    },
  {
    scrollTrigger: {
      trigger: titlePeda,
      start: "300px top",
      end: "+=50",
      scrub: true,
      toggleActions: "restart pause reverse resume",
      },
  
    opacity: 1,
  }
);

// ----------------------------------------------------------------------------
// --------------------------------------section competences--------------------------------------
// ----------------------------------------------------------------------------

const competenceCommander = document.getElementById("competence-commander");
const iconeCommander = document.getElementById("iconeCommander");
const competenceSituer = document.getElementById("competence-situer");
const iconeSituer = document.getElementById("iconeSituer");
const competenceEduquer = document.getElementById("competence-eduquer");
const iconeEduquer = document.getElementById("iconeEduquer");
const competenceInstruire = document.getElementById("competence-instruire");
const iconeInstruire = document.getElementById("iconeInstruire");
const competenceCommuniquer = document.getElementById("competence-communiquer");
const iconeCommuniquer = document.getElementById("iconeCommuniquer");
const competences = document.querySelector(".section-competences");
const softSkills = document.getElementById("soft-skills");
const acquisition = document.getElementById("acquisition");

var t6 = gsap.timeline({ paused: true });

t6
.to(competences, {
    scrollTrigger: {
      trigger: competences,
      start: "top center",
        scrub: true,
      toggleActions: "restart pause reverse resume",
    },
    backgroundColor: "#294062",
  })
    .fromTo(
  acquisition,
  { opacity: 0 },
  {
    scrollTrigger: {
      trigger: acquisition,
      start: "30% 60%",
      end: "+=30%",
      scrub: true,
      toggleActions: "restart pause reverse resume",
    },
    opacity: 1,
  }
)
  .fromTo(
    softSkills,
    { x: -50, opacity: 0 },
    {
      scrollTrigger: {
        trigger: softSkills,
        start: "2% 70%",
        end: "+=200",
        scrub: 0.5,
        toggleActions: "restart pause reverse resume",
      },
      x: 50,
      opacity: 1,
    
    }
)
.to(competences, {
    scrollTrigger: {
      trigger: competences,
      start: "top center",
        scrub: true,
      toggleActions: "restart pause reverse resume",
    },
    backgroundColor: "#294062",})
  .fromTo(
    iconeCommander,
    { x: -100, opacity: 0 },
    {
      scrollTrigger: {
        trigger: acquisition,
        start: "top 60%",
        end: "+=200",
            scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      x: 0,
      opacity: 1,
    }
)
  .fromTo(
    competenceCommander,
    { x: -100, opacity: 0 },
    {
      scrollTrigger: {
        trigger: iconeCommander,
        start: "top 60%",
        end: "+=200",
            scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      x: 0,
      opacity: 1,
    }
)
.to(competences, {
    scrollTrigger: {
      trigger: competenceCommander,
      start: "-100px top",
      end: "+=500",
      scrub: true,
      toggleActions: "restart pause reverse resume",
    },
    backgroundColor: "#1a4a28",
  })
  .fromTo(
    iconeSituer,
    { x: 50, opacity: 0 },
    {
      scrollTrigger: {
        trigger: competenceCommander,
        start: "top 50%",
        end: "+=200",
            scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      x: 0,
      opacity: 1,
    }
)
  .fromTo(
    competenceSituer,
    { x: 50, opacity: 0 },
    {
      scrollTrigger: {
        trigger: iconeSituer,
        start: "top 50%",
        end: "+=200",
            scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      x: 0,
      opacity: 1,
    }
)
.to(competences, {
    scrollTrigger: {
      trigger: competenceSituer,
      start: "-100px top",
      end: "+=500",
      scrub: true,
      toggleActions: "restart pause reverse resume",
    },
    backgroundColor: "#8d943f",
  })
  .fromTo(
    iconeEduquer,
    { x: -50, opacity: 0 },
    {
      scrollTrigger: {
        trigger: competenceSituer,
        start: "top 50%",
        end: "+=200",
            scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      x: 0,
      opacity: 1,
    }
)
  .fromTo(
    competenceEduquer,
    { x: -50, opacity: 0 },
    {
      scrollTrigger: {
        trigger: iconeEduquer,
        start: "top 50%",
        end: "+=200",
            scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      x: 0,
      opacity: 1,
    }
)
.to(competences, {
    scrollTrigger: {
      trigger: competenceEduquer,
      start: "-100px top",
      end: "+=500",
      scrub: true,
      toggleActions: "restart pause reverse resume",
    },
    backgroundColor: "#891b0b",
  })
  .fromTo(
    iconeInstruire,
    { x: 50, opacity: 0 },
    {
      scrollTrigger: {
        trigger: competenceEduquer,
        start: "top 50%",
        end: "+=200",
            scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      x: 0,
      opacity: 1,
    }
)
  .fromTo(
    competenceInstruire,
    { x: 50, opacity: 0 },
    {
      scrollTrigger: {
        trigger: iconeInstruire,
        start: "top 50%",
        end: "+=200",
            scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      x: 0,
      opacity: 1,
    }
)
.to(competences, {
    scrollTrigger: {
      trigger: competenceInstruire,
      start: "-100px top",
      end: "+=500",
      scrub: true,
      toggleActions: "restart pause reverse resume",
    },
    backgroundColor: "#734693",
  })
  .fromTo(
    iconeCommuniquer,
    { x: -50, opacity: 0 },
    {
      scrollTrigger: {
        trigger: competenceInstruire,
        start: "top 50%",
        end: "+=200",
            scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      x: 0,
      opacity: 1,
    }
)
  .fromTo(
    competenceCommuniquer,
    { x: -50, opacity: 0 },
    {
      scrollTrigger: {
        trigger: iconeCommuniquer,
        start: "top 50%",
        end: "+=200",
            scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      x: 0,
      opacity: 1,
    }
)
    
    
    
    
    
    
    

//   .fromTo(
//     iconeSituer,
//     { x: -50, opacity: 0 },
//     {
//       scrollTrigger: {
//         trigger: acquisition,
//         start: "top 50%",
//         end: "+=200",
//         scrub: true,
//         toggleActions: "restart pause reverse resume",
//       },
//       x: 0,
//       opacity: 1,
//     }
//   )
//   .fromTo(
//     iconeEduquer,
//     { y: 50, opacity: 0 },
//     {
//       scrollTrigger: {
//         trigger: acquisition,
//         start: "top 50%",
//         end: "+=200",
//         scrub: true,
//         toggleActions: "restart pause reverse resume",
//       },
//       y: 0,
//       opacity: 1,
//     }
//   )
//   .fromTo(
//     iconeInstruire,
//     { x: 50, opacity: 0 },
//     {
//       scrollTrigger: {
//         trigger: acquisition,
//         start: "top 50%",
//         end: "+=200",
//         scrub: true,
//         toggleActions: "restart pause reverse resume",
//       },
//       x: 0,
//       opacity: 1,
//     }
//   )

//   .fromTo(
//     iconeCommuniquer,
//     { x: 50, opacity: 0 },
//     {
//       scrollTrigger: {
//         trigger: acquisition,
//         start: "top 50%",
//         end: "+=200",
//         scrub: true,
//         toggleActions: "restart pause reverse resume",
//       },
//       x: 0,
//       opacity: 1,
//     }
//   );

// iconeCommander.addEventListener("mouseenter", () => {
//   competenceCommander.classList.toggle("active");
//   bgSectionCompetences.style.backgroundColor = "#5C7590";
// });
// iconeCommander.addEventListener("mouseleave", () => {
//   competenceCommander.classList.toggle("active");
//   bgSectionCompetences.style.backgroundColor = "#294062";
// });
// iconeSituer.addEventListener("mouseenter", () => {
//   competenceSituer.classList.toggle("active");
//   bgSectionCompetences.style.backgroundColor = "#1A4A28";
// });
// iconeSituer.addEventListener("mouseleave", () => {
//   competenceSituer.classList.toggle("active");
//   bgSectionCompetences.style.backgroundColor = "#294062";
// });
// iconeEduquer.addEventListener("mouseenter", () => {
//   competenceEduquer.classList.toggle("active");
//   bgSectionCompetences.style.backgroundColor = "#8D943F";
// });
// iconeEduquer.addEventListener("mouseleave", () => {
//   competenceEduquer.classList.toggle("active");
//   bgSectionCompetences.style.backgroundColor = "#294062";
// });
// iconeInstruire.addEventListener("mouseenter", () => {
//   competenceInstruire.classList.toggle("active");
//   bgSectionCompetences.style.backgroundColor = "#891B0B";
// });
// iconeInstruire.addEventListener("mouseleave", () => {
//   competenceInstruire.classList.toggle("active");
//   bgSectionCompetences.style.backgroundColor = "#294062";
// });
// iconeCommuniquer.addEventListener("mouseenter", () => {
//   competenceCommuniquer.classList.toggle("active");
//   bgSectionCompetences.style.backgroundColor = "#734693";
// });
// iconeCommuniquer.addEventListener("mouseleave", () => {
//   competenceCommuniquer.classList.toggle("active");
//   bgSectionCompetences.style.backgroundColor = "#294062";
// });

// ----------------------------------------------------------------------------
// ----------------------------------section doctrine--------------------------
// ----------------------------------------------------------------------------

const doctrine = document.querySelector(".section-doctrine");
const forge = document.getElementById("forge");
const alphabrique = document.getElementById("alphabrique");
const source = document.getElementById("source");
var t7 = gsap.timeline({ paused: true });

t7.fromTo(
  forge,
  { opacity: 0, scale: 0 },
  {
    scrollTrigger: {
      trigger: forge,
      start: "top 50%",
      end: "+=200",
      scrub: 0.5,
      toggleActions: "restart pause reverse resume",
    },
    scale: 2,
    opacity: 1,

  }
)
  .fromTo(
    alphabrique,
    { opacity: 0, scale: 1 },
    {
      scrollTrigger: {
        trigger: forge,
        start: "top 50%",
        end: "+=200",
        scrub: 0.5,
        toggleActions: "restart pause reverse resume",
      },
      scale: 1.5,
      opacity: 1,
      y: 50,
    
    }
  )
  .fromTo(
    alphabrique,
    { scale: 1.5 },
    {
      scrollTrigger: {
        trigger: forge,
        start: "top 50%",
        end: "+=200",
        scrub: 0.5,
        toggleActions: "restart pause reverse resume",
      },
      scale: 1,
      y: 0,
    }
  )
  .fromTo(
    source,
    { scale: 0.5, opacity: 0 },
    {
      scrollTrigger: {
        trigger: source,
        start: "top 50%",
        end: "+=200",
        scrub: 0.5,
        toggleActions: "restart pause reverse resume",
      },
      scale: 1,
      opacity: 1,
    }
  );

// ----------------------------------------------------------------------------
// ------------------------------------ section parcours-----------------------
// ----------------------------------------------------------------------------

const sectionParcours = document.querySelector(".section-parcours");

//commander
const logoCommanderParcours = document.getElementById("logoCommanderParcours");

var tlcommander = gsap.timeline({ paused: true });

tlcommander.to(logoCommanderParcours, {
  scrollTrigger: {
    trigger: logoCommanderParcours,
    start: "top 15%",
    end: "+=1300",
    scrub: true,
    pin: ".container-fil-commander",
    toggleActions: "restart pause reverse resume",
  },
  y: 1000,
});
//se situer
const logoSituerParcours = document.getElementById("logoSituerParcours");
const containerCompetenceSituer = document.querySelector(
  ".container-competence-seSituer"
);

var tlsituer = gsap.timeline({ paused: true });

tlsituer.to(logoSituerParcours, {
  scrollTrigger: {
    trigger: logoSituerParcours,
    start: "top 1%",
    end: "+=2000",

    scrub: true,
    pin: ".container-fil-situer",
    toggleActions: "restart pause reverse resume",
  },

  y: 1500,
});

//instruire
const logoInstruireParcours = document.getElementById("logoInstruireParcours");
const containerCompetenceInstruire = document.querySelector(
  ".container-competence-instruire"
);

var tlinstruire = gsap.timeline({ paused: true });

tlinstruire.to(logoInstruireParcours, {
  scrollTrigger: {
    trigger: logoInstruireParcours,
    start: "top 30%",
    end: "+=1000",
    scrub: true,
    pin: ".container-fil-instruire",
    toggleActions: "restart pause reverse resume",
  },

  y: 990,
});
//eduquer
const logoEduquerParcours = document.getElementById("logoEduquerParcours");
const containerCompetenceEduquer = document.querySelector(
  ".container-competence-eduquer"
);

var tleduquer = gsap.timeline({ paused: true });

tleduquer.to(logoEduquerParcours, {
  scrollTrigger: {
    trigger: logoEduquerParcours,
    start: "top 1%",
    end: "+=1000",
    scrub: true,
    pin: ".container-fil-eduquer",
    toggleActions: "restart pause reverse resume",
  },

  y: 980,
});
//communiquer
const logoCommuniquerParcours = document.getElementById(
  "logoCommuniquerParcours"
);
const containerCompetenceCommuniquer = document.querySelector(
  ".container-competence-communiquer"
);

var tlinstruire = gsap.timeline({ paused: true });

tlinstruire.to(logoCommuniquerParcours, {
  scrollTrigger: {
    trigger: logoCommuniquerParcours,
    start: "top 1%",
    end: "+=1000",
    scrub: true,
    pin: ".container-fil-communiquer",
    toggleActions: "restart pause reverse resume",
  },
  y: 980,
});
