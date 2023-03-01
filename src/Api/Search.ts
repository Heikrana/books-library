type Book = {
	numFound: number;
};

async function getBooksWithTitle(url: string): Promise<Book | void> | never {
	try {
		const res = await fetch(url);

		if (res.status === 200) {
			const data: Book = await res.json();
			return data;
		}

		throw new Error("Error fetching data");
	} catch (err) {
		console.error(err);
	}
}

async function Search(query: string) {
	// api call require '+' in query instead of ' ' (spaces)
	query = query.split(" ").join("+");

	let booksFound = await getBooksWithTitle(
		`https://openlibrary.org/search.json?title=${query}`
	);

	if (booksFound?.numFound !== 0) return booksFound;

	booksFound = await getBooksWithTitle(
		`https://openlibrary.org/search.json?author=${query}&sort=new`
	);

	if (booksFound?.numFound !== 0) return booksFound;

	return new Error("No books found");
}

export default Search;
