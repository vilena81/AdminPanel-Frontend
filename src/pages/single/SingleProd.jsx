import './single.scss';
import { useParams } from 'react-router-dom';
// import { useHistory} from 'react-router-dom'
import { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart'


const SingleProd = () => {

  // const history =  useHistory()
  // function goBack(path){
  //   history.push("/products")
  // }
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [error, setError] = useState(null);


  const [products, setProducts] = useState([]);
  const [editRow, setEditRow] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false);


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

useEffect(() => {
  const fetchproducts = async () => {

    try {
      const response = await fetch('http://localhost:8000/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (formSubmitted) {
    fetchproducts();
    setFormSubmitted(false);
  }
}, [formSubmitted]);


useEffect(() => {
  const fetchproducts = async () => {
    try {
      const response = await fetch('http://localhost:8000/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchproducts();
}, []);


const updated = async (values) => {
  const updatedDataSource = [...products]
  const index = updatedDataSource.findIndex((user) => user.id === editRow)
  updatedDataSource.splice(index, 1, { ...values, key: editRow })
  setProducts(updatedDataSource)
  setEditRow(null)
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`http://localhost:8000/product/${editRow}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(values),

    });
    if (response.ok) {
      setFormSubmitted(true);
    } else {
      console.error(response.status, response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
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
            {/* <button type='button' onClick={goBack}>Go Back</button> */}
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