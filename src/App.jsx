import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Navbar from "./components/navbar"
import Home from "./pages/home"
import Contact from "./pages/contact"
import Cart from "./pages/cart"
import Menu from "./pages/menu"
import CategoryDetail from "./pages/CategoryDetail"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:categoryId" element={<CategoryDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App