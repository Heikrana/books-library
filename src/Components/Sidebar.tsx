import { Link } from "react-router-dom";
import { SearchSubjects as Search } from "../Api/Search";

function Sidebar() {
	const predefinedSubject = [
		"JavaScript",
		"Harry Potter",
		"Indian Tradition",
		"Cryptocurrency",
		"Criminal Law",
	];

	const list = predefinedSubject.map((subject, idx) => {
		return (
			<li key={idx}>
				<Link to={subject.toLowerCase()}>{subject}</Link>
			</li>
		);
	});

	return (
		<>
			<div>
				<h2>
					<Link to="/">Home</Link>
				</h2>
				<h1>Trending Subjects</h1>
				<form
					action="#"
					id="search"
					onSubmit={(e) => e.preventDefault()}
				>
					<input
						type="search"
						name="search-box"
						id="search-box"
						placeholder="Search Subjects"
						// onKeyUpCapture={(e) => handleSubmit(e)}
					/>
				</form>
				<ul>{list}</ul>
			</div>
		</>
	);
}

export default Sidebar;
