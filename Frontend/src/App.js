import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Men from './Components/Userproducts';
import Women from './Components/Women';
import Contact from './Components/Contact';
import About from './Components/About';
import Cart from './Components/Cart';
import UserLoginForm from './Components/UserLoginForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vendorlogin from './Components/Vendorlogin';
import Administration from './Components/Administration';
import Dashboard from './Components/Dashboard';
import ProductCategories from './Components/ProductCategories';
import Products from './Components/Products';
import Orders from './Components/Orders';
import Failedorders from './Components/Failedorders';
import Logout from './Components/Logout';
import Productcategory from './Components/Productcategory';
import './App.css';
import AdminLogin from './Components/AdminLogin';
import Product from './Components/Product';
import Varieties from './Components/varieties';
import Register from './Components/Register';
import Userproducts from './Components/Userproducts';
import Cproduct from './Components/Cproduct';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:categoryid' element={<Userproducts />} />
          <Route path='/product/:productid' element={<Cproduct />} />
          <Route path='/women' element={<Women />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/userlogin' element={<UserLoginForm />} />
          <Route path='/vendorlogin' element={<Vendorlogin />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/' element={<Logout />} />
          <Route path='/register' element={<Register />} />


          <Route path='/administration' element={<Administration />}>
            <Route path='/administration/dashboard' element={<Dashboard />} />
            <Route path='/administration/productcategories' element={<ProductCategories />} />
            <Route path='/administration/products' element={<Products />} />
            <Route path='/administration/product' element={<Product />} />
            <Route path='/administration/product/:id' element={<Product />} />
            <Route path='/administration/orders' element={<Orders />} />
            <Route path='/administration/failedorders' element={<Failedorders />} />
            <Route path='/administration/productcategory' element={<Productcategory />} />
            <Route path='/administration/productcategory/:id' element={<Productcategory />} />
            <Route path='/administration/products/varieties' element={<Varieties />} />
            <Route path='/administration/products/varieties/:id' element={<Varieties />} />
          </Route>


        </Routes>


        <Footer />
      </BrowserRouter>
    </div>);
}

export default App;
