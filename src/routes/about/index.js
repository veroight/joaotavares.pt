import styles from './styles.css';

import Header from '../../components/Header';
import SkillBar from '../../components/SkillBar';

function About(props) {
    return (
        <div>
            <Header />
            <div class={styles.about}>
                <h1>Sobre mim</h1>
                <p></p>
                <p>
                    Gosto de criar sideprojects para poder aplicar os meus
                    conhecimentos de programacao.
                </p>
                <p>
                    Quando estava no 6 ano, criei varios blogs (blogspot :p) de
                    download de programas e jogos (tudo legal :D) e comecei a
                    aprender algum html para poder alterar os temas. Tinha até
                    um contador de visualizaçoes :DD
                </p>
                <p>
                    Fiz o meu primeiro website quando estava no 10 ano. Era uma
                    rede social de poemas. (saber mais aqui)
                </p>

                <p>
                    Na verdade, ja tinha "feito" um antes. No filme "a rede
                    social" que conta como o facebook foi criado, ha uma parte
                    do video que o mark zuckerberg cria um site (facemash) que
                    mostra duas pessoas lado a lado e temos que escolher uma
                    pessoa. [imagem do site].
                </p>

                <p>
                    Estava obcecado por programacao e em 2015 increvi me para as
                    olimpiadas nacionais de informatica (ONI). Houve 3 fases. Na
                    primeira participaram 157 alunos e so passavam os 30
                    primeiros. fiquei em 13. Na segunda so passavam 8. fiquei em
                    8. e na ultima passavam 4. fiquei em 4. O problema e que
                    esta 3 fase fazia media com a 2 e no final fiquei em 5. Os 4
                    primeiros iam representar portugal nas olimpiadas
                    internacionais no Cazaquistão.
                </p>

                <div class={styles.skillBar}>
                    <SkillBar percentage={80} skill="PHP" />
                    <SkillBar percentage={83} skill="HTML5/CSS3" />
                </div>
            </div>
        </div>
    );
}

export default About;
