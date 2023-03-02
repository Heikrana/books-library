import { Link } from "react-router-dom";
import { SearchSubjects as Search } from "../Api/Search";

function Sidebar() {
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
				<ul>
					<li>
						<Link to="/javascript">JavaScript</Link>
					</li>
					<li>
						<Link to="/harry+potter">Harry Potter</Link>
					</li>
					<li>
						<Link to="/indian+culture">Indian Culture</Link>
					</li>
					<li>
						<Link to="/cryptocurrency">Cryptocurrency</Link>
					</li>
					<li>
						<Link to="/criminal+law">Criminal Law</Link>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Sidebar;
