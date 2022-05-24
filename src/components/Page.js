import Item from './Item.js';
import './Page.css';
import {useState} from 'react'

export const Page = ({baseContent}) => {
	const [content, setContent] = useState(baseContent)
	return (
		<>
		<DirectBar elems={directoryList} pageManipulator={setContent}/>
		<main style={{ background: 'black', color: 'white' }}>
			<Item content={content ?? <><h1>No page found!</h1><p>Try navigating to another page.</p></>} />
		</main>
		</>
	);
}

export default Page;