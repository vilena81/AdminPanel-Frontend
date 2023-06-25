import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import MyImage from './back.png'
// import { useNavigate } from 'react-router-dom';

const NewCategory = () => {
  const [file, setFile] = useState("");
  
  const [name, setName] = useState("");
  

  // const navigate = useNavigate()

  async function addCategory() {

    const token = localStorage.getItem('token');
    const category = {
      name: name,
    }
    try {
      const response = await fetch("http://localhost:8000/category", {
        method: 'POST',
        body: JSON.stringify(category),
        headers: {
          "Content-Type": "application/json ; charset=UTF-8",
          Authorization: token,
        },

      });
      console.log(category)
      const data = await response.json();

      localStorage.setItem('token', data.token);

      if (data.message === "Ccategory created!") {
        // navigate('/products')
        const successMessage = document.getElementById("success-message");
        successMessage.textContent = "Product created successfully!";
      }
    } catch (error) {
      console.log("An error occurred while creating the category:", error);
    }
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
         <Link to='/categories'> <img src={MyImage} width={40} style={{paddingRight:"20px"}}/></Link> 
          <h1 >Add new category</h1>
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

            <form onSubmit={addCategory}>
             
              <div className="formInput" >
                <label>Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)}/>
              </div>
              
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCategory;

