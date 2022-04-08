'use strict'

var album = {
    'Fresh Cream': {
        artist: 'Cream', 
        year: 1966,
        title: 'Fresh Cream'
    },
    'Hot Rats': {
        artist: 'Frank Zappa',
        year: 1969,
        title: 'Hot Rats'
    },
    'Space Oddity': {
        artist: 'David Bowie',
        year: 1969,
        title: 'Space Oddity'
    },
    'Merry Christmas': {
        artist: 'Mariah Carey',
        year: 1994,
        title: 'Merry Christmas'
    },
    'Song from a Room': {
        artist: 'Leonard Cohen',
        year: 1969,
        title: 'Song from a Room'
    },
    'Ummagumma': {
        artist: 'Pink Floyd',
        year: 1969,
        title: 'Ummagumma'
    },
    'Camembert Electrique': {
        artist: 'Gong',
        year: 1971,
        title: 'Camembert Electrique'
    },
    'The Piper at the Gates of Dawn': {
        artist: 'Pink Floyd',
        year: 1967,
        title: 'The Piper at the Gates of Dawn'
    }
}

console.log(album['Fresh Cream'].artist);

function albumYear (album) {
    
    let retour = `
    Artiste: ${album.artist}
    Année: ${album.year}
    Titre: ${album.title}
    `;
    return retour
}

console.log(albumYear(albums['Fresh Cream']));