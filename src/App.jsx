import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavBarRB from './components/NavBarRB';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './components/Error';
// import Landing from './examples/Landing';
//se importa el PROVEEDOR
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';
function App() {
  return (
    <BrowserRouter> 
    <CartProvider>
    <NavBarRB/>
    <Routes>
      <Route path='/' element={<ItemListContainer mensaje="Bienvenidos a CoderShop!"/>}/>
      <Route path='/category/:type' element={<ItemListContainer mensaje="Estas en la categoria: "/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<CartContainer/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App
