//import { Routes, Route } from 'react-router-dom';
import Page from './components/Page.js'
import './global.css';

const App = () => {
	return (
		<main style={{ height: '100%' }}>
			<Page baseContent={<h1>lol</h1>}></Page>
		</main>
	);
}

export default App;
