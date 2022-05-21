import "./directory.css"
function BarElement(props){
    return (
        <a class="BarElement" href={props.rel}>{props.text}</a>
    )
}

export default BarElement;