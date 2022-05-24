//import { Routes, Route } from 'react-router-dom';
import Page from './components/Page.js'
import DirectBar from './components/DirectBar.js'


const App = () => {
	var directoryList = [
		{rel: "#sem1", text: "Semester 1", sideHrefs: [{rel : "#", text : "Unit 1 - Trig"}]},
		{rel: "#sem2", text: "Semester 2", sideHrefs: [{rel : "#", text : "Unit 2 - Triangles"}]}
	]

	return (
		<main>
			<DirectBar elems={directoryList} />
			<Page />
		</main>
	);
}

export default App;
