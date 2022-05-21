//import { Routes, Route } from 'react-router-dom';
import DirectBar from './components/DirectBar.js'

const App = () => {

	var directoryList = []

	for (let i = 0; i < 20; i++){
		directoryList.push({rel:"example.com", text:`link ${i}`})
	}
	return (
		<>
		<DirectBar elems={directoryList} />
		</>
	);
}

export default App;
