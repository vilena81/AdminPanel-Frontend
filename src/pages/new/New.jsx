import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import MyImage from './back.png'
import { useNavigate } from 'react-router-dom';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';



const New = () => {
  const [file, setFile] = useState("");
  console.log(file)

  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [categoryId, setCategoryId] = useState("");
 
  const navigate = useNavigate()

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
      const data = await response.json();
      localStorage.setItem('token', data.jwt);
      console.log("Data message:", data.message);
      if (data.message === "Product created!") {
        // setShowSuccessMessage(true);
        // alert("Product created successfully!")
        console.log("Product created successfully!");
        navigate ('/products')
      }
    } catch (error) {
      console.log("An error occurred while creating the product:", err);
    res.status(500).json({ message: err.message });
    }
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <Link to='/products'> <img src={MyImage} width={40} style={{ paddingRight: "20px" }} /></Link>
          <h1 >Add new product</h1>

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
                <input value={img} onChange={(e) => setImg(e.target.value)} />
              </div>
              <div className="formInput" >
                <label>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="formInput" >
                <label>Description</label>
                <input value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>
              <div className="formInput" >
                <label>Price</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>
              <div className="formInput" >
                <label>Quantity</label>
                <input value={quantity} onChange={(e) => setQuantity(e.target.value)} />
              </div>
              <div className="formInput" >
                <label>CategoryId</label>
                <input value={categoryId} onChange={(e) => setCategoryId(e.target.value)} />
              </div>

              <button type='submit'>Send</button>

            </form>
            {/* <div className="">
             
              <Snackbar open={showSuccessMessage} autoHideDuration={3000} onClose={() => setShowSuccessMessage(false)}>
                <MuiAlert elevation={6} variant="filled" onClose={() => setShowSuccessMessage(false)} severity="success">
                  Product created successfully!
                </MuiAlert>
              </Snackbar>

            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;

