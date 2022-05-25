import Item from './Item.js';
import './Page.css';
import DirectBar from "./DirectBar.js"
import {useState} from 'react'

var directoryList = [
	{rel: "#sem1", text: "Semester 1", sideHrefs: [{rel : "#", text : "Unit 1 - Trig"}]},
	{rel: "#sem2", text: "Semester 2", sideHrefs: [{rel : "#", text : "Unit 2 - Triangles"}]}
]

export const Page = ({baseContent = <><h1>No page found!</h1><p>Try navigating to another page.</p></>}) => {
	const [content, setContent] = useState(baseContent)
	return (
		<>
		<DirectBar elems={directoryList} pageManipulator={setContent}/>
		<main style={{ background: 'black', color: 'white' }}>
			<Item content={content} />
		</main>
		</>
	);
}

export default Page;