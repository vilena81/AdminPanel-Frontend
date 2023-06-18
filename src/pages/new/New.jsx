import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState, useEffect } from "react";


const New = () => {
  const [file, setFile] = useState("");
console.log(file)
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
            <form>
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
                  <input  />
                </div>
                <div className="formInput" >
                  <label>name</label>
                  <input  />
                </div>
                <div className="formInput" >
                  <label>description</label>
                  <input  />
                </div>
                <div className="formInput" >
                  <label>price</label>
                  <input  />
                </div>
                <div className="formInput" >
                  <label>quantity</label>
                  <input  />
                </div>
                <div className="formInput" >
                  <label>Category Id</label>
                  <input  />
                </div>
              
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;