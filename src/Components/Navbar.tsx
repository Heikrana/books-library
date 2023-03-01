import Search from "../Api/Search";

const Navbar = ({ setBooks }: { setBooks: (value: object) => void }) => {
	async function handleSubmit(e: React.KeyboardEvent) {
		if (e.key === "Enter") {
			const target = e.target as HTMLInputElement;
			const books = await Search(target.value);
			if (books) setBooks(books);
		}
	}

	return (
		<>
			<form action="#" id="search" onSubmit={(e) => e.preventDefault()}>
				<input
					type="search"
					name="search-box"
					id="search-box"
					placeholder="Search Books by Title or Author"
					onKeyUpCapture={(e) => handleSubmit(e)}
				/>
			</form>
		</>
	);
};

export default Navbar;
