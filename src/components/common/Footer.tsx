
interface myProps {
  option?: boolean;
}
const Footer:React.FC<myProps> = (props: myProps)=>{
  return(
    <div className="footer_contain">
      {
      props.option && 
      <div className="footer_sign">
        <h2>Sign up to our newsletter</h2>
        <h4>be the first to know the latest releases, news, collaborations, exclusives and offers!</h4>
        <div>
          <input type="text" name="" id="" placeholder="Your E-mail" />
          <button>Sign Up</button>
        </div>
      </div>
      }
      <div className="footer">
        <h1>Xpress</h1>
        <div>
          <h4>Company</h4>
          <h5>About</h5>
          <h5>The Stores</h5>
          <h5>Jobs</h5>
          <h5>Imprint</h5>
        </div>
        <div>
          <h4>Customer service</h4>
          <h5>Contact Us</h5>
          <h5>Shipping</h5>
          <h5>Terms & Conditions</h5>
          <h5>Payment</h5>
          <h5>Giftcards</h5>
        </div>
      </div>
    </div>
  )
}

export default Footer