import superagent from 'superagent';
//const api = 'https://mohamad-server-deploy-dev.herokuapp.com/';
const api = 'https://jsonplaceholder.typicode.com/users';

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

export const deletecart = (product) => {
    return {
        type: 'deleteCart',
        payload: product,
    };
};

export const getRemoteData = () => (dispatch) => {

    return superagent.get(api).then((data) => {
        //console.log('data.body++++++++', data.body);
        dispatch(getAction(data.body));
    })
}


//action 
const getAction = (payload) => {
    return {
        type: 'GetData',
        payload: payload
    }
}

