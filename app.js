gsap.registerPlugin(TextPlugin);

//animation accueil
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
var t1 = gsap.timeline({})
var t2 = gsap.timeline({})



t1
    .from(commanderAccueil, { x: 700, duration: 1, ease: "bounce" })
    .to(iconeCommanderAccueil, {rotation:45, y:10, ease: "bounce"})
    .from(situerAccueil, {  x: 700, duration: 1, ease: "bounce" }, "<-0.1")
    .to(iconeSituerAccueil, {y:10, ease: "bounce"})
    .from(communiquerAccueil, { x: 700, duration: 1, ease: "bounce"}, "<-0.1")
    .to(iconeCommuniquerAccueil, {y:10, ease: "bounce"})
    .from(eduquerAccueil, { x: 700, duration: 1, ease: "bounce" }, "<-0.1")
    .to(iconeEduquerAccueil, {y:10, ease: "bounce"})
    .from(instruireAccueil, { x: 700, duration: 1, ease: "bounce" }, "<-0.1")
    .to(iconeInstuireAccueil, {y:10, ease: "bounce"})
    .from(logoAlphaAccueil, { scale: 0.1, duration: 3 }, "<-3")
    .to(iconeCommanderAccueil, { rotation: 0, y: 10, ease: "bounce" })
    .from(incarnation, {y:700, duration: 3, opacity:0,ease:"rought"}, "<-2")
    .from(commanderAccueil, { rotation: 0, duration: 1, ease: "bounce" })
    .from(modjo, {x:-600, opacity:0, duration: 1, ease:"sine"}, "<-4")

t2.to(titre1, {duration: 10, text: "La formation au comportement du militaire", ease: "none", delay: 5});



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