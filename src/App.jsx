import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Contact from './Pages/Contact/Contact'
import Cart from './Pages/Cart/Cart'

function App() {

  return (
    <>
    <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
