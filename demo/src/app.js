import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Categories from './components/categories/categories';
import Products from './components/products/products';

export default (props) => {
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