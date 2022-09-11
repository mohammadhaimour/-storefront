import * as React from 'react';
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
// import { addToCart } from '../../store/cart';
import { addToCart } from '../../store/action';
import { deletecart } from '../../store/action';


import { connect } from 'react-redux';
import './products.css'

function Products(props) {

    return (
        <>
            <div className="cart">
                <h3>🛒Cart  </h3>
                <h4>You have __ {props.cart.totalCartItems} __ elements </h4>
                {
                    props.cart.cartItems.map(item => {
                        return (

                            <>
                                <div className='ele' >

                                    {item.inCart > 0 ? item.name : null}

                                    {item.inCart > 0 ? ':' : null}
                                    {item.inCart > 0 ? 'pc' : null}

                                    {item.inCart > 0 ? item.inCart : null}



                                    {
                                        item.inCart > 0 ?
                                            <IconButton onClick={() => { props.deletecart(item) }} aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                            : null
                                    }




                                </div>

                            </>

                        );
                    })

                }
            </div>


            <div className="nameCategory">
                <h1>
                    {props.categories.activeCategory.toUpperCase()}
                </h1>
            </div>

            <div className="card">
                {
                    props.products.map((product) => (

                        product.category === props.categories.activeCategory ?
                            <Card className="fff" >
                                <CardHeader

                                    title={product.name}
                                    subheader={product.category}
                                />

                                <img src={product.image} style={{ width: '800px', height: '200px', border: '5%' }}  ></img>
                                <CardHeader
                                    title={'Price  ' + product.price + '$'}
                                    subheader={'In Stock  ' + product.inStock + '  Pcs'}
                                />
                                <Button
                                    variant="contained"
                                    style={{ width: '30%', margin: '10px' }}
                                    onClick={() => {
                                        props.addToCart(product);
                                    }}
                                >
                                    ADD TO CART
                                </Button>
                                <Button
                                    variant="contained"
                                    style={{ width: '30%', margin: '10px' }}
                                >
                                    VIEW DETAILS
                                </Button>

                            </Card>
                            :
                            null
                    ))
                }
            </div>



        </>
    );
}


const mapStateToProps = (state) => {
    return { products: state.products, categories: state.categories, cart: state.cart };
};

const mapDispatchToProps = { addToCart, deletecart };


export default connect(mapStateToProps, mapDispatchToProps)(Products);