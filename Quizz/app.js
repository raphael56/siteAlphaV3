const form = document.querySelector('.form-quizz');
let tableauResultats = [];

const reponses = [];
reponses[0] = "c";
reponses[1] = 'c';
reponses[2] = 'c';
reponses[3] = 'c';
reponses[4] = 'c';
// console.log(reponses);

const emoji = ['✅','🌟','👀','🥺','👎'];
const titreResultats = document.querySelector('.resultats h2');
const noteResultats = document.querySelector('.note');
const aideResultats = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];


form.addEventListener('submit', (e) => {
    e.preventDefault();

    for (i = 1; i < 6; i++){
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    verifFunc(tableauResultats);
    tableauResultats = []
})

function verifFunc(tabResultats) {
    for (let a = 0; a < 5; a++){
        if (tabResultats[a] === reponses[a]) {
            verifTableau.push(true)
        } else {
            verifTableau.push(false)
        }
    }
    // console.log(verifTableau)
    afficherResultats(verifTableau)
    couleursFonction(verifTableau)
    verifTableau =[]
}

function afficherResultats(tabCheck) {
    const nbDeFautes = tabCheck.filter(el => el !== true).length
    switch (nbDeFautes) {
        case 0:
            titreResultats.innerText = " ✅ Bravo, c'est un sans faute ✅"
            aideResultats.innerText = '';
            noteResultats.innerText = '5/5';
            break
        case 1:
            titreResultats.innerText = " 🌟 Bravo, une legère erreur 🌟"
            aideResultats.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez';
            noteResultats.innerText = '4/5';
            break
        case 2:
            titreResultats.innerText = " 👀 encore un effort ...👀"
            aideResultats.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez';
            noteResultats.innerText = '3/5';
            break
        case 3:
            titreResultats.innerText = "👀 Reste quelques erreurs👀"
            aideResultats.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez';
            noteResultats.innerText = '2/5';
            break
        case 4:
            titreResultats.innerText = " 🥺Peut mieux faire 🥺"
            aideResultats.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez';
            noteResultats.innerText = '1/5';
            break
        case 5 :
            titreResultats.innerText = "👎 Peux mieux faire 👎"
            aideResultats.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez';
            noteResultats.innerText = '0/5';
            break
        default:
            "Woops, cas innatendu."

    }
}
function couleursFonction(tabValBool) {
    for (let j = 0; j < tabValBool.length; j++)
        if (tabValBool[j] === true) {
            toutesLesQuestions[j].style.background = 'lightgreen';            
        } else {
            toutesLesQuestions[j].style.background = '#ffb8b8';            
            toutesLesQuestions[j].classList.add('echec')

            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec')
            },500)
            
        }
}

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', ()=> {
        item.style.background = "white"
    })
})