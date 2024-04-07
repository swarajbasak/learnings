import { createContext, useReducer, useState } from "react";

const CartContext = createContext({
	items: [],
	addItem: () => {},
	removeItem: () => {},
});

const cartReducer = (state, action) => {
	if (action.type === "ADD_ITEM") {
		const existingCartItemIndex = state.items.findIndex((item) => {
			item.id === action.item.id;
		});

		const updatedItems = [...state.items];

		if (existingCartItemIndex > -1) {
			const updatedItem = {
				...state.items[existingCartItemIndex],
				quantity: state.items[existingCartItemIndex].quantity + 1,
			};
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems.push({ ...action.item, quantity: 1 });
		}

		return { ...state, items: updatedItems };
	} else if (action.type === "REMOVE_ITEM") {
		const existingCartItemIndex = state.items.findIndex((item) => {
			item.id === action.id;
		});
		const existingCartItem = state.items[existingCartItemIndex];
		const updatedItems = [...state.items];
		if (existingCartItem.quantity === 1) {
			updatedItems.splice(existingCartItemIndex, 1);
		} else {
			const updatedItem = {
				...existingCartItem,
				quantity: existingCartItem.quantity - 1,
			};
			updatedItems[existingCartItemIndex] = updatedItem;
			return { ...state, items: updatedItems };
		}
	}

	return state;
};

export const CartContextProvider = ({ children }) => {
	const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

	const addItem = (item) => {
		dispatchCartAction({ type: "ADD_ITEM", item: item });
	};

	const removeItem = (id) => {
		dispatchCartAction({ type: "REMOVE_ITEM", id: id });
	};
	const cartContext = {
		items: cart.items,
		addItem,
		removeItem,
	};

	console.log(cartContext);

	return (
		<CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
	);
};

export default CartContext;
