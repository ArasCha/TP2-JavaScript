'use strict';


function Album(artist, year, title) {
    this.artist = artist;
    this.year = year;
    this.title = title;
}

Album.prototype.getTitle = function getTitle() {
    return this.title;
}

Album.prototype.getArtist = function getArtist() {
    return this.artist;
}

Album.prototype.getYear = function getYear() {
    return this.year;
}

let album = new Album('Fresh Cream', 'Cream', 1966);
    
console.log(album.getTitle());
console.log(album.getArtist());
console.log(album.getYear());