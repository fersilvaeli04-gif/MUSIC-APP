import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <div className="app-header-inner">
          <span className="app-header-mark">/// </span>
          <h1 className="app-header-title">Hi new music!</h1>
          <p className="app-header-subtitle">Tu sitio para descubrir música semanalmente</p>
        </div>
      </header>
    );
  }
}

export default Header;
