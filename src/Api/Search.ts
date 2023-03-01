interface bookData {
	title: string;
}

interface Book {
	numFound: number;
	docs: Array<bookData>;
}

async function getBooksWithTitle(url: string) {
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

	console.error("No Books Found!");
}

export default Search;
