import './reset.css';
import styles from './styles.css';


import { Router } from 'preact-router';

import Home from '../../routes/home';
import About from '../../routes/about';
import Projects from '../../routes/projects';

function App(){
    return (
        <div class={styles.app}>
            <Router>
                <Home path="/" />
                <About path="/about" />
                <Projects path="/projects" />
            </Router>
        </div>
      
    );
}

export default App;