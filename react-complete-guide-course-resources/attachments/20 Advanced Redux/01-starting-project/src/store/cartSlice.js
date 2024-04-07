import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		totalQty: 0,
		totalAmt: 0,
	},
	reducers: {
		addItem(state, action) {
			const item = action.payload;

			const existingItem = state.items.find((itm) => itm.id === item.id);
			state.totalQty++;
			if (!existingItem) {
				state.items.push({
					itemId: item.id,
					price: item.price,
					quantity: 1,
					totalPrice: item.price,
					name: item.title,
				});
			} else {
				existingItem.quantity = existingItem.quantity + 1;
				existingItem.totalPrice = existingItem.totalPrice + item.price;
			}
		},

		removeItem(state, action) {
			const id = action.payload;
			const existingItem = state.items.find((itm) => itm.id === item.id);
			state.totalQty--;
			if (existingItem.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== id);
			} else {
				existingItem.quantity--;
				existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
			}
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice;
