import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Carousel from "./components/Carousel"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Hombres from "./components/Hombres"
import Error404 from "./components/Error404"
import Mujeres from "./components/Mujeres"
import ItemDetailContainer from "./components/ItemDetailContainer"
import CartContextProvider from "./components/context/CartContext"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"


function App() {

  return (
   <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<ItemListContainer/>}/>
          <Route path={'/hombres'} element={<Hombres/>}/>
          <Route path={'/mujeres'} element={<Mujeres/>}/>
          <Route path={'/categoria/:id'} element={<ItemListContainer/>}/>
          <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
          <Route path={'/checkout'} element={<Checkout/>}/>
          <Route path={'/cart'} element={<Cart/>}/>
          <Route path={'/*'} element={<Error404/>}/>
        </Routes>
        <Banner/>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>  
  )
}

export default App
