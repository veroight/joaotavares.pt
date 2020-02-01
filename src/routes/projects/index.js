import styles from './styles.css';
import Header from '../../components/Header';
import { usePrerenderData } from '@preact/prerender-data-provider';
import { Link } from 'preact-router/match';
import Loader from '../../components/Loader';

function Projects(props) {
    const [data, loading, error] = usePrerenderData(props);

    const isMdFile = project => project.format === 'md';

    let projects;
    if (data && !loading) {
        projects = data.projects.edges.filter(isMdFile).map(project => {
            return (
                <Link class={styles.project} href={`/projects/${project.id}`}>
                    <h1>{project.details.title}</h1>
                    <p>{project.details.preview}</p>
                </Link>
            );
        });
    }

    return (
        <div>
            <Header />
            <div class={styles.projects}>
                {loading ? <Loader>loading</Loader> : ''}
                {data ? projects : ''}
            </div>
        </div>
    );
}

export default Projects;
