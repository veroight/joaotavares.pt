import styles from './styles.css';

// function randomColor() {
//     // return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
//     const vibrantColors = [
//         '#dc3545',
//         '#007bff',
//         '#343a40',
//         '#17a2b8',
//         '#28a745',
//         '#a725d2',
//         '#f38617',
//         '#da8275',
//         '#1799f9',
//         '#f29ff1',
//         '#28e54c',
//         '#ff9145',
//         '#904c0a',
//         '#a94742',
//         '#4cce69',
//         '#b934a7',
//         '#8818f2',
//         '#0f2da7',
//         '#f2f541'
//     ];

//     const randomIndex = Math.floor(Math.random() * vibrantColors.length);
//     return vibrantColors[randomIndex];
// }

function SkillBar(props) {
  // const barColor = props.color || randomColor();

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
          style={{
            width: props.percentage + '%'
            // backgroundColor: barColor
          }}
        />
      </div>
    </div>
  );
}

export default SkillBar;
