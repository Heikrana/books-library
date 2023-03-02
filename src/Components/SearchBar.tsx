import { useState } from "react";
import { Form } from "react-router-dom";

function SearchBar({
	placeholder,
	setFormData,
}: {
	placeholder: string;
	setFormData: (value: string) => void;
}) {
	const [searchTerm, setSearchTerm] = useState("");

	function handleSubmit(e: React.KeyboardEvent) {
		if (e.key === "Enter") {
			const target = e.target as HTMLInputElement;
			setFormData(target.value);
		}
	}

	return (
		<>
			<Form action={`${searchTerm}`}>
				<input
					type="search"
					id="search-box"
					value={searchTerm}
					placeholder={placeholder}
					onKeyUpCapture={(e) => handleSubmit(e)}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</Form>
		</>
	);
}

export default SearchBar;
