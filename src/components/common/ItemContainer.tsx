import CardItem from './CardItem';

interface myProps {
  content?: any;
  option?: string;
}
const ItemContainer:React.FC<myProps> = (props: myProps)=>{
  return(
    <div className={`itemContainer${props.option}`}>
      <h2>Hottest Drops</h2>
      <h5>discover the hottest drops to upgrade your style.</h5>
      <div className='cardContainer'>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
      </div>
      <button>Shop Now</button>
    </div>
  )
}
export default ItemContainer