import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavBarRB from './components/NavBarRB';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './components/Error';
// import Landing from './examples/Landing';
function App() {

  return (
    <BrowserRouter> 
    <NavBarRB/>
    <Routes>
      <Route path='/' element={<ItemListContainer mensaje="Bienvenidos a CoderShop!"/>}/>
      <Route path='/category/:type' element={<ItemListContainer mensaje="Estas en la categoria: "/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
