import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Home from './pages/Home'
import Summary from "./pages/Summary";
import Book from './pages/Book';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/summary/:movieId" element={<Summary />} />
				<Route path="/book/:movieId" element={<Book />} />
			</Routes>
		</>
	)
}

export default App