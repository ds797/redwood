//import { Routes, Route } from 'react-router-dom';
import DirectBar from './components/DirectBar.js'

const App = () => {
	var directoryList = [
		{rel: "#", text: "Semester 1", sideHrefs: [{rel : "#", text : "Unit 1 - Trig"}]},
		{rel: "#", text: "Semester 2", sideHrefs: [{rel : "#", text : "Unit 2 - Triangles"}]}
	]

	return (
		<>
		<DirectBar elems={directoryList} />
		</>
	);
}

export default App;
