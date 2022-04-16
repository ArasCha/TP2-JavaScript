'use-strict';

function Album(artist, year, title) { // constructeur d'Album
    this.artist = artist;
    this.year = year;
    this.title = title;

    artist.addAlbum(this); // ajout de l'album à l'artiste
}

function Artist(name) { // constructeur d'Album

    this.name = name;
    this.albums = []; // inititalisation de la liste d'albums
    Artist.list.push(this); // ajout de la nouvelle instance à la liste
}
Artist.list = []; // variable de classe liste pour accéder aux
// données peut importe l'instance

Artist.withName = function withName (name) {
    return Artist.list.find(artist => artist.name === name);
}
// Méthode non prototypale (statique) qui retourne l'instance de l'artiste
// que l'on cherche

Artist.prototype.addAlbum = function addAlbum(album) {
    this.albums.push(album);
}
// méthode d'instance qui ajoute l'album à la liste d'albums de l'artiste



let artiste = new Artist("Risitas");
new Album(artiste, 2000, "La Chancla")
let rechArtiste = Artist.withName("Risitas");
