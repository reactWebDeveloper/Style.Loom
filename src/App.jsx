import { Route, Routes } from 'react-router-dom'
import './App.css'

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
