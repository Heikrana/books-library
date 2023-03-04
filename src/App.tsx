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
					{/* <Route
					path="/javascript"
					element={<BookList query={"javascript"} />}
				/>
				<Route
					path="/harry potter"
					element={<BookList query={"harry potter"} />}
				/>
				<Route
					path="/indian culture"
					element={<BookList query={"indian culture"} />}
				/>
				<Route
					path="/cryptocurrency"
					element={<BookList query={"cryptocurrency"} />}
				/>
				<Route
					path="/criminal law"
					element={<BookList query={"criminal law"} />}
				/> */}
				</Routes>
			</div>
		</>
	);
}

export default App;
