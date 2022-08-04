import { useSelector } from "react-redux"
import { Route, Routes } from "react-router"
import Banner from "../common/Banner"
import Nav from "../common/Nav"
import ItemContainer from './../common/ItemContainer';
import Footer from './../common/Footer';

const Home = ()=>{
  return(
    <div className="home" >
      <Nav/>
      <Banner/>
      <ItemContainer option={''}/>
      <div className="men"></div>
      <div className="women"></div>
      <div className="footer_bottom"></div>
      <ItemContainer option={'1'}/>
      <ItemContainer option={'2'}/>
      <div className="home_footer">
        <Footer option={true}/>
      </div>
    </div>
  )
}

export default Home