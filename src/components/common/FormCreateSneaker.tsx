

const FormCreateSneaker = ()=>{
  return(
    <div className="formCreateSneaker">
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
          <h6>No images uploaded</h6>
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
          <button>Add Sneaker</button>
        </div>
      </div>
    </div>
  )
}
export default FormCreateSneaker