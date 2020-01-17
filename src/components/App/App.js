import './reset.css';
import './App.css';


import { Router } from 'preact-router';

import Home from '../../routes/home';

function App(){
    return (
        <Router >
            <Home path="/" />
        </Router>
    );
}

export default App;