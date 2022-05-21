import BarElement from "./BarElement";


import "./directory.css"
function DirectBar(props){
    var list = []
    for (const elem of props.elems){
        list.push(<BarElement rel={elem.rel} text={elem.text}></BarElement>)
    }
    return (
        <div class="DirectBar">
            {list}
        </div>
    )
}

export default DirectBar;