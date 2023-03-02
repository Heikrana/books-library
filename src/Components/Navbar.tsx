function Navbar({ setQuery }: { setQuery: (value: string) => void }) {
	function handleSubmit(e: React.KeyboardEvent) {
		if (e.key === "Enter") {
			const target = e.target as HTMLInputElement;
			setQuery(target.value);
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
}

export default Navbar;
