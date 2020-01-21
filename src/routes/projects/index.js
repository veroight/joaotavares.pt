import Header from '../../components/Header';
import { usePrerenderData } from '@preact/prerender-data-provider';

function Projects(props){

    const [data, loading, error] = usePrerenderData(props);

    return (
        <div>
            <Header/>
            <p>projects pagde</p>
        </div>
    );
}

export default Projects;