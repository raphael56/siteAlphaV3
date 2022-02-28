







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