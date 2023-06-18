import './single.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart'


const SingleProd = () => {

  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [error, setError] = useState(null);
console.log(productData)
console.log(id)

useEffect(() => {
  fetch(`http://localhost:8000/product/${id}`)
    .then((res) => res.json())
    .then((res) => {
      return setProductData(res);

    })
    .catch((error) => {
      console.log('Error fetching product:', error);
      setError('Error fetching product. Please try again later.');
    });
}, [id]);

if (error) {
  return <div>Error: {error}</div>;
}
if (productData === null) {
  return <div>Loading...</div>;
}

  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information about product</h1>
            
            <div className="item" key={productData.id}>
              <img
                src={productData.img}
                alt='' className='itemImg'
              />
              <div className="details">
                <h1 className="itemTitle">Name: {productData.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Description: </span>
                  <span className="itemValue">{productData.description}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">{productData.price} AMD</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Quantity:</span>
                  <span className="itemValue">{productData.quantity}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Category Id:</span>
                  <span className="itemValue">{productData.CategoryId}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title={"User Spending (Last 6 months)"} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          
        </div>
      </div>
    </div>
  )
}

export default SingleProd;