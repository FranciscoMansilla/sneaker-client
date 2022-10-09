import { Route, Routes } from "react-router"
import Banner from "../common/Banner"
import Nav from "../common/Nav"
import ItemContainer from './../common/ItemContainer';
import Footer from './../common/Footer';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreator from '../../redux/actions/actions';
import { useEffect } from "react";

const Home = ()=>{
  const { GetAllSneakers } = bindActionCreators(actionCreator, useDispatch());
  const allSneakers = useSelector((state: any) => state.allSneakers);
  useEffect(()=>{
    GetAllSneakers()
  },[])
  return(
    <div className="home" >
      <Nav/>
      <Banner/>
      <ItemContainer content={allSneakers.sneakers} option={''}/>
      <div className="men"></div>
      <div className="women"></div>
      <div className="footer_bottom"></div>
      <ItemContainer content={allSneakers.sneakers} option={'1'}/>
      <ItemContainer content={allSneakers.sneakers} option={'2'}/>
      <div className="home_footer">
        <Footer option={true}/>
      </div>
    </div>
  )
}

export default Home