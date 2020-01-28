function openNewTab(props){
    console.log(props)
    return (
        <a {...props} target="__blank">{props.children}</a>
    );
}

export default openNewTab;