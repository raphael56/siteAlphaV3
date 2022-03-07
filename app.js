gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
// gsap.registerPlugin(MotionPathPlugin);

//--------------------animation accueil-----------------------------------------
const commanderAccueil = document.querySelector('#commanderAccueil')
const iconeCommanderAccueil = document.querySelector('#iconeCommanderAccueil')
const eduquerAccueil = document.querySelector('#eduquerAccueil')
const iconeSituerAccueil = document.querySelector('#iconeSituerAccueil')
const instruireAccueil = document.querySelector('#instruireAccueil')
const iconeCommuniquerAccueil = document.querySelector('#iconeCommuniquerAccueil')
const situerAccueil = document.querySelector('#situerAccueil')
const iconeEduquerAccueil = document.querySelector('#iconeEduquerAccueil')
const communiquerAccueil = document.querySelector('#communiquerAccueil')
const iconeInstuireAccueil = document.querySelector('#iconeInstruireAccueil')
const logoAlphaAccueil = document.querySelector('#logoAlphaAccueil')
const titre1 = document.querySelector('h1')
const incarnation = document.querySelector('.title-incarner')
const modjo = document.querySelector('.title-modjo')
const loader =document.getElementById('pin')



var t0 = gsap.timeline({})
var t1 = gsap.timeline({paused:true, delay:5})
var t2 = gsap.timeline({paused:true})

window.addEventListener('load', () =>{
    t1.play()
    t2.play()
  })


t0
    .fromTo(loader, { opacity: 1},{opacity:0, duration:3})
    

t1
    .from(commanderAccueil, { y: 700, opacity: 0,duration: 1, ease: "bounce" , delay:5})
    .from(iconeCommanderAccueil, { opacity:0, y:-250, scale: 1, ease: "bounce"})
    .from(communiquerAccueil, { x: 700, opacity: 0,duration: 1, ease: "bounce"}, "<-0.1")
    .from(iconeCommuniquerAccueil, {x:-500, opacity: 0,ease: "bounce"})
    .from(situerAccueil, {  y: -700, opacity: 0, duration: 1, ease: "bounce" })
    .from(iconeSituerAccueil, {y:250, opacity:0, ease: "bounce"})
    .from(eduquerAccueil, { y:700, opacity: 0,duration: 1, ease: "bounce" }, "<-0.1")
    .from(iconeEduquerAccueil, {x:500, opacity:0,ease: "bounce"})
    .from(instruireAccueil, { y: 700, opacity: 0,duration: 1, ease: "bounce" }, "<-0.1")
    .from(iconeInstuireAccueil, {y:200, opacity: 0,ease: "bounce"})
    .from(incarnation, {y:-50, opacity:0,duration: 3, opacity:0,ease:"rought"}, "<-3")
    .fromTo(modjo, {x:-600, y:10, opacity:0}, { x: 0,y:-10,  opacity: 1, duration: 1, ease: "sine" }, "<-4")
    .from(logoAlphaAccueil, { opacity: 0,scale: 0.1, duration: 3 })
   
    
    

t2
    .from(titre1, { y: -400, ease: "bounce", duration :3 , scale:2})
    .to(titre1, { duration: 5, text: "La formation au comportement du militaire", ease: "none", delay: 1, scale:1.2 })

// -----------------------------animation section mission----------------
const titleMission = document.querySelector('.title-mission')
const sectionMission =document.querySelector('.section-mission')
const subtitleMission = document.querySelector('.subtitle-mission')
const mission = document.getElementById('mission')
const developper = document.getElementById('developper-mission')
const savoirEtre = document.getElementById('savoirEtre-mission')
const officier = document.getElementById('officier-mission')
var t3 = gsap.timeline({ paused: true })

t3
    .to(mission, {
        scrollTrigger: {
            trigger: titre1,
            start: "bottom top",
            endTrigger: mission,
            end: "+=200%",
            scrub: 1,
            toggleActions: "restart pause reverse resume"
        },
        backgroundColor: "#f1f1f1"
    })
    .to(titleMission, {
        scrollTrigger: {
            trigger: sectionMission, 
            start: "-1% 10%",
            end:"700px top",
            scrub:true,
            toggleActions:"restart pause reverse resume"
            },
            x: -110,
    })
    .to(developper, {
        scrollTrigger: {
            trigger: developper,
            start: "bottom 10%",
            end:"100px top",
            scrub:true,
            toggleActions:"restart pause reverse resume"
        },
        fontSize: "2rem",
        fontWeight: "600", 
    })
    .to(savoirEtre, {
        scrollTrigger: {
            trigger: savoirEtre,
            start: "-1% 10%",
            end:"10px top",
            scrub:true,
            toggleActions:"restart pause reverse resume"
        },
        fontSize: "2.8rem",
        fontWeight: "900", 
    })
    .to(officier, {
        scrollTrigger: {
            trigger: officier,
            start: "bottom 50%",
            end:"+=1500px 10%",
            scrub: true,
            // markers:true,
            // pin: true,
            toggleActions:"restart pause reverse resume"
        },
        fontSize: "4rem",
        fontWeight: "900", 
    })

    
// section formation
   const formation = document.getElementById('formation')
const appuis = document.getElementById('appuis')
const phi = document.getElementById('phi')
const roue = document.getElementById('roue')
const peda = document.getElementById('peda')
 
var t4 = gsap.timeline({ paused: true })

t4
.to(appuis, {
    scrollTrigger: {
        trigger: formation,
        start: "1200 50%",
        end: "+=300",
        scrub: true,
        // markers:true,
        // pin: true,
        toggleActions:"restart pause reverse resume"
    },
    color: "red",
    fontWeight: "900", 
    y:50,
    opacity: 1,
    
})
    .fromTo(phi, {x:-300}, {
    scrollTrigger: {
        trigger: formation,
        start: "1200px 70%",
        end:() => "+=200px",
        scrub: true,
        // markers:true,
        // pin: true,
        toggleActions:"restart pause reverse resume"
    },
    opacity: 1,
    fontWeight: "900", 
    x:0,
    
})
    .fromTo(roue, {x:300}, {
    scrollTrigger: {
        trigger: formation,
        start: "1400px 70%",
        end:() => "+=200px",
        scrub: true,
        // markers:true,
        // pin: true,
        toggleActions:"restart pause reverse resume"
    },
    opacity: 1,
    fontWeight: "900", 
    x:0,
    
})
.fromTo(peda, {x:-300}, {
    scrollTrigger: {
        trigger: formation,
        start: "1600px 70%",
        end:() => "+=200px",
        scrub: true,
        // markers:true,
        // pin: true,
        toggleActions:"restart pause reverse resume"
    },
    opacity: 1,
    fontWeight: "900", 
    x:0,
    
})


// section pedagogie
const pedagogie = document.getElementById('pedagogie')
const titlePeda = document.querySelector('.title-pedagogie')
 
var t5 = gsap.timeline({ paused: true })

t5
.fromTo(titlePeda,{x:-500}, {
    scrollTrigger: {
        trigger: pedagogie,
        start: "1600 50%",
        end: "+=200",
        scrub: true,
        // markers:true,
        // pin: true,
        toggleActions:"restart pause reverse resume"
    },
    color: "white",
    fontWeight: "900", 
    x:0,
    opacity: 1,
    
})










// ---------------section competences--------
const competenceCommander = document.getElementById('competence-commander')
const iconeCommander = document.getElementById('iconeCommander')
const competenceSituer = document.getElementById('competence-situer')
const iconeSituer = document.getElementById('iconeSituer')
const competenceEduquer = document.getElementById('competence-eduquer')
const iconeEduquer = document.getElementById('iconeEduquer')
const competenceInstruire = document.getElementById('competence-instruire')
const iconeInstruire = document.getElementById('iconeInstruire')
const competenceCommuniquer = document.getElementById('competence-communiquer')
const iconeCommuniquer = document.getElementById('iconeCommuniquer')
const bgSectionCompetences = document.querySelector('.section-competences')



var t6 = gsap.timeline({ paused: true })

t6
.fromTo(iconeCommuniquer,{x:100}, {
    scrollTrigger: {
        trigger: pedagogie,
        start: "2500 50%",
        end: "+=200",
        scrub: true,
        markers:true,
        // pin: true,
        toggleActions:"restart pause reverse resume"
    },
    x:0,
    opacity: 1,
    
})
.fromTo(iconeInstruire,{x:100}, {
    scrollTrigger: {
        trigger: pedagogie,
        start: "2500 50%",
        end: "+=200",
        scrub: true,
        markers:true,
        // pin: true,
        toggleActions:"restart pause reverse resume"
    },
    x:0,
    opacity: 1,
    
})
.fromTo(iconeEduquer,{y:500}, {
    scrollTrigger: {
        trigger: pedagogie,
        start: "2500 50%",
        end: "+=200",
        scrub: true,
        markers:true,
        // pin: true,
        toggleActions:"restart pause reverse resume"
    },
    y:0,
    opacity: 1,
    
})
.fromTo(iconeSituer,{x:-500}, {
    scrollTrigger: {
        trigger: pedagogie,
        start: "2500 50%",
        end: "+=200",
        scrub: true,
        markers:true,
        // pin: true,
        toggleActions:"restart pause reverse resume"
    },
    x:0,
    opacity: 1,
})
.fromTo(iconeCommander,{x:-500}, {
    scrollTrigger: {
        trigger: pedagogie,
        start: "2500 50%",
        end: "+=200",
        scrub: true,
        markers:true,
        // pin: true,
        toggleActions:"restart pause reverse resume"
    },
    x:0,
    opacity: 1,
    
})







iconeCommander.addEventListener('mouseenter', () => {
    competenceCommander.classList.toggle('active');
    bgSectionCompetences.style.backgroundColor = '#5C7590'
})
iconeCommander.addEventListener('mouseleave', () => {
    competenceCommander.classList.toggle('active')
    bgSectionCompetences.style.backgroundColor = '#294062'
    
})
iconeSituer.addEventListener('mouseenter', () => {
    competenceSituer.classList.toggle('active');
    bgSectionCompetences.style.backgroundColor = '#1A4A28'
})
iconeSituer.addEventListener('mouseleave', () => {
    competenceSituer.classList.toggle('active')
    bgSectionCompetences.style.backgroundColor = '#294062'
    
})
iconeEduquer.addEventListener('mouseenter', () => {
    competenceEduquer.classList.toggle('active');
    bgSectionCompetences.style.backgroundColor = '#8D943F'
})
iconeEduquer.addEventListener('mouseleave', () => {
    competenceEduquer.classList.toggle('active')
    bgSectionCompetences.style.backgroundColor = '#294062'
    
})
iconeInstruire.addEventListener('mouseenter', () => {
    competenceInstruire.classList.toggle('active');
    bgSectionCompetences.style.backgroundColor = '#891B0B'
})
iconeInstruire.addEventListener('mouseleave', () => {
    competenceInstruire.classList.toggle('active')
    bgSectionCompetences.style.backgroundColor = '#294062'
    
})
iconeCommuniquer.addEventListener('mouseenter', () => {
    competenceCommuniquer.classList.toggle('active');
    bgSectionCompetences.style.backgroundColor = '#734693'
})
iconeCommuniquer.addEventListener('mouseleave', () => {
    competenceCommuniquer.classList.toggle('active')
    bgSectionCompetences.style.backgroundColor = '#294062'
    
})


// --------section parcours------------------
const sectionParcours = document.querySelector('.section-parcours')

//commander
const logoCommanderParcours = document.getElementById('logoCommanderParcours')

var tlcommander = gsap.timeline({paused:true})

tlcommander
    .to(logoCommanderParcours, {
        scrollTrigger: {
            trigger: sectionParcours, 
            start: "1% 5%",
            end:"+=500",
            // markers: true,
            scrub:true,
            toggleActions:"restart pause reverse resume"
        },
        y: 1000, 
      
        
    })
//se situer
const logoSituerParcours = document.getElementById('logoSituerParcours')
const containerCompetenceSituer = document.querySelector('.container-competence-seSituer')

var tlsituer = gsap.timeline({paused:true})

tlsituer
    .to(logoSituerParcours, {
        scrollTrigger: {
            trigger: containerCompetenceSituer, 
            start: "1% 5%",
            end:"700px top",
            // markers: true,
            scrub:true,
            toggleActions:"restart pause reverse resume"
        },

        y: 1470, 
       
        
    })
    
//instruire
const logoInstruireParcours = document.getElementById('logoInstruireParcours')
const containerCompetenceInstruire = document.querySelector('.container-competence-instruire')

var tlinstruire = gsap.timeline({paused:true})

tlinstruire
    .to(logoInstruireParcours, {
        scrollTrigger: {
            trigger: containerCompetenceInstruire, 
            start: "1% 5%",
            end:"+=1200",
            // markers: true,
            scrub:true,
            toggleActions:"restart pause reverse resume"
        },

        y: 1000, 
       
        
    })
//eduquer
const logoEduquerParcours = document.getElementById('logoEduquerParcours')
const containerCompetenceEduquer = document.querySelector('.container-competence-eduquer')

var tleduquer = gsap.timeline({paused:true})

tleduquer
    .to(logoEduquerParcours, {
        scrollTrigger: {
            trigger: containerCompetenceEduquer, 
            start: "1% 5%",
            end:"+=1200",
            // markers: true,
            scrub:true,
            toggleActions:"restart pause reverse resume"
        },

        y: 1000, 
       
        
    })
//instruire
const logoCommuniquerParcours = document.getElementById('logoCommuniquerParcours')
const containerCompetenceCommuniquer = document.querySelector('.container-competence-communiquer')

var tlinstruire = gsap.timeline({paused:true})

tlinstruire
    .to(logoCommuniquerParcours, {
        scrollTrigger: {
            trigger: containerCompetenceCommuniquer, 
            start: "1% 5%",
            end:"+=1200",
            // markers: true,
            scrub:true,
            toggleActions:"restart pause reverse resume"
        },

        y: 1000, 
       
        
    })
    

