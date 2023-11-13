import styles from './styles.css';
import Header from '../../components/Header';
import SkillBar from 'preact-skillbar';
import 'preact-skillbar/dist/index.css';
import { Link } from 'preact-router/match';

function About(props) {
  return (
    <div>
      <Header />
      <div class={styles.about}>
        <h1>Sobre mim</h1>
        <p>
          João Tavares, programador.
          <span class={styles.blink}>_</span>
        </p>
        <p>
          Nos meus tempos livres costumo criar side projects para poder desenvolver e aplicar os meus
          conhecimentos de programação.
        </p>
        <p>
          O meu gosto por este mundo começou quando ainda estava no 6º ano, onde criei vários blogs (blogspot 😜) de download
          de programas e jogos (tudo legal 😅) e comecei a aprender algum html
          para poder alterar os temas. Tinha até um contador de visualizações 😎
        </p>
        <p>
          Fiz o meu primeiro website quando estava no 10º ano. Era uma rede
          social de poemas.{' '}
          <Link href="/projects/poemas.md">(saber mais aqui)</Link>
        </p>
        <p>
          A minha curiosidade por websites veio um poucos antes, quando "criei"
          um clone do facemash{' '}
          <Link href="/projects/facemash.md">(saber mais aqui)</Link>
        </p>
        <p>
          Essa foi uma fase em que estava obcecado pela programação e em 2015 increvi-me para as
          olimpiadas nacionais de informatica (ONI) onde consegui obter um 4º lugar na final.
        </p>
        <p>
          Nos anos seguintes, tentei aprender o máximo de coisas possíveis,
          desde programar microcontroladores, eletrónica, mobile development,
          algoritmos, web security, ...
        </p>
        <p>
          Foi recentemente que comecei a foca-me mais na parte web com um
          interesse muito grande em performance.
        </p>
        <p>
          Depois de ter criado os sites que referi anteriormente, tentei criar
          algo mais interessante. Foi então que criei o adoryo, uma rede social
          com website e app, que vem modernizar as salas de salas de chat
          antigas e que conta com 30 mil utilizadores (a maioria brasileiros)
          <Link href="/projects/adoryo.md">(saber mais aqui)</Link>
        </p>
        <p>
          Vou colocar alguns dos projetos mais importantes{' '}
          <Link href="/projects">aqui</Link>.
        </p>
        <h1>Skills</h1>
        <div class={styles.skillBox}>
          <div class={styles.skillFrontend}>
            <h2>FrontEnd</h2>
            <SkillBar percentage={70} skill="JavaScript" />
            <SkillBar percentage={60} skill="HTML5/CSS3" />
            <SkillBar percentage={60} skill="Bootstrap" />
            <SkillBar percentage={70} skill="React" />
            <SkillBar percentage={60} skill="VueJs" />
          </div>
          <div class={styles.skillFrontend}>
            <h2>BackEnd</h2>
            <SkillBar percentage={70} skill="Nodejs" />
            <SkillBar percentage={60} skill="MongoDB" />
            <SkillBar percentage={60} skill="SQL" />
            <SkillBar percentage={35} skill="Redis" />
            <SkillBar percentage={60} skill="Flask" />
          </div>
        </div>
        <div class={styles.skillBox}>
          <div class={styles.skillFrontend}>
            <h2>Other Skills</h2>
            <SkillBar percentage={50} skill="React Native" />
            <SkillBar percentage={50} skill="Python" />
            <SkillBar percentage={50} skill="C/C++" />
            <SkillBar percentage={50} skill="Java" />
          </div>
          <div class={styles.skillFrontend}>
            <h2>Tools</h2>
            <SkillBar percentage={70} skill="Git" />
            <SkillBar percentage={50} skill="Webpack" />
            <SkillBar percentage={50} skill="Babel" />
            <SkillBar percentage={60} skill="Docker" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
