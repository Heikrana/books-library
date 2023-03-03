import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Form, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<>
			<div className="nav">
				<div className="home-btn">
					<h1>
						<Link to="/">BookFreak</Link>
					</h1>
				</div>
				<Form action={`/book/${searchTerm}`} className="search-bar">
					<input
						type="search"
						id="search-box"
						value={searchTerm}
						placeholder="Search Books by Title or Author"
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<FiSearch className="search-icon" />
				</Form>
			</div>
		</>
	);
}

export default Navbar;
