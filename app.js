gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
// gsap.registerPlugin(MotionPathPlugin);

//animation accueil
// const commanderAccueil = document.querySelector('#commanderAccueil')
// const iconeCommanderAccueil = document.querySelector('#iconeCommanderAccueil')
// const eduquerAccueil = document.querySelector('#eduquerAccueil')
// const iconeSituerAccueil = document.querySelector('#iconeSituerAccueil')
// const instruireAccueil = document.querySelector('#instruireAccueil')
// const iconeCommuniquerAccueil = document.querySelector('#iconeCommuniquerAccueil')
// const situerAccueil = document.querySelector('#situerAccueil')
// const iconeEduquerAccueil = document.querySelector('#iconeEduquerAccueil')
// const communiquerAccueil = document.querySelector('#communiquerAccueil')
// const iconeInstuireAccueil = document.querySelector('#iconeInstruireAccueil')
// const logoAlphaAccueil = document.querySelector('#logoAlphaAccueil')
// const titre1 = document.querySelector('h1')
// const incarnation = document.querySelector('.title-incarner')
// const modjo = document.querySelector('.title-modjo')
// const loader =document.getElementById('pin')



// var t0 = gsap.timeline({})
// var t1 = gsap.timeline({paused:true, delay:5})
// var t2 = gsap.timeline({paused:true})

// window.addEventListener('load', () =>{
//     t1.play()
//     t2.play()
//   })


// t0
//     .fromTo(loader, { opacity: 1},{opacity:0, duration:3})
    



// t1
//     .from(commanderAccueil, { y: 700, opacity: 0,duration: 1, ease: "bounce" , delay:5})
//     .from(iconeCommanderAccueil, { opacity:0, y:-250, scale: 1, ease: "bounce"})
//     .from(communiquerAccueil, { x: 700, opacity: 0,duration: 1, ease: "bounce"}, "<-0.1")
//     .from(iconeCommuniquerAccueil, {x:-500, opacity: 0,ease: "bounce"})
//     .from(situerAccueil, {  y: -700, opacity: 0, duration: 1, ease: "bounce" })
//     .from(iconeSituerAccueil, {y:250, opacity:0, ease: "bounce"})
//     .from(eduquerAccueil, { y:700, opacity: 0,duration: 1, ease: "bounce" }, "<-0.1")
//     .from(iconeEduquerAccueil, {x:500, opacity:0,ease: "bounce"})
//     .from(instruireAccueil, { y: 700, opacity: 0,duration: 1, ease: "bounce" }, "<-0.1")
//     .from(iconeInstuireAccueil, {y:200, opacity: 0,ease: "bounce"})
//     .from(incarnation, {y:-50, opacity:0,duration: 3, opacity:0,ease:"rought"}, "<-3")
//     .fromTo(modjo, {x:-600, y:10, opacity:0}, { x: 0,y:-10,  opacity: 1, duration: 1, ease: "sine" }, "<-4")
//     .from(logoAlphaAccueil, { opacity: 0,scale: 0.1, duration: 3, delay: 2 })
   
    
    

// t2
//     .from(titre1, { y: -400, ease: "bounce", duration :3 , scale:2})
//     .to(titre1, { duration: 5, text: "La formation au comportement du militaire", ease: "none", delay: 1, scale:1.5 })

//section mission
const mission = document.querySelector('.title-mission')
var t3 = gsap.timeline({})


t3
    .fromTo(mission, {
    scrollTrigger: mission, 
    y:-10, color:'red'
}, {scrollTrigger: mission, 
    y:10, color:'blue'})

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
            markers: true,
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
            end:"+=1200",
            markers: true,
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
            markers: true,
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
            markers: true,
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
            markers: true,
            scrub:true,
            toggleActions:"restart pause reverse resume"
        },

        y: 1000, 
       
        
    })
    

