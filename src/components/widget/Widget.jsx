import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BalanceIcon from '@mui/icons-material/Balance';
import { Link } from 'react-router-dom';

const Widget = ({ type }) => {
    let data;

    const amount = 100;
    const diff = 20;
    
    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link:<Link className='link' to="/users" style={{ textDecoration: "none"  }}>See all users </Link> ,
                icon: <PersonOutlineIcon className='icon'
                    style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                    }} />
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartIcon className='icon'
                    style={{
                        backgroundColor: "rgba(218, 165, 32, 0.2)",
                        color: "goldenrod",
                    }} />
            }
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnIcon className='icon'
                    style={{
                        backgroundColor: "rgba(0, 128, 0, 0.2)",
                        color: "green"
                    }} />
            }
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <BalanceIcon className='icon'
                    style={{
                        backgroundColor: "rgba(128, 0, 128, 0.2)",
                        color: "purple",
                    }} />
            }
            break;

        default:
            break;
    }



    return (
        <div className='widget'>
            <div className="left">
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.isMoney && "$"} {amount}</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive"><KeyboardArrowUpIcon />
                    {diff}%</div>
                {data.icon}

            </div>
            
        </div>
    )
}

export default Widget