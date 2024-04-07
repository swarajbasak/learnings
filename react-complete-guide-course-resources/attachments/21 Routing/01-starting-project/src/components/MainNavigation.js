import { Link } from "react-router-dom";

const MainNavigation = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<Link to="/products">Products</Link>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
