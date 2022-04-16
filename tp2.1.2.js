'use strict';
// Nathan MAICHER
// Aras CHAIGNE

const t = [0, 3, 2, 5];
console.log('Plus petite valeur ' + t[findMinIndex(t, 0, t.length)]);
console.log('Plus petite valeur parmi les trois dernières ' +
t[findMinIndex(t, 1, t.length)]);
sortTable(t);
console.log(t);

/**
* return the index of the minimal value in the array 't' from index
* 'from' to index 'to' (excluded)
*/
function findMinIndex(t, from, to) {
    let j = from;
    for (let i = from + 1; i < to; i += 1) {
        if (t[j] > t[i]) {
            j = i;
        }
    }
    return j;
}

/**
* sort the table 't'
*/

function sortTable(t) {
    let j, s;
    for (let i = 0; i < t.length - 1; i += 1) {
        // Find the index of the minimal value in the unsorted part of
        // the array
        j = findMinIndex(t, i, t.length);
        // Swap the ith minimal value
        s = t[j];
        t[j] = t[i];
        t[i] = s;
    }
}

/*
1- La nature du problème semble être les variables i qui ne sont pas déclarées.
Il faut donc les déclarer via l'utilisation de "let".

2- Pour détecter ce problème plus facilement, on peut inscrire "use strict" au début de code. Cela passe
le code en mode strict, et chaque utilisation de variables non déclarée renvoie donc une erreur.
*/