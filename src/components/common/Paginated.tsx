import CardItem from "./CardItem";

interface myProps {
  content?: any;
  option?: string;
}
const Paginated:React.FC<myProps> = (props: myProps)=>{
  return(
    <div>
      <div className='cardContainer'>
        {
          props.content.length>0 
          &&
          props.content.map((sneaker:any)=><CardItem content={sneaker}/>)
        }
      </div>
    </div>
  )
}
export default Paginated