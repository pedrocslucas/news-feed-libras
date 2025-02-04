import React from 'react';
import styles from './Header1.module.css';
import headphone from '../assets/headphone.jpg';
import playButton from '../assets/playButton.png';
import setaBaixo from '../assets/seta-p-baixo.png';
import logoPrincipal from '../assets/logoPrincipal.png';
import setaDiagonal from '../assets/seta-diagonal.png';
import menu from '../assets/menu.png';

const Header1 = () => {
  return (
    <header className={styles.header1}>
      <div className={styles.esq}>
        <div className={styles.radio}>
          <img src={headphone} alt="headphone" className={styles.headphone} />
          <p className={styles.ouvintes}>5,810</p>
          <img
            src={playButton}
            alt="play button"
            className={styles.playButton}
          />
        </div>
        <nav className={styles.nav1}>
          <button>
            <p>Mundo</p>
            <img src={setaBaixo} alt="" />
          </button>
          <button>
            <p>Negócios</p>
            <img src={setaBaixo} alt="" />
          </button>
          <button>
            <p>Lifestyle</p>
            <img src={setaBaixo} alt="" />
          </button>
        </nav>
      </div>
      <div className={styles.logo}>
        <img src={logoPrincipal} alt="Logo principal do Jornal Whiteboard" />
      </div>
      <div className={styles.dir}>
        <button className={styles.assinatura}>
          <p>Assine por R$10</p>
          <img src={setaDiagonal} alt="" />
        </button>
        <img src={menu} alt="menu" className={styles.menu} />
      </div>
    </header>
  );
};

export default Header1;
