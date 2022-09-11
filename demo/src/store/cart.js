//this is cart reducer
const initialState = {
    cartItems: [

    ],
    totalCartItems: 0,
};
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'addToCart':
            let exists = false;
            for (let i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].name === payload.name) {
                    exists = true;
                    state.cartItems[i].inCart++;
                    state.totalCartItems++;
                }
            }
            if (!exists) {
                state.cartItems.push(payload);
                state.totalCartItems++;
            }
            return state;



        case 'deleteCart':

            console.log("payload++++", payload);
            console.log("Befor__state.cartItems++++", state.cartItems);
            console.log("Before___state.totalCartItems++++", state.totalCartItems);


            for (let i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].name === payload.name) {
                    console.log('state.cartItems[i].inCart+++++', state.cartItems[i].inCart);
                    state.cartItems[i].inCart--;
                    state.totalCartItems--;
                    return { ...state }
                }
                else {

                }
            }
            console.log("After__state.cartItems", state.cartItems);
            console.log("Affter___state.totalCartItems++++", state.totalCartItems);


        default:
            return state;
    }

};


