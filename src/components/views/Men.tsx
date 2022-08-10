
import Footer from '../common/Footer';
import Paginated from '../common/Paginated';
import Nav from './../common/Nav';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreator from '../../redux/actions/actions';
import { useEffect } from "react";

interface myProps {
  content?: any;
  option?: string;
}
const Men:React.FC<myProps> = (props:myProps)=>{
  const { GetSneakers } = bindActionCreators(actionCreator, useDispatch());
  const allSneakers = useSelector((state: any) => state.allSneakers);
  useEffect(()=>{
    GetSneakers()
  },[])
  return(
    <div className={`${props.option}_option`}>
      <Nav/>
      <div className='row2'>
        <Paginated content={[...allSneakers, ...allSneakers]}/>
      </div>
      <div className='createSneaker_footer_bottom'></div>
      <div className='row3'>
        <Footer/>
      </div>
    </div>
  )
}
export default Men