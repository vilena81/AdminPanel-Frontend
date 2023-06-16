import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart'
// import List from '../../components/table/Table'

const SingleProd = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information about product</h1>
            <div className="item">
              <img
                src='https://bilder.pcwelt.de/4312559_original.jpg'
                alt='' className='itemImg'
              />
              <div className="details">
                <h1 className="itemTitle">iPhone 13</h1>
                <div className="detailItem">
                  <span className="itemKey">pppppppppppppppp:</span>
                  <span className="itemValue">shadyan@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+37499 999 999</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adressmmmmmmmmmmm:</span>
                  <span className="itemValue">Erevan</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Armenia</span>
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
          <List />
        </div>
      </div>
    </div>
  )
}

export default SingleProd;