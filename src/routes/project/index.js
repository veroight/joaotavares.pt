import Header from '../../components/Header';
import { usePrerenderData } from '@preact/prerender-data-provider';
import Markdown from 'markdown-to-jsx';
import codeBlock from './formatted-code';
import styles from './styles.css';

function project(props){

    const [data, loading, error] = usePrerenderData(props);


    return (
        <div>
            <Header/>
            <div class={styles.project}>
                <h1>projeto</h1>
                {
                    data && !loading?
                    <Markdown
                        options={{
                            overrides: {
                                code: {
                                    component: codeBlock
                                }
                            }
                        }}
                        >{data.content.content}</Markdown>
                    : 
                    <p>loading</p>
                }
                
            </div>
           
        </div>
    );
}


export default project;