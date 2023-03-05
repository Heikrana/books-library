import { Route, Routes } from "react-router-dom";
import BookList from "./Components/BookList/BookList";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<div className="main">
				<Sidebar />
				<Routes>
					<Route path="/" element="" />
					<Route path=":domain/:name" element={<BookList />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
