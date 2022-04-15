'use strict'

let albums = JSON.parse(cheminAlbum);

function albumTitle (album) {
    return album.title;
}

function albumArtist (album) {
    return album.artist;
}

function albumYear (album) {
    return album.year;
}

console.log(albumTitle(albums['Fresh Cream']));
console.log(albumArtist(albums['Fresh Cream']));
console.log(albumYear(albums['Fresh Cream']));