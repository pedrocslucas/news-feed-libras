import React from 'react';
import styles from './Materia.module.css';
import Header1 from './Header1';
import setaDireita from '../assets/seta-direita.png';
import play2 from '../assets/play2.png';
import share from '../assets/share.png';
import bookmark from '../assets/bookmark.png';
import relogio1 from '../assets/relogio1.png';
import variacao from '../assets/variacao.jpg';
import variacaoLinguistica from '../assets/variacao-linguistica.png';
import bajaj from '../assets/bajaj.webp';

const Materia = () => {
  return (
    <div>
      <Header1 />
      <div className={styles.banner}>
        <p>Comece o dia Aqui</p>
        <p>
          IA revoluciona Artes, China vs EUA, Deepseek supera OpenAI e Nvidia,
          Nova expansão Espacial.
        </p>
        <img src={setaDireita} alt="seta-direita" />
      </div>

      <div className={styles.main}>
        <div className={styles.mainContent}>
          <h1>A Libras 'falada' no Brasil apresenta uma unidade?</h1>
          <button className={styles.radio2}>
            <img src={play2} alt="" />
            <p>
              Listen <span>(9 min)</span>
            </p>
          </button>
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
          <div className={styles.actions}>
            <div>
              <img src={share} alt="" />
              <p>Compartilhar</p>
            </div>
            <div>
              <img src={bookmark} alt="" />
              <p>Salvar</p>
            </div>
            <div>
              <img src={relogio1} alt="" />
              <p>7 min read</p>
            </div>
          </div>
          <a
            href="https://youtu.be/7QSaRFH6j9o?si=ejhZvast5dXsAGzW"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={variacaoLinguistica}
              className={styles.variacaoLinguistica}
              alt=""
            />
          </a>
          <p className={styles.materiaResume}>
            A escola, por exemplo, tem se apropriado desse mito, tornando-o
            natural. Uma vez naturalizado, deixa de ser crença e passa a
            funcionar como um princípio normalizador, impondo
          </p>
          <blockquote className={styles.materiaResume}>
            sua norma linguística como se ela fosse, de fato, a língua comum a
            todos os 160 milhões de brasileiros, independentemente de sua idade,
            de sua origem geográfica, de sua situação socioeconômica, de seu
            grau de escolarização etc. (Bagno, 1999: 15).
          </blockquote>
          <p className={styles.materiaResume}>
            A língua portuguesa é “uma unidade que se constitui de muitas
            variedades” (Parâmetros Curriculares Nacionais, 1998: 29 apud Bagno,
            1999: 19). Portanto, dizer que todos os brasileiros falam o mesmo
            português é uma inverdade, na mesma proporção em que é inverdade
            dizer que todos os surdos usam a mesma LIBRAS. Afirmar essa unidade
            é negar a variedade das línguas, quando de fato nenhuma língua é
            uniforme, homogênea. A variação pode ocorrer nos níveis fonológico
            (pronúncia), morfológico (palavras) e sintático (sentenças) e estão
            ligadas aos fatores sociais de idade, gênero, raça, educação e
            situação geográfica. Assim, surdos adultos e adolescentes variam em
            seus sinais, da mesma forma que os surdos cearenses, paranaenses,
            cariocas… Quem já não ouviu alguém dizer “esses sinais são
            ‘antigos’, do tempo dos avós!” ou ainda, “naquele lugar se fala
            diferente”. Essa diferença não deve ser encarada como erro,
            entretanto:
          </p>
          <hr />
          <img className={styles.variacao} src={variacao} alt="" />
          <hr />
          <p className={styles.materiaResume}>
            Na ilustração, é possível constatar que a variação lexical ocorre em
            diferentes estados (como a comparação do sinal faculdade usado no
            Rio e em São Paulo) e também dentro de um mesmo estado, a depender
            da comunidade de fala de cada região (como nos exemplos da palavra
            espanhol em São Paulo). Esse tema é importante porque, em algumas
            situações, alguns sinalizadores da língua de sinais resistem a
            aceitar a diversidade e acabam dizendo algo como “esse sinal é
            errado” ou “esse sinal não existe”, quando de fato se trata de
            variantes da língua (Gesser, 2006: 176). A língua de sinais, ao
            passar, literalmente, “de mão em mão”, adquire novos “sotaques”,
            empresta e incorpora novos sinais, mescla-se com outras línguas em
            contato, adquire novas roupagens. O fenômeno da variação e da
            diversidade está presente em todas as línguas vivas, em movimento. É
            justamente nas práticas sociais de uso da linguagem entre
            surdo/surdo e surdo/ouvinte que é possível enxergar o multilinguismo
            (variedades desprestigiadas em sinais, em portugês, em combinação de
            modalidades), as marcas da heterogeneidade nos sinais dos
            surdos-cegos, dos índios, dos ouvintes familiares (ou não) de
            surdos, dos surdos catarinenses, paulistas, pernambucanos…, ou seja,
            as várias línguas em LIBRAS.
          </p>
          <p className={styles.materiaResume}>
            A LIBRAS, como qualquer língua viva, está em constante mudança e
            adaptação. O fenômeno da variação e da diversidade está presente em
            todas as línguas e deve ser reconhecido.
          </p>
          <hr />
          <div className={styles.divAnuncio}>
            <h3 className={styles.anuncio}> Publicidade </h3>
          </div>
          <img src={bajaj} className={styles.bajaj} alt="" />
          <p className={styles.prop}>Dominar 400 | Reivente Seus caminhos..</p>
        </div>
        <div>
          <aside>
            <div>
              <p>Marcos Bagno</p>
              <p>Fevereiro 04, 2025 09:43 am</p>
            </div>
            <div>
              <p>38 comentários</p>
              <p>Entre para comentar</p>
            </div>
            <div>
              <p>Sociais e Línguas</p>
              <p>Categoria</p>
            </div>
          </aside>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>© 2025 - Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default Materia;
