import { Link, useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	const navigateHandler = () => {
		navigate("/products");
	};
	return (
		<>
			<h1>Home</h1>
			<p>
				Go to <Link to="/products">product list</Link>
			</p>
			<p>
				<button onClick={navigateHandler}>navigate</button>
			</p>
		</>
	);
};

export default Home;
