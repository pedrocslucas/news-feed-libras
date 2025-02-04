import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Feed.module.css';
import Card from './Card';
import acao1 from '../assets/acao1.png';
import acao2 from '../assets/acao2.png';
import acao3 from '../assets/acao3.png';
import acao4 from '../assets/acao4.png';
import setaCima from '../assets/seta-cima.png';
import setaBaixo from '../assets/seta-baixo.png';
import setaDiagonal1 from '../assets/seta-diagonal-superior.png';
import telegram from '../assets/telegram.png';
import youtube from '../assets/youtube.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import play1 from '../assets/play1.png';
import eye from '../assets/eye.png';
import comentarios from '../assets/comentarios.png';
import pagina from '../assets/pagina.png';
import pessoas from '../assets/pessoas.png';
import mulherPerfil from '../assets/mulher-perfil.png';
import setaDiagonal2 from '../assets/seta-diagonal-superior1.png';
import foguinho from '../assets/foguinho.png';
import xgm from '../assets/xgm.png';
import comentarios1 from '../assets/comentarios1.png';
import comentarios2 from '../assets/comentarios2.png';
import relogio from '../assets/relogio.png';

const Feed = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.XLGrid}>
      <div
        className={`${styles.itemGrid} ${styles.materia}`}
        onClick={() => navigate('/materiaPrincipal')}
      >
        <div className={styles.materiaHeader}>
          <p className={styles.mH1P}>Marcos Bagno</p>
          <p className={styles.mH2P}>Fevereiro 04, 2025</p>
        </div>
        <div className={styles.materiaCorpus}>
          <h2>
            A Libras <span>'falada'</span> no Brasil apresenta uma unidade?
          </h2>
          <p className={styles.materiaResume}>
            O sociolinguista Marcos Bagno faz uma bela discussão em torno da
            desconstrução de alguns mitos sobre a língua portuguesa em seu
            famoso livro Preconceito linguístico — o que é, como se faz, escrito
            em 1999 e, desde então, seguidamente reeditado.
          </p>
          <p className={styles.materiaResume}>
            Segundo o pesquisador, o mito da “unidade linguística do Brasil” é o
            maior e mais sério de todos, pois está presente no discurso não
            somente da população, mas de muitos intelectuais.
          </p>
          <div className={styles.materiaInfo}>
            <div>
              <img src={comentarios2} alt="" />
              <p>38</p>
            </div>
            <div>
              <img src={relogio} alt="" />
              <p>7 min read</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.itemGrid3} ${styles.materia2}`}>
        <div className={styles.materia2Header}>
          <p>Sérgio Sacani</p>
          <p>Janeiro 28, 2025</p>
        </div>
        <h2>
          A crise <br /> da Cosmologia
        </h2>
        <div className={styles.materia2Info}>
          <div>
            <img src={comentarios2} alt="" />
            <p>17</p>
          </div>
          <div>
            <img src={relogio} alt="" />
            <p>3 min read</p>
          </div>
        </div>
      </div>
      <div className={`${styles.itemGrid} ${styles.materia3}`}>
        <div className={styles.materia3Header}>
          <div>
            <img className={styles.mulherPerfil} src={mulherPerfil} alt="" />
            <p>Alexa Mendes</p>
          </div>
          <div>
            <img className={styles.foguinho} src={foguinho} alt="" />
            <img className={styles.setaD1} src={setaDiagonal2} alt="" />
          </div>
        </div>
        <h2>Congress Averts Shutdown as Conservatives Steam</h2>
        <p className={styles.materia3Resume}>
          Hours after the senate passed the measure, the House followed suit.
          The bill will now go to President Biden.
        </p>
        <p className={styles.materia3Resume}>
          A dozen hard-line Republicans ground business to a half in protest of
          the deal Speaker...
        </p>
        <div className={styles.materia3Info}>
          <div>
            <img src={comentarios1} alt="" />
            <p>32</p>
          </div>
          <div>
            <img src={relogio} alt="" />
            <p>5 min read</p>
          </div>
          <img className={styles.xgm} src={xgm} alt="" />
        </div>
      </div>
      <div className={styles.MGrid}>
        <div className={`${styles.itemGrid1} ${styles.materia4}`}>
          <h3>Bastidores Político</h3>
          <p>
            Opniões, colunas e análises exclusivas sobre o cenário global por
            apenas R$10,00
          </p>
          <div className={styles.materia4Info}>
            <div>
              <img src={pagina} alt="" />
              <p>2,830 artigos</p>
            </div>
            <div>
              <img src={pessoas} alt="" />
              <p>175 autores</p>
            </div>
          </div>
        </div>
        <div className={styles.SGrid}>
          <div className={styles.itemGrid2}>
            <img src={telegram} alt="" />
          </div>
          <div className={styles.itemGrid2}>
            <img src={youtube} alt="" />
          </div>
          <div className={styles.itemGrid2}>
            <img src={facebook} alt="" />
          </div>
          <div className={styles.itemGrid2}>
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className={`${styles.itemGrid1} ${styles.audio}`}>
          <div className={styles.audioInfo}>
            <div className={styles.duration}>
              <img src={play1} alt="" />
              <p>32:13</p>
            </div>
            <div className={styles.visualization}>
              <img src={eye} alt="" />
              <p>98,076</p>
            </div>
          </div>
          <div className={styles.audioDesc}>
            <h3>
              A proteção dos dados <br /> na era da IA
            </h3>
            <div>
              <img src={comentarios} alt="" />
              <p>38</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.MGrid1}>
        <div className={`${styles.itemGrid3} ${styles.acao1}`}>
          <div className={styles.acao1Div1}>
            <img src={acao1} className={styles.imgAcao} alt="" />
            <img src={setaCima} className={styles.imgSeta} alt="" />
          </div>
          <div className={styles.acao1Div2}>
            <p className={styles.perCen}>5.2%</p>
            <p className={styles.decimal}>0.9715</p>
          </div>
          <p className={styles.moeda}>
            GHST<span>/USD</span>
          </p>
        </div>
        <div className={`${styles.itemGrid3} ${styles.acao2}`}>
          <div className={styles.acao1Div1}>
            <img src={acao2} className={styles.imgAcao} alt="" />
            <img src={setaCima} className={styles.imgSeta} alt="" />
          </div>
          <div className={styles.acao1Div2}>
            <p className={styles.perCen}>3.8%</p>
            <p className={styles.decimal}>1.0937</p>
          </div>
          <p className={styles.moeda}>
            UMA<span>/USD</span>
          </p>
        </div>
        <div className={`${styles.itemGrid3} ${styles.acao3}`}>
          <div className={styles.acao1Div1}>
            <img src={acao3} className={styles.imgAcao} alt="" />
            <img src={setaBaixo} className={styles.imgSeta} alt="" />
          </div>
          <div className={styles.acao1Div2}>
            <p className={styles.perCen}>7.1%</p>
            <p className={styles.decimal}>0.0772</p>
          </div>
          <p className={styles.moeda}>
            BRICK<span>/USD</span>
          </p>
        </div>
        <div className={`${styles.itemGrid3} ${styles.acao4}`}>
          <div className={styles.acao1Div1}>
            <img src={acao4} className={styles.imgAcao} alt="" />
            <img src={setaCima} className={styles.imgSeta} alt="" />
          </div>
          <div className={styles.acao1Div2}>
            <p className={styles.perCen}>4.4%</p>
            <p className={styles.decimal}>0.1570</p>
          </div>
          <p className={styles.moeda}>
            LCX<span>/USD</span>
          </p>
        </div>
        <div className={`${styles.itemGrid3} ${styles.cardVersaoFisica}`}>
          <div>
            <h3>Obter Versão Impressa</h3>
            <p>Para uma experiência Original</p>
          </div>
          <img src={setaDiagonal1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feed;
