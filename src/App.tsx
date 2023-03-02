import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { SearchTitleAuthor } from "./Api/Search";

export interface Book {
	numFound: number;
	docs: Array<{ title: string }>;
}

function App() {
	const [query, setQuery] = useState("");

	return (
		<>
			<Navbar setQuery={setQuery} />
			<Sidebar />
			<Routes>
				<Route path="/" element="" />
				<Route path=":id" element={<BookList query={query} />} />
				<Route
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
				/>
			</Routes>
		</>
	);
}

export default App;
