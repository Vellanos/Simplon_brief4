const accueil: Element | null = document.querySelector(".accueil")
const bouton_accueil: HTMLButtonElement | null = document.querySelector("#buttonAccueil")
const questionBloc: Element | null = document.querySelector(".question")
const wrapperreponse: Element | null = document.querySelector("#wrapperButtonReponse")
const compteurQuestion: Element | null = document.querySelector("#questionConteurId")
const laQuestion: Element | null = document.querySelector("#laQuestionId")
const bouton_rep_1: Element | null = document.querySelector("#buttonReponse1")
const bouton_rep_2: Element | null = document.querySelector("#buttonReponse2")
const bouton_rep_3: Element | null = document.querySelector("#buttonReponse3")
const bouton_rep_4: Element | null = document.querySelector("#buttonReponse4")
const bouton_next: Element | null = document.querySelector("#leNextId")
const bouton_next_2: Element | null = document.querySelector("#leNextId > button")
const laReponse: Element | null = document.querySelector("#laReponseId")
const leCommentaire: Element | null = document.querySelector("#leCommentaireId")
let paragraphe_reponse: HTMLCollectionOf<Element> = document.getElementsByClassName('parahide')

let leCompteur: number = 0;
let reponse: string = '';
let score: number = 0;

interface quizz {
    intitule: string;
    reponse1: string;
    reponse2: string;
    reponse3: string;
    reponse4: string;
    result1: boolean;
    result2: boolean;
    result3: boolean;
    result4: boolean;
}

const question: quizz[] = [
    { // première question
        intitule: 'Quel est le titre de la série mettant en scène le personnage de raymond reddington ?',
        reponse1: 'Prison Break',
        reponse2: 'Blacklist',
        reponse3: 'Lucifer',
        reponse4: 'Narcos',
        result1: false,
        result2: true,
        result3: false,
        result4: false
    },
    { // 2eme question
        intitule: 'Dans la série Netflix "Vikings", combien de fils Ragnar Lothbrok a-t-il ?',
        reponse1: 'Deux',
        reponse2: 'Trois',
        reponse3: 'Quatre',
        reponse4: 'Cinq',
        result1: false,
        result2: false,
        result3: true,
        result4: false
    },
    { // 3eme question
        intitule: "Dans quelle série Netflix les derniers survivants de l'humanité vivent-ils à bord d'un train en mouvement perpétuel, parcourant le globe après qu'une catastrophe climatique ait glacé la planète entière ?",
        reponse1: 'Snowpiercer',
        reponse2: 'Stranger Things',
        reponse3: 'The Umbrella Academy',
        reponse4: 'Altered Carbon',
        result1: true,
        result2: false,
        result3: false,
        result4: false
    },
    { // 4eme question
        intitule: "Dans quelle série Netflix chaque épisode présente une histoire indépendante, explorant les aspects les plus sombres et les plus inquiétants de la technologie moderne et de la société ?",
        reponse1: 'Black Mirror',
        reponse2: 'Altered Carbon',
        reponse3: "Perdu dans l'espace",
        reponse4: 'The Billion Dollar Code',
        result1: true,
        result2: false,
        result3: false,
        result4: false
    },
    { // 5eme question
        intitule: "Dans quelle série de Netflix voyons-nous les aventures d'un explorateur dans la cour impériale de Kubilai Khan, qui a fondé la dynastie mongole des Yuan en Chine  ?",
        reponse1: 'The Empress of China',
        reponse2: 'The Last Kingdom',
        reponse3: 'The Crown',
        reponse4: 'Marco Polo',
        result1: false,
        result2: false,
        result3: false,
        result4: true
    }
]


if (bouton_accueil) {
    bouton_accueil.addEventListener('click', startQuizz)
}
if (bouton_rep_1) {
    bouton_rep_1.addEventListener('click', fReponse1)
}
if (bouton_rep_2) {
    bouton_rep_2.addEventListener('click', fReponse2)
}
if (bouton_rep_3) {
    bouton_rep_3.addEventListener('click', fReponse3)
}
if (bouton_rep_4) {
    bouton_rep_4.addEventListener('click', fReponse4)
}
if (bouton_next && leCompteur <= question.length) {
    bouton_next.addEventListener('click', fNext)
}


function fReponse1() {
    laQuestion.textContent = "La réponse est : "
    laReponse.textContent = reponse

    if (question[leCompteur].result1 == true) {
        score = score + 1
        leCommentaire.textContent = "Nice ! C'est la bonne réponse"
    } else {
        leCommentaire.textContent = "Dommage !"
    }

    wrapperreponse.classList.add('hide')
    wrapperreponse.classList.remove('wrapperButtonReponse')

    for (let i = paragraphe_reponse.length - 1; i > -1;) {
        paragraphe_reponse[i].classList.add('parashow')
        paragraphe_reponse[i].classList.remove('parahide')
        i = i - 1
    }
    paragraphe_reponse = document.getElementsByClassName('parashow')


}

function fReponse2() {
    laQuestion.textContent = "La réponse est : "
    laReponse.textContent = reponse

    if (question[leCompteur].result2 == true) {
        score = score + 1
        leCommentaire.textContent = "Nice ! C'est la bonne réponse"
    } else {
        leCommentaire.textContent = "Dommage !"
    }

    wrapperreponse.classList.add('hide')
    wrapperreponse.classList.remove('wrapperButtonReponse')

    for (let i = paragraphe_reponse.length - 1; i > -1;) {
        paragraphe_reponse[i].classList.add('parashow')
        paragraphe_reponse[i].classList.remove('parahide')
        i = i - 1
    }
    paragraphe_reponse = document.getElementsByClassName('parashow')

}

function fReponse3() {
    laQuestion.textContent = "La réponse est : "
    laReponse.textContent = reponse

    if (question[leCompteur].result3 == true) {
        score = score + 1
        leCommentaire.textContent = "Nice ! C'est la bonne réponse"
    } else {
        leCommentaire.textContent = "Dommage !"
    }

    wrapperreponse.classList.add('hide')
    wrapperreponse.classList.remove('wrapperButtonReponse')

    for (let i = paragraphe_reponse.length - 1; i > -1;) {
        paragraphe_reponse[i].classList.add('parashow')
        paragraphe_reponse[i].classList.remove('parahide')
        i = i - 1
    }
    paragraphe_reponse = document.getElementsByClassName('parashow')
}

function fReponse4() {
    laQuestion.textContent = "La réponse est : "
    laReponse.textContent = reponse

    if (question[leCompteur].result4 == true) {
        score = score + 1
        leCommentaire.textContent = "Nice ! C'est la bonne réponse"
    } else {
        leCommentaire.textContent = "Dommage !"
    }

    wrapperreponse.classList.add('hide')
    wrapperreponse.classList.remove('wrapperButtonReponse')

    for (let i = paragraphe_reponse.length - 1; i > -1;) {
        paragraphe_reponse[i].classList.add('parashow')
        paragraphe_reponse[i].classList.remove('parahide')
        i = i - 1
    }
    paragraphe_reponse = document.getElementsByClassName('parashow')
}

function startQuizz() {
    accueil.classList.remove('loading')
    accueil.classList.add('cancelLoading')

    questionBloc.classList.remove('hide')
    questionBloc.classList.add('questionConteneur')

    wrapperreponse.classList.remove('hide')
    wrapperreponse.classList.add('wrapperButtonReponse')

    leCompteur = 0
    score = 0

    // Trouver la bonne réponse
    if (question[leCompteur].result1 == true) {
        reponse = question[leCompteur].reponse1
    } else if (question[leCompteur].result2 == true) {
        reponse = question[leCompteur].reponse2
    } else if (question[leCompteur].result3 == true) {
        reponse = question[leCompteur].reponse3
    } else if (question[leCompteur].result4 == true) {
        reponse = question[leCompteur].reponse4
    }

    // Afficher les différents éléments
    compteurQuestion.textContent = leCompteur + 1 + "/ " + question.length
    laQuestion.textContent = question[leCompteur].intitule
    bouton_rep_1.textContent = question[leCompteur].reponse1
    bouton_rep_2.textContent = question[leCompteur].reponse2
    bouton_rep_3.textContent = question[leCompteur].reponse3
    bouton_rep_4.textContent = question[leCompteur].reponse4

}

function fNext() {

    leCompteur = leCompteur + 1

    if (leCompteur < question.length) {
        // Trouver la bonne réponse avant de cliquer sur les boutons
        if (question[leCompteur].result1 == true) {
            reponse = question[leCompteur].reponse1
        } else if (question[leCompteur].result2 == true) {
            reponse = question[leCompteur].reponse2
        } else if (question[leCompteur].result3 == true) {
            reponse = question[leCompteur].reponse3
        } else if (question[leCompteur].result4 == true) {
            reponse = question[leCompteur].reponse4
        }
        //Afficher les différents éléments
        compteurQuestion.textContent = leCompteur + 1 + "/ " + question.length
        laQuestion.textContent = question[leCompteur].intitule
        bouton_rep_1.textContent = question[leCompteur].reponse1
        bouton_rep_2.textContent = question[leCompteur].reponse2
        bouton_rep_3.textContent = question[leCompteur].reponse3
        bouton_rep_4.textContent = question[leCompteur].reponse4

        wrapperreponse.classList.remove('hide')
        wrapperreponse.classList.add('wrapperButtonReponse')

        for (let i = paragraphe_reponse.length - 1; i > -1;) {
            paragraphe_reponse[i].classList.add('parahide')
            paragraphe_reponse[i].classList.remove('parashow')

            i = i - 1
        }
        paragraphe_reponse = document.getElementsByClassName('parahide')
    } else {
        compteurQuestion.classList.remove('questionConteur')
        compteurQuestion.classList.add('hide')

        laQuestion.textContent = "Ton score est de : "
        laReponse.textContent = score + "/" + question.length
        let taunt: string = ""
        if (score <= 1) {
            taunt = "Vraiment pas ouf"
        } else if (score <= 3) {
            taunt = "Tu peux mieux faire"
        } else if (score == 4) {
            taunt = "T'es chaud !"
        } else if (score == 5) {
            taunt = "T'es trop fort gg !"
        }
        leCommentaire.textContent = taunt
        bouton_next_2.textContent = "Retour à l'accueil"
    }

    if (bouton_next && leCompteur >= question.length) {
        bouton_next.removeEventListener('click', fNext)
        bouton_next.addEventListener('click', ouvrirPopup)
    }
}

function ouvrirPopup() {
    // Création de la popup + style
    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.width = "300px";
    popup.style.height = "300px";
    popup.style.backgroundColor = "black";
    popup.style.color = "black";
    popup.style.border = "1px solid red";
    popup.style.padding = "10px";
    popup.style.display = "flex";
    popup.style.flexDirection = "column"
    popup.style.alignItems = "center";
    popup.style.justifyContent = "center";
    popup.style.textAlign = "center";
    popup.style.gap = "20px";


    // Contenu de la popup
    const titre = document.createElement("h2");
    titre.textContent = "Merci d'avoir jouer !";
    titre.style.margin = "0";
    popup.appendChild(titre);


    const message = document.createElement("p");
    message.textContent = "Vous pouvez retrouver l'ensemble de ces séries sur l'application :";
    message.style.margin = "0";

    const lien = document.createElement("a");
    lien.href = "https://www.netflix.com/"
    lien.textContent = "NETFLIX";
    lien.target = "_blank";
    lien.style.border = "1px solid #black";
    lien.style.backgroundColor = "black";
    lien.style.color = "red";
    lien.style.padding = "1%";
    lien.style.fontSize = "30px";
    popup.appendChild(message);
    popup.appendChild(lien);

    const bouton = document.createElement("button");
    bouton.textContent = "Fermer";
    bouton.style.backgroundColor = "#FFF";
    bouton.style.fontSize = "30px";
    bouton.style.marginTop = "3%";
    bouton.addEventListener("click", function () {
        popup.parentNode!.removeChild(popup);
    });
    popup.appendChild(bouton);

    // Ajouter la popup au document
    document.body.appendChild(popup);

    //Dernière modification du bouton
    bouton_next?.removeEventListener('click', ouvrirPopup)
    bouton_next?.addEventListener('click', function fAccueil() {
        location.reload()
    })
}


