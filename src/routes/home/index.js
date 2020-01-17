import style from './home.css';
import 'preact'
function Home(){
    return (
        <div>
            <header class={style.header}>
                <img src={require("../../assets/joao.jpg")}  />
                <h1>João Tavares</h1>
                <h2>Full stack web developer</h2>
                <div class={style.social}>
                    <a href="https://github.com/veroight" target="_blank"> 
                        <i class="fa fa-github fa-lg" ></i>
                    </a>
                    <a href="https://twitter.com/veroight" target="_blank">
                        <i class="fa fa-twitter fa-lg"></i>
                    </a>
                    <a href="mailto:veroight@gmail.com?Subject=joaotavares.com" target="_top">
                        <i class="fa fa-envelope fa-lg"></i>
                    </a>
                </div>

                <nav class={style.menu}>
                    <ul>
                        <li>
                            <a href="#">CV</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                    </ul>
                </nav>
                
            </header>


            <footer>
                <hr/>
                <div>
                    <p>
                    <i class="fa fa-code"></i>
                    &nbsp; 
                    with
                    &nbsp;
                    <i class="fa fa-heart"></i>
                    &nbsp;
                    by João Tavares
                </p>
                </div>
              
            </footer>
        </div>
    );
}


export default Home;