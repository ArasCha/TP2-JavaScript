'use strict';

const albums = require('./albums.json');
const albums_json = JSON.stringify( json_file );
const albums = JSON.parse(albums_json);

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






// 'use strict'

// const albums = require('./albums.json');



// console.log(album['Fresh Cream'].artist);

// function albumYear (album) {
    
//     let retour = `
//     Artiste: ${album.artist}
//     Année: ${album.year}
//     Titre: ${album.title}
//     `;
//     return retour
// }

// console.log(JSON.stringify(album));

// console.log(albumYear(album['Fresh Cream']));