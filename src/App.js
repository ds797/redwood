import { useState } from 'react';
import Page from './components/Page.js'
import './global.css';
import {MathJaxContext} from "better-react-mathjax"

const App = () => {
	const [unit, setUnit] = useState(0);

	return (
		<MathJaxContext>
			<main style={{ height: '100%' }}>
				<Page baseContent={<h1>LOL</h1>}></Page>
			</main>
		</MathJaxContext>
	);
}

export default App;
