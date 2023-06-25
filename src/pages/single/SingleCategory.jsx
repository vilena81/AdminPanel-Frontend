import './single.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart'
import MyImage from './back.png'

const SingleCategory = () => {


  const { id } = useParams();
  const [categoryData, setCategoryData] = useState({});
  const [error, setError] = useState(null);


  const [categories, setCategories] = useState([]);
  const [editRow, setEditRow] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false);


useEffect(() => {
  fetch(`http://localhost:8000/category/${id}`)
    .then((res) => res.json())
    .then((res) => {
      return setCategoryData(res);

    })
    .catch((error) => {
      console.log('Error fetching category:', error);
      setError('Error fetching category. Please try again later.');
    });
}, [id]);

if (error) {
  return <div>Error: {error}</div>;
}
if (categoryData === null) {
  return <div>Loading...</div>;
}

useEffect(() => {
  const fetchcategory = async () => {

    try {
      const response = await fetch('http://localhost:8000/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (formSubmitted) {
    fetchcategory();
    setFormSubmitted(false);
  }
}, [formSubmitted]);


useEffect(() => {
  const fetchcategory = async () => {
    try {
      const response = await fetch('http://localhost:8000/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchcategory();
}, []);


  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
        <Link to='/categories'> <img src={MyImage} width={40} /></Link> 
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information about category</h1>
            
            <div className="item" key={categoryData.id}>
              
              <div className="details">
                <h1 className="itemTitle">Name: {categoryData.name}</h1>
                
      
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

export default SingleCategory;