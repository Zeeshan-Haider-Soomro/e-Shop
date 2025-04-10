import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,

}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        AddToCart(state,action){
            const newItem = action.payload;
            const itemIndex = state.products.find((item) => item.id === newItem.id)
            const qty = newItem.quantity || 1;
            if(itemIndex){
                itemIndex.quantity+= qty;
                itemIndex.totalPrice += newItem.price * qty
            }
            else{
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: qty,
                    totalPrice: newItem.price * qty,
                    image: newItem.image
                })
            }
            state.totalPrice += newItem.price * qty;
            state.totalQuantity+= qty;
        },
        removeFromCart(state,action){
            const id = action.payload;
            const findItem = state.products.find((item) => item.id === id)
            if(findItem){
                state.totalPrice -= findItem.totalPrice
                state.totalQuantity -= findItem.quantity
                state.products = state.products.filter(item => item.id !== id)
            }
        },
        increaseQuantity(state,action){
            const id = action.payload;
            const findItem = state.products.find((item) => item.id === id)
            if(findItem){
                findItem.quantity++;
            findItem.totalPrice += findItem.price
            state.totalQuantity++;
            state.totalPrice += findItem.price
            }
        },
        decreaseQuantity(state,action){
            const id = action.payload;
            const findItem = state.products.find((item) => item.id === id)
            if(findItem.quantity > 1){
                if(findItem){
                    findItem.quantity--;
                findItem.totalPrice -= findItem.price
                state.totalQuantity--;
                state.totalPrice -= findItem.price
                }

            }
        }

    }
})

export const {AddToCart, removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer