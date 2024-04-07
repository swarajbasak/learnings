import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import { Button } from "./UI/Button";
import { userProgressContext } from "../store/UserProgressContext";
import CartItem from "./CartItem";

const Cart = () => {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(userProgressContext);

	const cartTotal = cartCtx.items.reduce(
		(totalPrice, item) => totalPrice + item.quantity * item.price,
		0
	);

	const handleHideCart = () => {
		userProgressCtx.hideCart();
	};
	return (
		<Modal className="cart" open={userProgressCtx.progress === "cart"}>
			<h2>Your Cart</h2>
			<ul>
				{cartCtx.items.map((item) => (
					<CartItem
						key={item.id}
						name={item.name}
						quantity={item.quantity}
						price={item.price}
						onIncrease={() => cartCtx.addItem()}
						onDecrease={() => cartCtx.removeItem()}
					/>
				))}
			</ul>
			<p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
			<p className="modal-actions">
				<Button textOnly onClick={handleHideCart}>
					Close
				</Button>
				{cartCtx.items.length > 0 && (
					<Button onClick={handleHideCart}>Go to Checkout</Button>
				)}
			</p>
		</Modal>
	);
};

export default Cart;
