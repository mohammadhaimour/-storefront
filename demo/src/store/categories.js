//this is category reducer
const initialState = {
    categories: [
        { name: 'electronics', displayName: 'Elecronics' },
        { name: 'food', displayName: 'Food' },

    ],
    activeCategory: 'electronics',
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'change':
            console.log('payload', payload);
            return { categories: state.categories, activeCategory: payload };
        default:
            return state;
    }
};

