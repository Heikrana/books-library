import { useState } from "react";
import { Form } from "react-router-dom";

function Navbar({ setQuery }: { setQuery: (value: string) => void }) {
	const [searchTerm, setSearchTerm] = useState("");

	function handleSubmit(e: React.KeyboardEvent) {
		if (e.key === "Enter") {
			const target = e.target as HTMLInputElement;
			setQuery(target.value);
		}
	}

	return (
		<>
			<Form action={`${searchTerm}`}>
				<input
					type="search"
					id="search-box"
					value={searchTerm}
					placeholder="Search Books by Title or Author"
					onKeyUpCapture={(e) => handleSubmit(e)}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</Form>
		</>
	);
}

export default Navbar;
