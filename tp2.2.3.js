'use strict';

const albums = require('./albums.json'); //récupération du fichier json
const albums_json = JSON.stringify( json_file ); //conversion des données du fichier en string
const albums = JSON.parse(albums_json); //création de l'objet album à partir de albums_json

function albumTitle (album) { //fonction retournant le titre d'un album
    return album.title;
}

function albumArtist (album) { //fonction retournant l'artiste d'un album
    return album.artist;
}

function albumYear (album) { //fonction retournant l'année d'un album
    return album.year;
}

console.log(albumTitle(albums['Fresh Cream']));
console.log(albumArtist(albums['Fresh Cream']));
console.log(albumYear(albums['Fresh Cream']));
