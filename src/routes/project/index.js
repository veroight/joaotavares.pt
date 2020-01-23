import Header from '../../components/Header';
import { usePrerenderData } from '@preact/prerender-data-provider';
import Markdown from 'markdown-to-jsx';
import codeBlock from './formatted-code';
import styles from './styles.css';
import fullSizeImage from './fullSizeImage';


function project(props){

    const [data, loading, error] = usePrerenderData(props);


    return (
        <div>
            <Header/>
            <div class={styles.project}>
                {
                    data && !loading?
                    <div>
                        <h1>{data.content.metadata.title}</h1>
                         <Markdown
                        options={{
                            overrides: {
                                code: {
                                    component: codeBlock
                                },
                                img: {
                                    component: fullSizeImage
                                }
                            }
                        }}
                        >{data.content.content}</Markdown>
                    </div>   
                    : 
                    <p>loading</p>
                  
                   
                }
                
            </div>
           
        </div>
    );
}


export default project;