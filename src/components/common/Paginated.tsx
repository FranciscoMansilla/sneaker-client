import CardItem from "./CardItem";
// import Pagination from 'react-bootstrap/Pagination';
import { useEffect } from 'react';
import { Link } from "react-router-dom";


interface myProps {
  content?: any;
  option?: string;
}

const Paginated:React.FC<myProps> = (props: myProps)=>{
  const paginatedButton = (quantity: any) => {
    const buttons = []
    for(let i=0 ; i<quantity ; i++){
      buttons.push(i+1)
    }
    return buttons
  }
  const numberpage = paginatedButton(props.content.numberOfPages)

  return(
    <div className="paginated">
      <div className='cardContainer'>
        {
          props.content.sneakers.length>0 
          &&
          props.content.sneakers.map((sneaker:any)=><CardItem content={sneaker}/>)
        }
      </div>
      <div className="paginatedButtonContainer">
        {
          numberpage.length>0 && numberpage.map(n=>
            <Link to={`/${props.content.genre}/${n}`}>
              <div className="paginatedButton">{n}</div>
            </Link>
          )
        }      
      </div>
    </div>
  )
}
export default Paginated