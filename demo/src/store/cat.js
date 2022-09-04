const initialState = {
    cat: [
        {
            normalizedName: "Food",
            displayName: "FOOD",
            description: "SERVED EVERY DAY SINCE 1990",
        },
        {
            normalizedName: "Clothes",
            displayName: "Clothes",
            description: "Wear Good. Be Good.",
        },
        {
            normalizedName: "Electronics",
            displayName: "Electronics",
            description: "Best Electronics Deals & Cheap Electronics",
        },
    ],
    activeCat: ""
};

export default (state = initialState, action) => {
    // console.log("cat -- ",state.cat);
    const { type, payload } = action;
    switch (type) {
        case "CHANGE":

            return {
                cat: state.cat,
                activeCat: payload
            }
        default: return state;
    }
}

export const changeActive = (name) => {

    return {
        type: 'CHANGE',
        payload: name
    }
}