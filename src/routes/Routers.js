import {Routes, Route, Navigate} from 'react-router-dom';
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='home'/>}/>
            <Route path='home' element={<Home />}/>
            <Route path='shop' element={<Shop />}/>
            <Route path='shop/:id' element={<ProductDetails />}/>
            <Route path='cart' element={<Cart />}/>
            <Route path='checkout' element={
                // <ProtectedRoute>
                    <Checkout />
                // </ProtectedRoute>
            }/>
            <Route path='login' element={<Login />}/>
            <Route path='signup' element={<Home />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
    );
};

export default Routers;
