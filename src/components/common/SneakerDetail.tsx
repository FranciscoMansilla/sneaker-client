

interface myProps {
  content?: any;
  option?: string;
}

const SneakerDetail:React.FC<myProps> = (props:myProps)=>{
  const sneaker = props.content
  return(

    <div className="sneakerDetail">
      <img src={sneaker.img[0]} alt="" />
      <div className="detailContainer">
        <h1>{sneaker.name}</h1>
        <h2>{sneaker.brand}</h2>
        <h3>{'$'+sneaker.price}</h3>
        <div>
          <select name="" id="">
            <option value="none">select</option>
            {sneaker.stock.t8>0 && <option value='t8'>size 8</option>}
            {sneaker.stock.t8_5>0 && <option value='t8_5'>size 8.5</option>}
            {sneaker.stock.t9>0 && <option value='t9'>size 9</option>}
            {sneaker.stock.t9_5>0 && <option value='t9_5'>size 9.5</option>}
            {sneaker.stock.t10>0 && <option value='t10'>size 10</option>}
            {sneaker.stock.t10_5>0 && <option value='t10_5'>size 10.5</option>}
            {sneaker.stock.t11>0 && <option value='t11'>size 11</option>}
            {sneaker.stock.t11_5>0 && <option value='t11_5'>size 11.5</option>}
            {sneaker.stock.t12>0 && <option value='t12'>size 12</option>}
            {sneaker.stock.t13>0 && <option value='t13'>size 13</option>}
          </select>
          <button>Add to Cart</button>
        </div>
        <p><b>Description: </b>{sneaker.description}</p>
      </div>
    </div>
  )
}
export default SneakerDetail