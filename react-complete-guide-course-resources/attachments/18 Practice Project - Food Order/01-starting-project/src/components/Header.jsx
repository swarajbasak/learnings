import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { userProgressContext } from "../store/UserProgressContext";

const Header = () => {
	const cartContext = useContext(CartContext);
	const userProgressCtx = useContext(userProgressContext);
	const totalCartItems = cartContext.items.reduce(
		(totalNumberOfItems, item) => {
			return totalNumberOfItems + item.quantity;
		},
		0
	);

	const handleShowCart = () => {
		userProgressCtx.showCart();
	};

	return (
		<header id="main-header">
			<div id="title">
				<img src={logoImg} />
				<h1>ReactFood</h1>
			</div>
			<nav>
				<Button textOnly>Cart ({cartContext.items.length})</Button>
			</nav>
		</header>
	);
};

export default Header;
