import carrito from '../../assets/carrito.png'
import user from '../../assets/user.png'
import setting from '../../assets/setting.png'
import { Link } from 'react-router-dom'



const Nav = ()=>{
  return(
    <div className="nav">
      <h1 className="nav_title">Xpress</h1>
      <div className="nav_icons">
        <Link to='/new/sneaker'>
          <img src={setting} alt="" />
        </Link>
        <img src={user} alt="" />
        <img src={carrito} alt="" />
      </div>
      <div className="nav_serchbox">
        <input type="text" name="" id="" placeholder="Search" />
      </div>
      <div className="nav_option">
        <Link to='/men'>
          <h6>Men</h6>
        </Link>
        <Link to='/women'>
          <h6>Women</h6>
        </Link>
        <Link to='/brands'>
          <h6>Brands</h6>
        </Link>
      </div>
    </div>
  )
}
export default Nav