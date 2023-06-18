

import './single.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';

const Single = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);
console.log(userData)

  useEffect(() => {
    fetch(`http://localhost:8000/user/${id}`)
      .then((res) => res.json())
      .then((res) => {
        return setUserData(res);

      })
      .catch((error) => {
        console.log('Error fetching user:', error);
        setError('Error fetching user. Please try again later.');
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (userData === null) {
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
            <h1 className="title">Information</h1>
    
            <div className="item" key={userData.id}>
              <img
                src='https://bilder.pcwelt.de/4312559_original.jpg'
                alt=''
                className='itemImg'
              />
              <div className="details">
                <h1 className="itemTitle">Name: {userData.userName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <input className="itemValue" value={userData.email} />
                  <span >{}</span>
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
  );
};

export default Single;
