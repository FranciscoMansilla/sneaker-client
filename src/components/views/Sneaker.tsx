
import { useParams } from 'react-router';
import Footer from '../common/Footer';
import SneakerDetail from '../common/SneakerDetail';
import Nav from './../common/Nav';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreator from '../../redux/actions/actions';
import { useEffect } from "react";

const Sneaker = ()=>{
  const {id} = useParams()
  const { GetSneakerDetail } = bindActionCreators(actionCreator, useDispatch());
  const sneakerDetail = useSelector((state: any) => state.sneakerDetail);
  useEffect(()=>{
    GetSneakerDetail(id)
  },[])
  return(
    <div className="sneaker">
      <Nav/>
      {
        sneakerDetail.name 
        &&
        <SneakerDetail content={sneakerDetail}/>
      }
      <div className='createSneaker_footer'>
        <Footer option={false}/>
      </div>
      <div className="createSneaker_footer_bottom"></div>
    </div>
  )
}
export default Sneaker