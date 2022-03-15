const podcastIcon = document.getElementById('podcast-icon')
const titre1 = document.getElementById('titre1')
const titre2 = document.getElementById('titre2')
const titre3 = document.getElementById('titre3')
const buttonEcoute = document.getElementById('button_bonne_ecoute')
const titrePrincipal = document.querySelector('h1')
const imgMicro = document.getElementById('img-micro')


const tlAcc = gsap.timeline({paused:true})

const controller = new ScrollMagic.Controller();

tlAcc
    .from(podcastIcon, { opacity: 0, scale: 10, duration: 2 })
    .from(imgMicro,{x: 50, opacity:0, duration: 3}, '-=2')
    .fromTo(titrePrincipal, { opacity: 0 }, { opacity: 1, duration: 1, ease: "elastic" })
    .from(titre1,{y: -20, opacity:0, duration: 0.6}, '-=2.5')
    .from(titre2,{x: -50, opacity:0, duration: 0.6}, '-=0.5')
    .from(titre3,{x: 50, opacity:0, duration: 0.6}, '-=0.5')
    .from(buttonEcoute,{y: 150, opacity:0, duration: 1})

window.addEventListener('load', () =>{
    tlAcc.play()
  })

//anim podcast card
const listPodcast = document.querySelector('#listPoscast')
const titrePodcast = document.querySelector('.titrePodcast')
const itemPodcast = document.querySelectorAll('.vague1')

const tlPodcast = new TimelineMax()

tlPodcast
.from(titrePodcast, {y:-50, opacity:0, duration: 0.5})
.staggerFrom(itemPodcast, 1, {opacity:0}, 0.2, '-=0.5')

const scene1 = new ScrollMagic.Scene({
  triggerElement: buttonEcoute,
  triggerHook: 0.1, 
  reverse: false
})
.setTween(tlPodcast)
// .addIndicators()
    .addTo(controller)



    const itemPodcast2 = document.querySelectorAll('.vague2')

const tlPodcast2 = new TimelineMax()

tlPodcast2
.from(titrePodcast, {y:-50, duration: 0.5})
.staggerFrom(itemPodcast2, 1, {opacity:0}, 0.2, '-=0.5')

const scene2 = new ScrollMagic.Scene({
  triggerElement: titrePodcast,
  triggerHook: 0.1, 
  reverse: false
})
.setTween(tlPodcast2)
// .addIndicators()
    .addTo(controller)

