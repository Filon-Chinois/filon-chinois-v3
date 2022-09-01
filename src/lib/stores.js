import {writable} from "svelte/store";

export const session = writable({user: null, accessToken: null, error: null});
export const l = writable('fr')
export const L = writable({
        fr: {
            offline: {
                message: "Le Filon Chinois, c'est un site dédié à l'apprentissage du mandarin pour les débutants. Il a été créé afin de fournir un outil multimédia pratique regroupant plusieurs avantages et ressources en un endroit, dont une multitude d'exercices avec rétroaction immédiate, des jeux de mémoires et des fonctions technologiques comme la synthèse vocale. Le site est en constante évolution afin de pouvoir mieux vous aider alors ne soyez pas surpris si le contenu a changé depuis votre dernière visite! Bon apprentissage!"
            },
        },
        en: {
            titre: "Filon-Chinois",
        },
    }
)


export const INFO = writable({
        version: 'Alpha 0.8.31.2124',
        date: '31/08/2022'
    }
)