import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

function Navbar({ setQuery }: { setQuery: (value: string) => void }) {
	const [formData, setFormData] = useState("");

	useEffect(() => {
		if (formData) setQuery(formData);
	}, [formData]);

	return (
		<>
			<SearchBar
				placeholder="Search Books by Title or Author"
				setFormData={setFormData}
			/>
		</>
	);
}

export default Navbar;
