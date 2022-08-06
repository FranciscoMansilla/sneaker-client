import example from '../../assets/3.jpg'
import { Link } from 'react-router-dom';

interface myProps {
  content?: any;
  option?: string;
}
const CardItem:React.FC<myProps> = (props:myProps)=>{
  return(
    <Link className='cardItem_link' to={`/sneaker/${props.content._id}`}>
      <div className='cardItem'>
        <img src={props.content.img[0]} alt="img" />
        <h4>{props.content.name}</h4>
        <h5>{props.content.brand}</h5>
        <h6>{'$'+props.content.price}</h6>
      </div>
    </Link>
  )
}
export default CardItem