import carrito from '../../assets/carrito.png'
import user from '../../assets/user.png'
import setting from '../../assets/setting.png'
import { Link } from 'react-router-dom'



const Nav = ()=>{
  return(
    <div className="nav">
      <Link className="nav_title" to='/'>
        <h1>Xpress</h1>
      </Link>
      <div className="nav_icons">
        <Link to='/new/sneaker'>
          <img src={setting} alt="" />
        </Link>
        <Link to='login'>
          <img src={user} alt="" />
        </Link>
        <img src={carrito} alt="" />
      </div>
      <div className="nav_serchbox">
        <input type="text" name="" id="" placeholder="Search" />
      </div>
      <div className="nav_option">
        <Link to='/men/1'>
          <h6>Men</h6>
        </Link>
        <Link to='/women/1'>
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