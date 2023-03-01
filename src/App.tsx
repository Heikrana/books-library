import { useState } from "react";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";

interface bookData {
	title: string;
}

interface Book {
	docs: Array<bookData>;
}

function App() {
	const [books, setBooks] = useState<Book>({ docs: [{ title: "" }] });

	return (
		<>
			<Navbar setBooks={setBooks} />
			<BookList books={books} />
		</>
	);
}

export default App;
