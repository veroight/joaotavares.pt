import './reset.css';
import './styles.css';


import { Router } from 'preact-router';

import Home from '../../routes/home';
import About from '../../routes/about';
import Projects from '../../routes/projects';

function App(){
    return (
        <Router>
            <Home path="/" />
            <About path="/about" />
            <Projects path="/projects" />
        </Router>
    );
}

export default App;