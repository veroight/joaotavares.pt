import { Link } from 'preact-router/match';
import styles from './styles.css';

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