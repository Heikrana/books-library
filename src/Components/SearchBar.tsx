import { useState } from "react";
import { Form } from "react-router-dom";

function SearchBar({
	placeholder,
	queryType,
}: {
	placeholder: string;
	queryType: string;
}) {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<>
			<Form action={`/${queryType}/${searchTerm}`}>
				<input
					type="search"
					id="search-box"
					value={searchTerm}
					placeholder={placeholder}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</Form>
		</>
	);
}

export default SearchBar;
