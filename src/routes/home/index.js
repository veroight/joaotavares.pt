import styles from './styles.css';
// import twitter from '../../assets/images/twitter.svg';
import mail from '../../assets/images/mail.svg';
import github from '../../assets/images/github.svg';

function Home() {
  return (
    <div>
      <header class={[styles.header, styles.animate].join(' ')}>
        <img
          src="https://i.picsum.photos/id/180/200/200.jpg"
          class={styles.img}
        />
        <h1>João Tavares</h1>
        <h2>
          Full stack web developer<span class={styles.blink}>_</span>
        </h2>
        <div class={styles.social}>
          <a href="https://github.com/veroight" target="_blank">
            <img src={github} />
          </a>
          {/* <a href="https://twitter.com/veroight" target="_blank">
                        <img src={twitter} />
                    </a> */}

          <a
            href="mailto:joao@joaotavares.pt?Subject=joaotavares.pt"
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
            {'</> '}
            with ❤ by João Tavares
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
