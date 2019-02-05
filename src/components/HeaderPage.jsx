import React, { Component } from 'react';

class HeaderPage extends Component {
    render() {
        return (
            <header id="header">
            <div className="container">
              <div id="logo" className="pull-left">
              <h1><a href="kenyanginAja.com" class="scrollto" title="kenyanginAja.com">kenyanginAja<span>.com</span></a></h1>
              </div>
              <nav id="nav-menu-container">
                <ul className="nav-menu">
                  <li><a href="#about">Tentang</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#team">Team</a></li>
                  <li className="menu-has-children"><a href="#layanan">Layanan<i className="fa fa-chevron-down" /></a>
                    <ul>
                      <li><a href="#pergiKuliner">Pergi Kuliner</a></li>
                      <li><a href="#klikEat">Klik Eat</a></li>
                      <li><a href="#masakApaYa">Masak Apa Yaa?</a></li>
                    </ul>
                  </li>
                  <li><a href="#contact">Kontak</a></li>
                </ul>
              </nav>
            </div>
          </header>
        )
    }
}

export default HeaderPage;