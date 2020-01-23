import Header from '../../components/Header';
import { usePrerenderData } from '@preact/prerender-data-provider';
import { Link } from 'preact-router/match';
import styles from './styles.css';


function Projects(props){
    const [data, loading, error] = usePrerenderData(props);

    if (loading || !data) 
        return(
            <p>loading</p>
        )

    const isMdFile = project => project.format === 'md';
    const projects = data.projects.edges
        .filter(isMdFile)
        .map(project=>{
        return (
            <div>
                <Link href={`/projects/${project.id}`}>
                    <h1>{project.title}</h1>
                    <p>{project.details.preview}</p>
                </Link>

                
            </div>
        );
      
    });

    return (
        <div>
            <Header/>
            <div class={styles.projects}>
                {loading? <span>loading</span>:''}
                {data? <span>{projects}</span>:''}
            </div>
            
        </div>
    );
}

export default Projects;