'use strict';

const albums_json = require('./albums.json');

function Album(artist, year, title) {
    this.artist = artist;
    this.year = year;
    this.title = title;
}


// 1
const entrees = Object.entries(albums_json); // [ [key, value], [key, value] ... ]


// 2
const albums = entrees.map( values => {
    let key = values[0];
    let album = values[1];

    return [ key , new Album(album.artist, album.year, album.title) ];
}); // [ [key, Album], [key, Album] ... ]


// 3
const objets = albums.map( value => {
    let title = value[0];
    let album = value[1];

    return { [title] : album};
}); // [ {title: Album} , {title: Album} ... ]


// 4
const concat = Object.assign(objets, ...entrees);
