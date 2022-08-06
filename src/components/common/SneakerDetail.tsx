

interface myProps {
  content?: any;
  option?: string;
}

const SneakerDetail:React.FC<myProps> = (props:myProps)=>{
  const sneaker = props.content
  return(

    <div className="sneakerDetail">
      <img src={sneaker.img[0]} alt="" />
      <div>
        <h1>{sneaker.name}</h1>
        <h2>{sneaker.brand}</h2>
        <h3>{'$'+sneaker.price}</h3>
        <div>
          <select name="" id="">
            <option value=""></option>
          </select>
          <button>Add to Cart</button>
        </div>
        <p>{sneaker.description}</p>
      </div>
    </div>
  )
}
export default SneakerDetail