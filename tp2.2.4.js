'use strict';


function Album(artist, year, title) { //constructeur pour un objet album
    this.artist = artist;
    this.year = year;
    this.title = title;
}

Album.prototype.getTitle = function getTitle() { //méthode retournant le titre d'un album
    return this.title;
}

Album.prototype.getArtist = function getArtist() { //méthode retournant l'artiste d'un album
    return this.artist;
}

Album.prototype.getYear = function getYear() { //méthode retournant l'année d'un album
    return this.year;
}

let album = new Album('Fresh Cream', 'Cream', 1966); //création d'un album
    
console.log(album.getTitle());
console.log(album.getArtist());
console.log(album.getYear());