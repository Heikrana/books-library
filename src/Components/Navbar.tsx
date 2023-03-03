import SearchBar from "./SearchBar";

function Navbar() {
	return (
		<>
			<SearchBar
				placeholder="Search Books by Title or Author"
				queryType="book"
			/>
		</>
	);
}

export default Navbar;
