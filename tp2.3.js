'use-strict';

import fetch from 'node-fetch';

async function getData() {
    
    const url = "http://musicbrainz.org/ws/2/artist/5927990e-34bb-493f-b5da-b7b28d43698f?inc=releases&fmt=json";

    try {
        const requete = await fetch(url);
        const json_data = await requete.json();
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




getData().then(rep => {

    const nom = rep['name'];
    const artiste = new Artist(nom);
    const liste_sorties = rep['releases'];

    liste_sorties.map(sortie => {
        const annee = new Date(sortie['date']).getFullYear();
        const titre = sortie['title'];

        new Album(artiste, annee, titre);
    })

    console.log(JSON.stringify(artiste, replacer, 4));

})

function replacer(key,value) {
    if (value instanceof Artist && key!='') { // si c'est artiste
      return value.name; // on ne donne pas l'instance mais le nom
    } // ... pour éviter la redondance
    return value;
}