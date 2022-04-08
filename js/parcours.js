gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollToPlugin);
// gsap.registerPlugin(MotionPathPlugin);

// déclaration des const et var


const conclusionCDT = document.querySelector('#ConclusionCDT')

const incarnerLeChef = document.getElementById('incarnerLeChef')


var tlcommander = gsap.timeline({ paused: true });


//déclaration des fonctions

var competenceFunction = function (nomCompetence) {
  timelineCompetence = `tl${nomCompetence}`
  var timelineCompetence = gsap.timeline({ paused: true });
  const badge = document.getElementById(`badge${(nomCompetence)}`)
  const title = document.getElementById(`title${nomCompetence}`)
  const subTitle = document.getElementById(`subtitle${nomCompetence}`)
  const modjo = document.getElementById(`modjo${nomCompetence}`)
  const logoParcours = document.getElementById(`logo${nomCompetence}Parcours`);
  const conclusion = document.getElementById(`conclusion${trigrammeMaj}`);
  const tableauNumeroDeModule = [10, 20, 30, 40, 50]

  //definition de l'échelle des subtitle et modjo, du pin
  switch (nomCompetence) {
    case 'Commander':
      var scaleInit = 1.8
      var scaleFin = 1.5
      var tailleLignePinLogo = "+=2200"
      var trigrammeMaj = 'CDT'
      var trigrammeMin = 'cdt'
      var trigrammeCapitalize = 'Cdt'
      var NbDeModule = 3
      var nomModule = `.module${trigrammeCapitalize}`
      

      break;
    case 'Situer':
      var scaleInit = 1.2
      var scaleFin = 1
      var tailleLignePinLogo = "+=2300"
      var trigrammeMaj = 'SIT'
      var trigrammeMin = 'sit'
      var trigrammeCapitalize = 'Sit'
      var NbDeModule = 5
      var nomModule = `.module${trigrammeCapitalize}`
      break;
    case 'Eduquer':
      var scaleInit = 1.8
      var scaleFin = 1.3
      var tailleLignePinLogo = "+=1500"
      var trigrammeMaj = 'EDQ'
      var trigrammeMin = 'edq'
      var trigrammeCapitalize = 'Edq'
      var NbDeModule = 3
      var nomModule = `.module${trigrammeCapitalize}`
      break;
    case 'Instruire':
      var scaleInit = 1.8
      var scaleFin = 1.3
      var tailleLignePinLogo = "+=470"
      var trigrammeMaj = 'INS'
      var trigrammeMin = 'ins'
      var trigrammeCapitalize = 'Ins'
      var NbDeModule = 1
      var nomModule = `.module${trigrammeCapitalize}`
      break;
    case 'Communiquer':
      var scaleInit = 1.8
      var scaleFin = 1.3
      var tailleLignePinLogo = "+=1200"
      var trigrammeMaj = 'COM'
      var trigrammeMin = 'com'
      var trigrammeCapitalize = 'Com'
      var NbDeModule = 3
      var nomModule = `.module${trigrammeCapitalize}`
      break;
    default:
      var scaleInit = 1.8
      var scaleFin = 1.3
  }
  timelineCompetence
    .fromTo(badge, { y: -50, opacity: 0 }, {
      scrollTrigger: {
        trigger: badge,
        start: "top 70%",
        end: "+=300",
        scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      y: 35,
      opacity: 1,
    })
    .fromTo(title, { opacity: 0 }, {
      scrollTrigger: {
        trigger: title,
        start: "top 70%",
        end: "+=100",
        scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      opacity: 1,
      scale: 2
    })
    .fromTo(subTitle, { opacity: 0, scale: scaleInit }, {
      scrollTrigger: {
        trigger: subTitle,
        start: "top 70%",
        end: "+=100",
        scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      opacity: 1,
      scale: scaleFin
    })
    .fromTo(modjo, { opacity: 1, scale: scaleInit }, {
      scrollTrigger: {
        trigger: modjo,
        start: "top 70%",
        end: "+=100",
        scrub: true,
        toggleActions: "restart pause reverse resume",
      },
      opacity: 0,
      scale: scaleFin
    })
    //animation pin du bonhomme Commander------------------------------------------------------------
    .to(logoParcours, {
      scrollTrigger: {
        trigger: `.module${trigrammeCapitalize}${tableauNumeroDeModule[0]}`,
        start: "top 70%",
        pin: logoParcours,
        end: tailleLignePinLogo,
        scrub: true,
        yoyo: true,
        toggleActions: "restart pause reverse resume",
      }
    })
  
  var moduleFunction = function () {
    for (i = 0; i < NbDeModule; i++) {
      gsap.fromTo(`#img${trigrammeCapitalize}${tableauNumeroDeModule[i]}`, { x: 50, opacity: 0, scale: 1 }, {
        scrollTrigger: {
          trigger: `#img${trigrammeCapitalize}${tableauNumeroDeModule[i]}`,
          start: 'top 40%',
          end: '-=20px 10%',
          scrub: true,
        },
        x: 0,
        opacity: 1,
        scale: 1,
      })
      gsap.fromTo(`.module${trigrammeCapitalize}${tableauNumeroDeModule[i]}`, { x: -50, opacity: 0 }, {
        scrollTrigger: {
          trigger: `#img${trigrammeCapitalize}${tableauNumeroDeModule[i]}`,
          start: "top 40%",
          end: "-=20px 10%",
          scrub: true,
          toggleActions: "restart pause reverse resume",
        }, x: 0,
        opacity: 1,
      })
      gsap.fromTo(`#${trigrammeCapitalize}${tableauNumeroDeModule[i]}Title`, { opacity: 0 }, {
        scrollTrigger: {
          trigger: `#img${trigrammeCapitalize}${tableauNumeroDeModule[i]}`,
          start: "top 40%",
          end: "-=20px 10%",
          scrub: true,
          toggleActions: "restart pause reverse resume",
        },
        opacity: 1,
      })
      gsap.fromTo(`#${trigrammeCapitalize}${tableauNumeroDeModule[i]}Objectif`, { opacity: 0 }, {
        scrollTrigger: {
          trigger: `#img${trigrammeCapitalize}${tableauNumeroDeModule[i]}`,
          start: "top 40%",
          end: "-=20px 10%",
          scrub: true,
          toggleActions: "restart pause reverse resume",
        },
        opacity: 1,
      })
    }
  }
  
  moduleFunction()

  gsap.fromTo(`#conclusion${trigrammeMaj}`, { x: -50, opacity: 0, scale: 1 }, {
    scrollTrigger: {
      trigger: `#conclusion${trigrammeMaj}`,
      start: "top 80%",
      end: "-=20px 20%",
      scrub: true,
    },
    x: 0,
    opacity: 1,
    scale: 1,
  })

}

const sectionParcours = document.querySelector(".section-parcours");
const titleParcours = document.querySelector(".title-parcours")
var tlSectionParcours = gsap.timeline({ paused: true });
//


window.addEventListener("load", () => {
  tlSectionParcours.play();
});

// fonction nom de page
var nomDePage = window.location.pathname;
nomDePage = nomDePage.split("/");
nomDePage = nomDePage[nomDePage.length - 1];
nomDePage = nomDePage.substr(0, nomDePage.lastIndexOf("."));
nomDePage = nomDePage.replace(new RegExp("(%20|_|-)", "g"), "");


switch (nomDePage) {
  case 'parcours':
    competenceFunction('Commander')
    competenceFunction('Situer')
    competenceFunction('Eduquer')
    competenceFunction('Instruire')
    competenceFunction('Communiquer')
    break;
  case 'commander':
    competenceFunction('Commander')
    break;
  case 'situer':
    competenceFunction('Situer')
    break;
  case 'eduquer':
    competenceFunction('Eduquer')
    break;
  case 'instruire':
    competenceFunction('Instruire')
    break;
  case 'communiquer':
    competenceFunction('Communiquer')
    break;
  default:
    console.log(`Sorry `);
}

