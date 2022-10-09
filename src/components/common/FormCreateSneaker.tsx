import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreator from '../../redux/actions/actions';

const FormCreateSneaker = ()=>{
  const { AddSneaker } = bindActionCreators(actionCreator, useDispatch());
  const url = 'https://api.cloudinary.com/v1_1/dmrxxn0ek/image/upload'
  const [images, setImages]:any = useState([])
  const [stock, setStock] = useState({
    t8: 0,
    t8_5: 0,
    t9: 0,
    t9_5: 0,
    t10: 0,
    t10_5: 0,
    t11: 0,
    t11_5: 0,
    t12: 0,
    t13: 0,
  })
  const [form, setForm] = useState({
    name: '',
    genre: 'Men',
    price: 0,
    description:'Due to trademark regulations we are not allowed to ship this product outside the EMEA zone. Thank you for your understanding.',
    brand: '',
    //img: [],
    //stock: {},
  })
  const uploadImage = async(e:React.ChangeEvent<HTMLInputElement>)=>{
    const file:any = e.target.files
    console.log(file)
    const data = new FormData()
    data.append('file', file[0])
    data.append('upload_preset','bnhctm56')
    const res = await fetch(url,{
      method: "POST",
      body: data
    })
    const fileRes = await res.json()
    const resUrl = fileRes.url
    setImages([...images,resUrl])
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    AddSneaker({...form, stock:stock, img:images})
    console.log({...form, stock:stock, img:images})
  } 
  return(
    
    <div className="formCreateSneaker">
      <form onSubmit={handleSubmit}>
        <div className="formCreateSneaker_container">
          <h3>New Sneaker</h3>
          <div className="form_camp">
            <label>Name</label>
            <input type="text" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
          </div>
          <div className="form_camp">
            <label>Genre</label>
            <select onChange={(e)=>setForm({...form, genre:e.target.value})}>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
            </select>

            {/* <input type="text" value={form.genre} onChange={(e)=>setForm({...form, genre:e.target.value})}/> */}
          </div>
          <div className="form_camp">
            <label>Brand</label>
            <input type="text" value={form.brand} onChange={(e)=>setForm({...form, brand:e.target.value})}/>
          </div>
          <div className="form_camp">
            <label>Price</label>
            <input type="text" value={form.price} onChange={(e)=>setForm({...form, price:Number(e.target.value)})}/>
          </div>
          <div className="form_camp">
            <label>Description</label>
            <textarea value={form.description} onChange={(e)=>setForm({...form, description:e.target.value})} rows={6} >
            </textarea>
          </div>
          <div className="addimg">
            {
              images.length>0?
              images.map((image:any)=><img src={image} alt="" />)
              :
              <h6>No images uploaded</h6>
            }
            <input type="file" onChange={uploadImage} />
            <button>add image</button>
          </div>
          <h3>Stock</h3>
          <div className="sizeform">
            <div className="size_camp">
              <div>
                <label>Size 8</label>
                <input type="number" min='0' max='100' value={stock.t8} onChange={(e)=>setStock({...stock, t8:Number(e.target.value)})}/>
              </div>
              <div>
                <label>Size 8.5</label>
                <input type="number" min='0' max='100' value={stock.t8_5} onChange={(e)=>setStock({...stock, t8_5:Number(e.target.value)})}/>
              </div>
              <div>
                <label>Size 9</label>
                <input type="number" min='0' max='100' value={stock.t9} onChange={(e)=>setStock({...stock, t9:Number(e.target.value)})}/>
              </div>
              <div>
                <label>Size 9.5</label>
                <input type="number" min='0' max='100' value={stock.t9_5} onChange={(e)=>setStock({...stock, t9_5:Number(e.target.value)})}/>
              </div>
              <div>
                <label>Size 10</label>
                <input type="number" min='0' max='100' value={stock.t10} onChange={(e)=>setStock({...stock, t10:Number(e.target.value)})}/>
              </div>
            </div>
            <div className="size_camp">
              <div>
                <label>Size 10.5</label>
                <input type="number" min='0' max='100' value={stock.t10_5} onChange={(e)=>setStock({...stock, t10_5:Number(e.target.value)})}/>
              </div>
              <div>
                <label>Size 11</label>
                <input type="number" min='0' max='100' value={stock.t11} onChange={(e)=>setStock({...stock, t11:Number(e.target.value)})}/>
              </div>
              <div>
                <label>Size 11.5</label>
                <input type="number" min='0' max='100' value={stock.t11_5} onChange={(e)=>setStock({...stock, t11_5:Number(e.target.value)})}/>
              </div>
              <div>
                <label>Size 12</label>
                <input type="number" min='0' max='100' value={stock.t12} onChange={(e)=>setStock({...stock, t12:Number(e.target.value)})}/>
              </div>
              <div>
                <label>Size 13</label>
                <input type="number" min='0' max='100' value={stock.t13} onChange={(e)=>setStock({...stock, t13:Number(e.target.value)})}/>
              </div>
            </div>
          </div>
          <div className="add_sneaker">
            <button type="submit" disabled={false} >Add Sneaker</button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default FormCreateSneaker