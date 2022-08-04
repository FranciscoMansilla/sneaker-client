import example from '../../assets/3.jpg'

const CardItem = ()=>{
  return(
    <div className='cardItem'>
      <img src={example} alt="img" />
      <h4>Nike Air Force 1 Mid '07 QS</h4>
      <h5>Nike</h5>
      <h6>$179.90</h6>
    </div>
  )
}
export default CardItem