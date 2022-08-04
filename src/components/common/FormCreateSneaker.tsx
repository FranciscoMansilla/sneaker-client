import { useState } from "react"


const FormCreateSneaker = ()=>{
  const url = 'https://api.cloudinary.com/v1_1/dmrxxn0ek/image/upload'
  const [images, setImages]:any = useState([])
  const [stock, setStock] = useState({
    t8: '',
    t8_5: '',
    t9: '',
    t9_5: '',
    t10: '',
    t10_5: '',
    t11: '',
    t11_5: '',
    t12: '',
    t13: '',
  })
  const [form, setForm] = useState({
    name: '',
    genre: '',
    price: 0,
    description:'',
    brand: '',
    img: images,
    stock: stock,
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
  const handleSubmit = ()=>{

  } 
  return(
    
    <div className="formCreateSneaker">
      <form onSubmit={handleSubmit}>
        <div className="formCreateSneaker_container">
          <h3>New Sneaker</h3>
          <div className="form_camp">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="form_camp">
            <label>Genre</label>
            <input type="text" />
          </div>
          <div className="form_camp">
            <label>Brand</label>
            <input type="text" />
          </div>
          <div className="form_camp">
            <label>Price</label>
            <input type="text" />
          </div>
          <div className="form_camp">
            <label>Description</label>
            <textarea
              rows={6} >
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
                <input type="number" min='0' max='100' />
              </div>
              <div>
                <label>Size 8.5</label>
                <input type="number" min='0' max='100' />
              </div>
              <div>
                <label>Size 9</label>
                <input type="number" min='0' max='100' />
              </div>
              <div>
                <label>Size 9.5</label>
                <input type="number" min='0' max='100' />
              </div>
              <div>
                <label>Size 10</label>
                <input type="number" min='0' max='100' />
              </div>
            </div>
            <div className="size_camp">
              <div>
                <label>Size 10.5</label>
                <input type="number" min='0' max='100' />
              </div>
              <div>
                <label>Size 11</label>
                <input type="number" min='0' max='100' />
              </div>
              <div>
                <label>Size 11.5</label>
                <input type="number" min='0' max='100' />
              </div>
              <div>
                <label>Size 12</label>
                <input type="number" min='0' max='100' />
              </div>
              <div>
                <label>Size 13</label>
                <input type="number" min='0' max='100' />
              </div>
            </div>
          </div>
          <div className="add_sneaker">
            <button type="submit" disabled={true} >Add Sneaker</button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default FormCreateSneaker