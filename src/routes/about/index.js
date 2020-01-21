import styles from './styles.css';

import Header from '../../components/Header';
import SkillBar from '../../components/SkillBar';


function About(props){



  
  

    return (
        <div>
            <Header/>
            <div class={styles.about}>
                <h1>About Me</h1>
                <p>Hi I am John Doe</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div class={styles.skillBar}>
                    <SkillBar percentage={80} skill="PHP"/>
                    <SkillBar percentage={83}skill="HTML5/CSS3" />
                </div>
            </div>
        </div>
    );
}

export default About;