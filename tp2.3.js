'use-strict';

// const fetch = require("node-fetch");

const fetch = require('node-fetch');

// Nathan MAICHER
// Aras CHAIGNE

async function getData() {
    
    const url = "http://musicbrainz.org/ws/2/artist/5927990e-34bb-493f-b5da-b7b28d43698f?inc=releases&fmt=json";

    try {
        const requete = await fetch(url); // attente d'une requête HTTP à l'url
        const json_data = await requete.json(); // attente de la conversion en JSON
        return json_data;

    } catch(e) {
        console.log("Erreur lors de la récupération des données:\n\n" + e);
    }
}


function Album(artist, year, title) {
    this.artist = artist;
    this.year = year;
    this.title = title;

    artist.addAlbum(this);
}

function Artist(name) {

    this.name = name;
    this.albums = [];
    Artist.list.push(this);
}
Artist.list = [];

Artist.withName = function withName (name) {
    return Artist.list.find(artist => artist.name === name);
}


Artist.prototype.addAlbum = function addAlbum(album) {
    this.albums.push(album);
}




getData().then(rep => { // après la réponse de la promesse

    const nom = rep['name']; // récupération du nom
    const artiste = new Artist(nom); // création de l'artiste
    const liste_sorties = rep['releases']; // récupération des sorties

    liste_sorties.map(sortie => {
        const annee = new Date(sortie['date']).getFullYear();
        // parsing de l'année
        const titre = sortie['title']; // récupération du titre

        new Album(artiste, annee, titre); // création de l'artiste
    });

    console.log(JSON.stringify(artiste, replacer, 4));
});

function replacer(key,value) {
    if (value instanceof Artist && key!='') { // si c'est un artiste
        // et qu'on est pas au niveau 1 d'affichage (key!='')
        return value.name; // on ne donne pas l'instance mais le nom
    } else { // ... pour éviter la redondance
        return value;
    }
}
