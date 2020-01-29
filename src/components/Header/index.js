import styles from './styles.css';
import { Link } from 'preact-router/match';

function Header() {
    return (
        <nav class={styles.navbar}>
            <Link activeClassName={styles.active} href="/">
                Home
            </Link>
            <Link activeClassName={styles.active} href="/about">
                Sobre
            </Link>
            <Link
                activeClassName={styles.active}
                href="/projects"
                path="/projects/:id?"
            >
                Projetos
            </Link>
        </nav>
    );
}

export default Header;
