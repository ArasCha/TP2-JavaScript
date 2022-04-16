'use strict';
// Nathan MAICHER
// Aras CHAIGNE

const albums_json = require('./albums.json');
// Récupération de l'objet albums sans utiliser JSON.parse et
// JSON.stringify

function Album(artist, year, title) { // constrcteur d'Album
    this.artist = artist;
    this.year = year;
    this.title = title;
}


// 1
const entrees = Object.entries(albums_json);
// [ [key, value], [key, value] ... ]


// 2
const albums = entrees.map( values => {
    const key = values[0];
    const album = values[1];

    return [key, new Album(album.artist, album.year, album.title)];
}); // [ [key, Album], [key, Album] ... ]
// pour chaque set [key, value] de la liste entrees, on ajoute à albums
// le set [key Album]


// 3
const objets = albums.map( value => {
    const title = value[0];
    const album = value[1];

    return {[title]: album};
}); // [ {title: Album} , {title: Album} ... ]
// pour chaque set [key, Album] de la liste albums, on ajoute à objets le
// set {title: Album}


// 4
const concat = Object.assign(objets, ...entrees);
console.log(concat);
// copie de la valeur de la référence de entrees grâce au spread operator
// qu'on ajoute à la liste objets
