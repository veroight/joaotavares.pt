import styles from './styles.css';

function SkillBar(props) {
    return (
        <div class={styles.barBox}>
            <div
                class={styles.barDescription}
                style={{ width: props.percentage + '%' }}
            >
                <span>{props.skill}</span>
                <span>{props.percentage}%</span>
            </div>
            <div class={styles.skillBox}>
                <div
                    class={[styles.bar, styles.animate].join(' ')}
                    style={{ width: props.percentage + '%' }}
                />
            </div>
        </div>
    );
}

export default SkillBar;
