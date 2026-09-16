import React, { Component } from 'react';

class Song extends Component {
  render() {
    const { title, artist, album, duration } = this.props;

    return (
      <div className="song-card">
        <div className="song-index">{this.props.index}</div>
        <div className="song-info">
          <p className="song-title">{title}</p>
          <p className="song-artist">{artist}</p>
          <p className="song-album">{album}</p>
        </div>
        <div className="song-duration">{duration}</div>
      </div>
    );
  }
}

export default Song;
