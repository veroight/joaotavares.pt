import styles from './styles.css';

function fullSizeImage(props) {
    console.log(props);
    return <img src={props.src} class={styles.fullSizeImage}></img>;
}

export default fullSizeImage;
