'use-strict';


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




let artiste = new Artist("Risitas");

new Album(artiste, 2000, "La Chancla")

let rechArtiste = Artist.withName("Risitas");
console.log(rechArtiste);