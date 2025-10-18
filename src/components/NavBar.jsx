import "../css/NavBar.css"
import CartWidget from "./CartWidget"
import CartWidgetIcons from "./CartWidgetIcons"
import {NavLink} from 'react-router-dom'
//si tengo la imagen dentro de src la tengo que importar
//import logoAssets from "../assets/react.svg"

const NavBar= ()=>{
    console.log('Navbar')
    return(
        <nav className="nav-container">
            <NavLink className='anchor-nav' to="/">
                <img className="logo" alt='logo' src='../logo-shop.png'/>
                {/* <img className="logo" alt='logo' src={logoAssets}/> */}
            </NavLink>
            <NavLink className='anchor-nav' to="/category/nuevos">Nuevos</NavLink>
            <NavLink className='anchor-nav' to="/category/ofertas">Ofertas</NavLink>
            <NavLink className='anchor-nav' to="/category/mas vendidos">Más vendidos</NavLink>
            {/* <CartWidget/> */}
            <CartWidgetIcons/>
        </nav>
    )
}

export default NavBar