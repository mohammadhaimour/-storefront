// import Header from './components/header/Header'
// import Footer from './components/footer/Footer'
// import Categories from './components/categories/categories';
// import Products from './components/products/products';
// import { useEffect } from 'react';
// // import { getRemoteData } from '../src/store/action';

// export default (props) => {
//     //2- call when show componnent
//     useEffect(() => {

//         console.log('i will be called only one time');
//     }, []);

//     return (
//         <>
//             <Header />
//             <br></br>
//             <Categories />
//             <Products />
//             <Footer />
//             {/* < Apidata /> */}
//         </>
//     )
// }


import { connect } from 'react-redux';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Categories from './components/categories/categories';
import Products from './components/products/products';
import { useEffect } from 'react';
import { getRemoteData } from '../src/store/action';

const App = (props) => {
    //2- call when show componnent
    useEffect(() => {
        props.getRemoteData();
        console.log('i will be called only one time');
    }, []);

    return (
        <>
            <Header />
            <br></br>
            <Categories />
            <Products />
            <Footer />

        </>
    )
}

const mapStateToProps = (state) => ({
    myproduct: state.products
})
const mapDispatchToProps = { getRemoteData };
export default connect(mapStateToProps, mapDispatchToProps)(App);

