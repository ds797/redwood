//import { Routes, Route } from 'react-router-dom';
import Page from './components/Page.js'
import './global.css';
import {MathJaxContext} from "better-react-mathjax"

const App = () => {
	return (
		<MathJaxContext>
		<main style={{ height: '100%' }}>
			<Page baseContent={<h1>lol</h1>}></Page>
		</main>
		</MathJaxContext>
	);
}

export default App;
