'use strict';
// Nathan MAICHER
// Aras CHAIGNE

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

Artist.withName = function withName(name) {
    return Artist.list.find(artist => artist.name === name);
};


Artist.prototype.addAlbum = function addAlbum(album) {
    this.albums.push(album);
};



const artiste = new Artist('Risitas');
new Album(artiste, 2000, 'La Chancla');
const rechArtiste = Artist.withName('Risitas');


console.log(JSON.stringify(rechArtiste, replacer, 4));


function replacer(key, value) {
    if (value instanceof Artist && key !== '') { // si c'est artiste
        return value.name; // on ne donne pas l'instance mais le nom
    }
    else {// ... pour éviter la redondance
        return value;
    }
}