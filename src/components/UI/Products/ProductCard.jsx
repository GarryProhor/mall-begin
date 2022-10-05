import React from 'react';
import {motion} from "framer-motion";
import {Col} from "reactstrap";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {cartActions} from "../../../redux/slices/cartSlice";
import {  toast } from 'react-toastify';


const ProductCard = ({item}) => {
    const {id, imgUrl, productName, category, price} = item;
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(cartActions.addItem({
            id: id,
            productName: productName,
            price: price,
            image: imgUrl
        }));
        toast.success(`product ${productName} added successfully`)
    }
    return (
        <Col lg='3' md='4' className='mb-2'>
            <div className='product__item'>
                <div className='product__img'>
                    <motion.img whileHover={{scale: 0.9}} src={imgUrl} alt={productName}/>
                </div>
                <div className='p-2 product__info'>
                    <h3 className='product__name'>
                        <Link to={`/shop/${id}`}>Modern Armchair</Link>
                    </h3>
                    <span>{category}</span>
                </div>
                <div className='product__card-bottom d-flex align-items-center justify-content-between p-2'>
                    <span className='price'>${price}</span>
                    <motion.span whileTap={{scale: 1.2}} onClick={addToCart}><i className='ri-add-line'></i></motion.span>
                </div>
            </div>
        </Col>
    );
};

export default ProductCard;
