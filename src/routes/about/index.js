import styles from './styles.css';
import Header from '../../components/Header';
import SkillBar from '../../components/SkillBar';
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
          Gosto de criar side projects para poder aplicar e desenvolver os meus
          conhecimentos de programacão.
        </p>
        <p>
          Quando estava no 6º ano, criei vários blogs (blogspot 😜) de download
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
          Estava obcecado por programação e em 2015 increvi-me para as
          olimpiadas nacionais de informatica (ONI). Houve 3 fases. Na primeira
          participaram 157 alunos e só passavam os 30 primeiros. fiquei em 13º.
          Na segunda so passavam 8. fiquei em 8º. E na última passavam 4. fiquei
          em 4º 😶. O problema é que esta 3ª fase fazia media com a 2ª e no
          final fiquei em 5º 😪. Os 4 primeiros iam representar portugal nas
          olimpiadas internacionais no Cazaquistão.
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
            <SkillBar percentage={30} skill="VueJs" />
          </div>
          <div class={styles.skillFrontend}>
            <h2>BackEnd</h2>
            <SkillBar percentage={70} skill="Nodejs" />
            <SkillBar percentage={60} skill="MongoDB" />
            <SkillBar percentage={50} skill="SQL" />
            <SkillBar percentage={35} skill="Redis" />
            <SkillBar percentage={60} skill="Flask" />
          </div>
        </div>
        <div class={styles.skillBox}>
          <div class={styles.skillFrontend}>
            <h2>Other Skills</h2>
            <SkillBar percentage={60} skill="React Native" />
            <SkillBar percentage={50} skill="Python" />
            <SkillBar percentage={50} skill="C/C++" />
            <SkillBar percentage={40} skill="Java" />
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
