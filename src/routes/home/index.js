import styles from './styles.css';
// import twitter from '../../assets/images/twitter.svg';
import mail from '../../assets/images/mail.svg';
import github from '../../assets/images/github.svg';

function Home() {
    return (
        <div>
            <header class={[styles.header, styles.animate].join(' ')}>
                <img src="https://picsum.photos/200" class={styles.img} />
                <h1>João Tavares</h1>
                <h2>Full stack web developer</h2>
                <div class={styles.social}>
                    <a href="https://github.com/veroight" target="_blank">
                        <img src={github} />
                    </a>
                    {/* <a href="https://twitter.com/veroight" target="_blank">
                        <img src={twitter} />
                    </a> */}

                    <a
                        href="mailto:veroight@gmail.com?Subject=joaotavares.com"
                        target="_top"
                    >
                        <img src={mail} />
                    </a>
                </div>

                <nav class={styles.menu}>
                    <ul>
                        {/* <li>
                            <a href="#">CV</a>
                        </li> */}
                        <li>
                            <a href="/about">Sobre</a>
                        </li>
                        <li>
                            <a href="/projects">Projetos</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <footer>
                <hr />
                <div>
                    <p>
                        <i class="fa fa-code"></i>
                        &nbsp; with &nbsp;
                        <i class="fa fa-heart"></i>
                        &nbsp; by João Tavares
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
