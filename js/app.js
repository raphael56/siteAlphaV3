gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(MotionPathPlugin);

// ----------------------------------------------------------------------------
//--------------------navbar vertical----------------------------------
// ----------------------------------------------------------------------------
function activateNavigation() {
  const sections = document.querySelectorAll(".section");
  const navContainer = document.createElement("Nav");
  const navItems = Array.from(sections).map((section) => {
    return `
    <div class="Nav-item" data-for-section="${section.id}">
    <a href="#${section.id}" class="Nav-link"></a>
    <span class="Nav-label">${section.dataset.label}</span>
    </div>
    `;
  });
  
  navContainer.classList.add("Nav");
  navContainer.innerHTML = navItems.join("");
  
  const observer = new IntersectionObserver(
    (entries) => {
      document.querySelectorAll(".Nav-link").forEach((navLink) => {
        navLink.classList.remove("Nav-link-selected");
      });
      const visibleSection = entries.filter((entry) => entry.isIntersecting)[0];
      document
      .querySelector(
        `.Nav-item[data-for-section="${visibleSection.target.id}"] .Nav-link`
        ).classList.add("Nav-link-selected");
      },
      { threshold: 0.5 }
      );
      sections.forEach((section) => observer.observe(section));
      document.body.appendChild(navContainer);
    }
    activateNavigation();
// ----------------------------------------------------------------------------
//--------------------section accueil-----------------------------------------
// ----------------------------------------------------------------------------
const commanderAccueil = document.querySelector("#commanderAccueil");
const iconeCommanderAccueil = document.querySelector("#iconeCommanderAccueil");
const eduquerAccueil = document.querySelector("#eduquerAccueil");
const iconeSituerAccueil = document.querySelector("#iconeSituerAccueil");
const instruireAccueil = document.querySelector("#instruireAccueil");
const iconeCommuniquerAccueil = document.querySelector("#iconeCommuniquerAccueil");
const situerAccueil = document.querySelector("#situerAccueil");
const iconeEduquerAccueil = document.querySelector("#iconeEduquerAccueil");
const communiquerAccueil = document.querySelector("#communiquerAccueil");
const iconeInstuireAccueil = document.querySelector("#iconeInstruireAccueil");
const logoAlphaAccueil = document.querySelector("#logoAlphaAccueil");
const titre1 = document.querySelector("h1");
const incarnation = document.querySelector(".title-incarner");
const modjo = document.querySelector(".title-modjo");
const badgeCommander = document.getElementById('badgeCommander')

var t0 = gsap.timeline({ paused: true });
var t1 = gsap.timeline({ paused: true});
var t2 = gsap.timeline({ paused: true });

window.addEventListener("load", () => {
  t1.play();
});

t0
.to(iconeCommanderAccueil, {
  scrollTrigger: {
    trigger: incarnation,
    start: "top top",
    end: "500",
    scrub: true,
  
    toggleActions: "restart pause reverse resume",
  },
  y: 350,
  scale: 0.7,
})

t1
.from(titre1, { y: -400, ease: "bounce", duration: 2, scale: 2 })
.to(titre1, {
  duration: 5,
  text: "La Formation au Comportement du Militaire",
  ease: "none",
  delay: 1,
  scale: 1.2,
})
.from(
  incarnation,
  { y: -50, opacity: 1, duration: 1, opacity: 0, ease: "rought" },
  "<-2"
  )
.fromTo(
  modjo,
  { x: -600, x: 10, opacity: 0 },
  { x: 0, x:0, opacity: 1, duration: 1, ease: "sine" },
  "<+2"
  )
.from(logoAlphaAccueil, { opacity: 0, scale: 0.1, duration: 3 })
.fromTo(incarnation,{y:0}, {
  scrollTrigger: {
    trigger: modjo,
    start: "top center",
    end: "+=200 center",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  y: 100
})
.to(
  modjo,
  {
    scrollTrigger: {
      trigger: modjo,
      start: "top center",
      end: "+=200 center",
      scrub: true,
      toggleActions: "restart pause reverse resume",
    }, x: 0, x: 0, opacity: 0, duration: 1, ease: "sine"
  }
  )


t2
  .fromTo(commanderAccueil,
    { x: -100, opacity:0 }, {
  scrollTrigger: {
    trigger: modjo,
    start: "70px center",
    end: "+=100 center",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  x: 0, opacity:1
})
.fromTo(communiquerAccueil,
    { y: -10, opacity:0}, {
  scrollTrigger: {
    trigger: modjo,
    start: "70px center",
    end: "+=100 center",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  y: 0, opacity:1
})
.fromTo(instruireAccueil,
    { y: 10, opacity:0}, {
  scrollTrigger: {
    trigger: modjo,
    start: "70px center",
    end: "+=100 center",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  y: 0, opacity:1
})
.fromTo(situerAccueil,
    { y: -10, opacity:0 }, {
  scrollTrigger: {
    trigger: modjo,
    start: "70px center",
    end: "+=100 center",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  y: 0, opacity:1
})
.fromTo(eduquerAccueil,
    { y: 10, opacity:0 }, {
  scrollTrigger: {
    trigger: modjo,
    start: "70px center",
    end: "+=100 center",
    scrub: true,
    toggleActions: "restart pause reverse resume",
  },
  y: 0, opacity:1
})
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
const btnHaut = document.getElementById('btn-haut')

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

        toggleActions: "restart pause reverse resume",
      },
      y: 500,
      fontSize: "4rem",
      fontWeight: "900",
      opacity: 1,
    }
);
  
// btn getUp
var tlBtnHaut = gsap.timeline({});
  
tlBtnHaut
  .fromTo(btnHaut, { opacity: 0 }, 
  {
    scrollTrigger: {
      trigger: sectionMission,
      start: "top center",
      end: "+=300",
      scrub: true,
      toggleActions: "restart pause reverse resume",
    },
    opacity: 1
  })
  .fromTo(".Nav", { opacity: 0 }, 
  {
    scrollTrigger: {
      trigger: "body",
      start: "200px 100px",
      end: "100px",
      scrub: true,
      toggleActions: "restart pause reverse resume",
    },
    opacity: 1
  })

  btnHaut.addEventListener("click", () => {
    gsap.to(window, { duration: 0.3, scrollTo: { y: 0 }, ease: "slow" });
  })

// ----------------------------------------------------------------------------
// ------------------------------------section parcours---------------------
// ----------------------------------------------------------------------------  
const sectionParcoursLien = document.querySelector(".section-parcoursLien")
const titleParcoursLien = document.querySelector(".title-parcoursLien")
const svgRoad = document.getElementById("road")
const parcoursMan = document.getElementById("parcoursMan")
const btnParcourslien = document.querySelector('.btn_parcoursLien')

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
    color: "#f1f1f1",
    fontWeight: "900",
    y: 50,
    opacity: 0.8,
  })
  .fromTo(
    phi,
    { x: -50, y: 200, color: "#294062", scale: 0.5  },
    {
      scrollTrigger: {
        trigger: formation,
        start: "200px 70%",
        end: "+=300px 70%",
        scrub: true,
        toggleActions: "restart pause reverse resume",

      },
      opacity: 1,
      fontWeight: "900",
      x: 0,
      y: 0,
      color: "#f1f1f1",
      scale: 1.5 
    }
  )
  .fromTo(
    roue,
    { x: 50, y: 200, color: "#294062", scale: 0.5 },
    {
      scrollTrigger: {
        trigger: formation,
        start: "400px 70%",
        end: "+=300px 50%",
        scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      opacity: 1,
      fontWeight: "900",
      x: 0,
      y: 0,
      color: "#f1f1f1",
      scale: 1.5 
    }
  )
  .fromTo(
    peda,
    { x: -50, y: 200, color: "#294062", scale: 0.5  },
    {
      scrollTrigger: {
        trigger: roue,
        start: "200px 70%",
        end: "+=300px 50%",
        scrub: true,
        toggleActions: "restart pause reverse resume",
        immediateRender: false,
      },
      opacity: 1,
      fontWeight: "900",
      x: 0,
      y: 0,
      color: "#f1f1f1",
      scale: 1.5 
    }
  );

// ----------------------------------------------------------------------------
// --------------------------------------section pedagogie---------------------
// ----------------------------------------------------------------------------

const pedagogie = document.getElementById("pedagogie");
const titlePedagogie = document.querySelector(".title-pedagogie")
var t5 = gsap.timeline({ paused: true });

t5
  .fromTo(titlePedagogie, { y:-600}, {
  scrollTrigger: {
    trigger: pedagogie,
  start: "top 10%",
      end: "+=200px",
  scrub: true,
    toggleActions: "restart pause reverse resume",
  },
    y: -400,
  })

const panels = document.querySelectorAll(".panel")

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// ----------------------------------------------------------------------------
// --------------------------------------section competences--------------------------------------
// ----------------------------------------------------------------------------
const competences = document.querySelector(".section-competences");

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
const soft = document.getElementById("soft");
const acquisition = document.getElementById("acquisition");

const btnCompetence1 = document.querySelectorAll('.btnBoxCompetence.box-1')
const btnCompetence2 = document.querySelectorAll('.box-2')
const btnCompetence3 = document.querySelectorAll('.box-3')
const btnCompetence4 = document.querySelectorAll('.box-4')
const btnCompetence5 = document.querySelectorAll('.box-5')

const boxAffichage1 = document.getElementById('.box-1-affichage')

const boxTitle = document.querySelector(".box-title")
const boxCommander = document.querySelector(".box-commander")
const boxSituer = document.querySelector(".box-situer")
const boxEduquer = document.querySelector(".box-eduquer")
const boxInstruire = document.querySelector(".box-instruire")
const boxCommuniquer = document.querySelector(".box-communiquer")

var tcompetence = gsap.timeline({ paused: true });

tcompetence
  .fromTo(boxTitle, {display:"none" }, {
     scrollTrigger: {
      trigger: pedagogie,
      start: "top top",
      end: "300px",
      scrub: true,
      // toggleActions: "restart pause reverse resume",
      // markers:true,
    },
    display:"block",
  }
  )
  .fromTo(boxCommander, {display:"none" }, {
     scrollTrigger: {
      trigger: pedagogie,
      start: "top top",
      end: "300px",
      scrub: true,
      // toggleActions: "restart pause reverse resume",
      // markers:true,
    },
    display:"block",
  }
  )
  .fromTo(boxCommander, {display:"block" }, {
    scrollTrigger: {
      trigger: pedagogie,
      start: "-10% 30%",
      scrub: true,
      // toggleActions: "restart pause reverse resume",
      // markers:true,
    },
    display:"block",
  }
  )
  .fromTo(boxSituer, {display:"none" }, {
     scrollTrigger: {
      trigger: competences,
      start: "-10% 30%",
      end: "30px",
      scrub: true,
      // toggleActions: "restart pause reverse resume",
      // markers:true,
    },
    display:"block",
  }
  )
  .fromTo(boxEduquer, {display:"none" }, {
     scrollTrigger: {
      trigger: competences,
      start: "-10% 30%",
      end: "30px",
      scrub: true,
      // toggleActions: "restart pause reverse resume",
      // markers:true,
    },
    display:"block",
  }
  )
  .fromTo(boxInstruire, {display:"none" }, {
     scrollTrigger: {
      trigger: competences,
      start: "-10% 30%",
      end: "30px",
      scrub: true,
      // toggleActions: "restart pause reverse resume",
      // markers:true,
    },
    display:"block",
  }
  )
  .fromTo(boxCommuniquer, {display:"none" }, {
     scrollTrigger: {
      trigger: competences,
      start: "-10% 30%",
      end: "30px",
      scrub: true,
      // toggleActions: "restart pause reverse resume",
      // markers:true,
    },
    display:"block",
  }
  )
  



var t6 = gsap.timeline({ paused: true });

t6
.fromTo(competences,{background: "#5c7590"}, {
    scrollTrigger: {
      trigger: competences,
    start: "10% 10%",
      end: "+=500px",
    scrub: true,
      toggleActions: "restart pause reverse resume",
    },
    background: "#5c7590",
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
    soft,
    { x: -50, opacity: 0 },
    {
      scrollTrigger: {
        trigger: soft,
        start: "2% 70%",
        end: "+=200",
        scrub: 0.5,
        toggleActions: "restart pause reverse resume",
      },
      x: 0,
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
    { x: -50, opacity: 0 },
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
    { x: -50, opacity: 0 },
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
    { x: -50, opacity: 0 },
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
    { x: -50, opacity: 0 },
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
      end: "+=1000",
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
        end: "+=500",
        scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      x: 0,
      opacity: 1,
    }
)
    
    
    
    

// ----------------------------------------------------------------------------
// ----------------------------------section doctrine--------------------------
// ----------------------------------------------------------------------------

const doctrine = document.querySelector(".section-doctrine");
const livreBleu = document.querySelector(".livreBleu");
const livreVert = document.querySelector(".livreVert");
const livreKaki = document.querySelector(".livreKaki");
const livreOrange = document.querySelector(".livreOrange");

const forge = document.getElementById("forge");
const alphabrique = document.getElementById("alphabrique");
const culture = document.getElementById("culture");
var t7 = gsap.timeline({ paused: true });

t7.fromTo(
  forge,
  { opacity: 0, x:-100 },
  {
    scrollTrigger: {
      trigger: forge,
      start: "top 50%",
      end: "+=200",
      scrub: 0.5,
      toggleActions: "restart pause reverse resume",
    },
   x:0,
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
    culture,
    { scale: 0.5, opacity: 0 },
    {
      scrollTrigger: {
        trigger: alphabrique,
        start: "10% 50%",
        end: "+=200",
        scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      scale: 1,
      opacity: 1,
    }
  )
  .fromTo(
    livreBleu,
    { scale: 0.5, opacity: 0 },
    {
      scrollTrigger: {
        trigger: culture,
        start: "10% 50%",
        end: "+=200",
        scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      scale: 1,
      opacity: 1,
    }
  )
  .fromTo(
    livreKaki,
    { scale: 0.5, opacity: 0 },
    {
      scrollTrigger: {
        trigger: culture,
        start: "10% 50%",
        end: "+=200",
        scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      scale: 1,
      opacity: 1,
    }
  )
  .fromTo(
    livreVert,
    { scale: 0.5, opacity: 0 },
    {
      scrollTrigger: {
        trigger: culture,
        start: "10% 50%",
        end: "+=200",
        scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      scale: 1,
      opacity: 1,
    }
  )
  .fromTo(
    livreOrange,
    { scale: 0.5, opacity: 0 },
    {
      scrollTrigger: {
        trigger: culture,
        start: "10% 50%",
        end: "+=200",
        scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      scale: 1,
      opacity: 1,
    }
  )

