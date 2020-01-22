import styles from './styles.css';

const { HighLight, THEME } = require('preact-highlight');
console.log(styles)
function codeBlock(props){
	return(
		<div>
		<HighLight 
			class={styles.light} 
			language="js" 
			code={props.children} 
			theme={THEME.vs}/>
		</div>
		
	); 
}


export default codeBlock;