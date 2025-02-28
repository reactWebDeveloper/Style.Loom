import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import ProductsCategory from "./Pages/ProductsCategory/ProductsCategory"
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from './Components/FooterComponent/FooterComponent'
import HandleLoadingComponent from "./Components/HandleLoadingComponent/HandleLoadingComponent";
import ScrolToTopButton from "./Components/ScrollToTopButton/ScrollToTopButton.jsx";

function App() {
  return (
    <div className="es-bg-black">
      <Navbar />
      <Routes>
      <Route path='/' element={<HandleLoadingComponent />}>
        <Route path="/" element={<Home /> } />
        <Route path="/products" element={<Products />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/ProductsCategory" element={<ProductsCategory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        </Route>

      </Routes>
      <ScrolToTopButton />

      <FooterComponent />
    </div>
  );
}

export default App;
