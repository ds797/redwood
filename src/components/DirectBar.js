import BarElement from "./BarElement";


import "./directory.css"
function DirectBar(props){
    var list = []

    for (const elem of props.elems){
        list.push(<BarElement rel={elem.rel} text={elem.text} sideHrefs={elem.sideHrefs}></BarElement>)
    }

    return (
        <div className="DirectBar">
            <button className="BarElement" id="barFoot">Honors Precalculus Review</button>
            {list}
        </div>
    )
}

export default DirectBar;