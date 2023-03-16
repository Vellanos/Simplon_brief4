const accueil:Element | null = document.querySelector(".accueil")
const bouton_accueil:HTMLButtonElement | null = document.querySelector("#buttonAccueil")
const questionBloc :Element | null = document.querySelector(".question")
const wrapperreponse :Element | null = document.querySelector("#wrapperButtonReponse")

if (bouton_accueil) {
    bouton_accueil.addEventListener('click', startQuizz)
}

function startQuizz() {
    accueil.classList.remove('loading')
    accueil.classList.add('cancelLoading')

    questionBloc.classList.remove('hide')
    questionBloc.classList.add('questionConteneur')

    wrapperreponse.classList.remove('hide')
    wrapperreponse.classList.add('wrapperButtonReponse')
    
}

interface quizz {
    intitule: string;
    compteur: number;
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
        compteur: 1,
        reponse1: 'Prison Break',
        reponse2: 'Blacklist',
        reponse3: 'Lucifer',
        reponse4: 'Narcos',
        result1:false,
        result2:true,
        result3:false,
        result4:false
    },
    { // 2eme question
        intitule: 'Dans la série Netflix "Vikings", combien de fils Ragnar Lothbrok a-t-il ?',
        compteur: 2,
        reponse1: 'Deux',
        reponse2: 'Trois',
        reponse3: 'Quatre',
        reponse4: 'Cinq',
        result1:false,
        result2:false,
        result3:true,
        result4:false
    },
    { // 3eme question
        intitule: "Dans quelle série Netflix les derniers survivants de l'humanité vivent-ils à bord d'un train en mouvement perpétuel, parcourant le globe après qu'une catastrophe climatique ait glacé la planète entière ?",
        compteur: 3,
        reponse1: 'Snowpiercer',
        reponse2: 'Stranger Things',
        reponse3: 'The Umbrella Academy',
        reponse4: 'Altered Carbon',
        result1:true,
        result2:false,
        result3:false,
        result4:false
    },
    { // 4eme question
        intitule: "Dans quelle série Netflix chaque épisode présente une histoire indépendante, explorant les aspects les plus sombres et les plus inquiétants de la technologie moderne et de la société ?",
        compteur: 4,
        reponse1: 'Black Mirror',
        reponse2: 'Altered Carbon',
        reponse3: "Perdu dans l'espace",
        reponse4: 'The Billion Dollar Code',
        result1:true,
        result2:false,
        result3:false,
        result4:false
    },
    { // 5eme question
        intitule: "Dans quelle série de Netflix voyons-nous les aventures d'un explorateur dans la cour impériale de Kubilai Khan, qui a fondé la dynastie mongole des Yuan en Chine  ?",
        compteur: 5,
        reponse1: 'The Empress of China',
        reponse2: 'The Last Kingdom',
        reponse3: 'The Crown',
        reponse4: 'Marco Polo',
        result1:false,
        result2:false,
        result3:false,
        result4:true
    }
   
]

