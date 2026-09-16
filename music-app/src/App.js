import React, { Component } from 'react';
import Header from './components/Header';
import Song from './components/Song';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // Datos ficticios de canciones
    this.state = {
      songs: [
        {
          id: 1,
          title: 'Earrings',
          artist: 'Malcolm Todd',
          album: 'Sweet Boy',
          duration: '2:32',
        },
        {
          id: 2,
          title: 'Imaginary Places',
          artist: 'BUSDRIVER',
          album: 'Temporary Forever',
          duration: '3:15',
        },
        {
          id: 3,
          title: 'Forever',
          artist: 'keshi',
          album: 'Requiem',
          duration: '2:51',
        },
        {
          id: 4,
          title: 'SLOW DANCING IN THE DARK',
          artist: 'Joji',
          album: 'Ballads 1',
          duration: '3:29',
        },
      ],
    };
  }

  componentDidMount() {
    console.log('La app se ha cargado correctamente.');
  }

  render() {
    return (
      <div className="app">
        <Header />
        <main className="song-list">
          {this.state.songs.map((song, i) => (
            <Song
              key={song.id}
              index={i + 1}
              title={song.title}
              artist={song.artist}
              album={song.album}
              duration={song.duration}
            />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
