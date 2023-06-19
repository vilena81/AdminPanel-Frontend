import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const New = () => {
  const [file, setFile] = useState("");
  console.log(file)

  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [categoryId, setCategoryId] = useState("");

  // const navigate = useNavigate()

  async function addProduct() {

    const token = localStorage.getItem('token');
    const product = {
      img: img,
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      CategoryId: categoryId
    }
    try {
      const response = await fetch("http://localhost:8000/product", {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json ; charset=UTF-8",
          Authorization: token,
        },

      });
      console.log(product)
      const data = await response.json();

      localStorage.setItem('token', data.token);

      if (data.message === "Product created!") {
        // navigate('/products')
        const successMessage = document.getElementById("success-message");
        successMessage.textContent = "Product created successfully!";


      }
    } catch (error) {
      console.log("An error occurred while creating the product:", error);
    }

    // value("")

  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add product</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">

            <form onSubmit={addProduct}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput" >
                <label>image URL</label>
                <input value={img} onChange={(e)=>setImg(e.target.value)}/>
              </div>
              <div className="formInput" >
                <label>Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)}/>
              </div>
              <div className="formInput" >
                <label>Description</label>
                <input value={description} onChange={(e)=>setDescription(e.target.value)}/>
              </div>
              <div className="formInput" >
                <label>Price</label>
                <input value={price} onChange={(e)=>setPrice(e.target.value)}/>
              </div>
              <div className="formInput" >
                <label>Quantity</label>
                <input value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
              </div>
              <div className="formInput" >
                <label>CategoryId</label>
                <input value={categoryId} onChange={(e)=>setCategoryId(e.target.value)}/>
              </div>

              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;