export const changeActiveCategory = (category) => {
    return {
        type: 'change',
        payload: category,
    };
};

export const addToCart = product => {
    return {
        type: 'addToCart',
        payload: product,
    };
};