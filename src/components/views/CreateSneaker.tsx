
import Nav from './../common/Nav';
import FormCreateSneaker from './../common/FormCreateSneaker';
import Footer from '../common/Footer';
const CreateSneaker = ()=>{
  return(
    <div className="createSneaker">
      <Nav/>
      <FormCreateSneaker/>
      <div className='createSneaker_footer'>
        <Footer option={false}/>
      </div>
      <div className="createSneaker_footer_bottom"></div>
    </div>
  )
}
export default CreateSneaker