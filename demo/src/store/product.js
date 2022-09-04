//category association, name, description, price, inventory count
const initialState = {
    product: [
        {
            cat: "Food",
            name: "Burger",
            description: "Amrican burger",
            price: "5 JD",
            inventoryCount: "60",
        },
        {
            cat: "Food",
            name: "Pizza",
            description: "Italian pizza",
            price: "7 JD",
            inventoryCount: "50",
        },]
}

const member = {
    product: [
        {
            cat: "Food",
            name: "Burger",
            description: "Amrican burger",
            price: "5 JD",
            inventoryCount: "60",
        },
        {
            cat: "Food",
            name: "Pizza",
            description: "Italian pizza",
            price: "7 JD",
            inventoryCount: "50",
        },
        {
            cat: "Clothes",
            name: "Dress",
            description: "long dress and soft",
            price: "20 JD",
            inventoryCount: "200",
        },
        {
            cat: "Electronics",
            name: "Macbook",
            description: "Best laptop in 2022",
            price: "1000",
            inventoryCount: "300",
        },
    ],
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "FILTER":
            console.log("22222 state", member);
            var filtered = member.product.filter((element) => element.cat === payload);
            console.log({ payload });
            console.log({ filtered });
            return { product: filtered };
        case "RESET": return { product: member };
        default:
            return initialState;
    }
};

export const filterProduct = (name) => {
    console.log("dispatch Product");
    return {
        type: "FILTER",
        payload: name,
    };
};
export const reset = () => {
    console.log("dispatch reset");
    return {
        type: "RESET",

    };
};