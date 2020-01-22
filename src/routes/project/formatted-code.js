import styles from './styles.css';

import { HighLight, THEME } from 'preact-highlight';

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