import './reset.css';
import styles from './styles.css';

import { Provider } from '@preact/prerender-data-provider';

import { Router } from 'preact-router';

import Home from '../../routes/home';
import About from '../../routes/about';
import Projects from '../../routes/projects';

function App(props){


    return (
        <Provider value={props}>
            <div class={styles.app}>
                <Router>
                    <Home path="/" />
                    <About path="/about" />
                    <Projects path="/projects" />
                </Router>
            </div>
      </Provider>
        
      
    );
}

export default App;