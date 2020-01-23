import styles from './styles.css';
import { Link } from 'preact-router/match';

function Header(){
    return (
        <nav class={styles.navbar}>
            <Link activeClassName={styles.active} href="/">Home</Link>
            <Link activeClassName={styles.active} href="/about">About</Link>
            <Link activeClassName={styles.active} href="/projects" path="/projects/:id?">Projects</Link>
        </nav>
    );
}

export default Header;