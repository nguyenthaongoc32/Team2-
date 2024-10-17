import { useState, useEffect } from 'react';
import axios from "axios";

import Footer from './component/Home/Footer/Footer';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Accessibility from './component/Home/Footer/Support/Accessibility';
import Accessories from './component/Home/Footer/Shop/Accessories';
import Apparel from './component/Home/Footer/Shop//Apparel';
import Art from './component/Home/Footer/Shop/Art'
import Collectibies from './component/Home/Footer/Shop//Collectibles';
import CollectabilityGuide from './component/Home/Footer/Support/CollectabilityGuide';
import GiftCardBalance from './component/Home/Footer/Support/GiftCardBalance';
import OrderStatus from './component/Home/Footer/Support/OrderStatus';
import ShippingInformation from './component/Home/Footer/Support/ShippingInformation';
import SignUp from '../src/component/Auth/SignUp/SignUp';
import Login from '../src/component/Auth/Login/Login';
import Header from './component/Home/Header/Header';
import HomePage from './component/Home/HomePage';
import ProductDetail from './component/pages/ProductDetails/ProductDetail';
import Checkout from './component/pages/Checkout/CheckOut';
import CartModal from './component/pages/CartModal/CartModal';
import ProductList from './component/Home/ProductList/ProductList';
import ShopAll from './component/ShopAll/ShopAll';
import League from './component/Categories/League';
import Valorant from './component/Categories/Valorant';
import Teamfight from './component/Categories/Teamfight';
import Arcane from './component/Categories/Arcane';
import Logout from './component/Auth/Logout/Logout';


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [completedOrder, setCompletedOrder] = useState(false);
  const [fetchProductsInProgress, setFetchProductsInProgress] = useState(false);
  const [fetchProductsInError, setFetchProductsInError] = useState(null);

  const handleFetchProducts = async () => {
    setFetchProductsInProgress(true);
    setFetchProductsInError(null);
    try {
      const apiResponse = await axios.get(
        `https://66fcd0b0c3a184a84d18118c.mockapi.io/api/data`
      );
      const productsData = apiResponse.data;
      setProducts(productsData);
    } catch (error) {
      console.log("Something went wrongs:", error);
      setFetchProductsInError(error.response.data.message);
    } finally {
      setFetchProductsInProgress(false);
    }
  };

  useEffect(() => {
    handleFetchProducts();
  }, []);

  const handleAddToCart = (productId) => {
    console.log("adding", productId)
    // Step 1: Tìm kiếm SP mà người dùng muốn thêm
    const addingProduct = products.find((product) => product.id === productId);

    // Step 2: Kiểm tra xem sản phẩm đã tồn tại
    // trong GIỎ HÀNG hay chưa?
    // a. TRUE -> update quantity
    // b. FALSE -> create new cartItem => push to cart

    const addingProductIndexInCart = cart.findIndex(
      (product) => product.data.id === productId
    );

    const isExistProductInCart = addingProductIndexInCart !== -1;

    const newCart = [...cart];

    if (isExistProductInCart) {
      // a. TRUE -> update quantity
      newCart[addingProductIndexInCart].quantity += 1;
    } else {
      // b. FALSE -> create new cartItem => push to cart
      const newCartItem = {
        data: addingProduct,
        quantity: 1,
      };
      newCart.push(newCartItem);
    }

    setCart(newCart);
  };

  const updateCartQuantity = (productId, value) => {
    const updatingCartIndex = cart.findIndex(
      (cartItem) => cartItem.data.id === productId
    );

    const newCart = [...cart];

    newCart[updatingCartIndex].quantity += value;

    setCart(newCart);
  };

  const handleDeleteProductFromCart = (productId) => {
    const filterCart = cart.filter(
      (cartItem) => cartItem.data.id !== productId
    );
    setCart(filterCart);
  };
  const handleOrder = () => {
    setCart([]);
  };


  return (
    <>
    <div className='Header'>
      <Header totalCartItems={cart.length}  />
      <main>
        <Routes>
          <Route 
          path='/shopAll'
          element={<ShopAll 
          products={products}/>}/>

          <Route 
          path='/league'
          element={<League products={products}/>}/>

          <Route 
          path='/valorant'
          element={<Valorant products={products}/>}/>

          <Route 
          path='/teamfight'
          element={<Teamfight products={products}/>}/>

          <Route 
          path='/arcane'
          element={<Arcane products={products}/>}/>

          <Route 
          path='/signup'
          element={<SignUp/>}/>

        <Route 
          path='/login'
          element={<Login/>}/>

          <Route 
          path='/logout'
          element={<Logout/>}/> 

          <Route
            path="/"
            element={<HomePage
              products = {products}
              handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/products/:id"
            element={<ProductDetail handleAddToCart={handleAddToCart} />}
          />

          <Route
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                handleOrder={handleOrder}
                completedOrder={completedOrder}
                setCompletedOrder={setCompletedOrder}
              />
            }
          />
        </Routes>
        <CartModal
          cart={cart}
          updateCartQuantity={updateCartQuantity}
          handleDeleteProductFromCart={handleDeleteProductFromCart}
          completedOrder={completedOrder}
          setCompletedOrder={setCompletedOrder}
        />
      </main>
      </div>


      
      <div className="Footer">
        <Routes>
          <Route path="/accessories" element={<Accessories />}></Route>
          <Route path="/apparel" element={<Apparel />}></Route>
          <Route path="/art" element={<Art />}></Route>
          <Route path="/collectibles" element={<Collectibies />}></Route>
          <Route path="/accessibility" element={<Accessibility />}></Route>
          <Route
            path="/collectabilityGuide"
            element={<CollectabilityGuide />}
          ></Route>
          <Route path="/giftCardBalance" element={<GiftCardBalance />}></Route>
          <Route path="/orderStatus" element={<OrderStatus />}></Route>
          <Route
            path="/shippingInformation"
            element={<ShippingInformation />}
          ></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}
export default App
