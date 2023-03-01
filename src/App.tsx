import { useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
	const [books, setBooks] = useState({});

	return (
		<>
			<Navbar setBooks={setBooks} />
		</>
	);
}

export default App;
