import "./sidebar.scss"
import AndroidOutlinedIcon from '@mui/icons-material/AndroidOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import Apple from '/public/apple1.png'

const Sidebar = () => {
  const {dispatch}= useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className="top">
          <img src={Apple} width={50}/>
        <Link to="/" style={{ textDecoration: "none" }}>
         <p><span className="logo">My Apple</span> </p>  
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li><DashboardIcon className="icon" /><span>Dashboard </span></li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li><PeopleOutlinedIcon className="icon" /><span>Users </span></li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li><Inventory2OutlinedIcon className="icon" /><span>Products </span></li>
          </Link>
          <Link to="/categories" style={{ textDecoration: "none" }}>
            <li><CategoryIcon className="icon" /><span>Categories </span></li>
          </Link>
          <li><InventoryOutlinedIcon className="icon" /><span>Orders</span></li>
          <li><LocalShippingOutlinedIcon className="icon" /><span>Delivery </span></li>
          <p className="title">USEFUL</p>
          <li><QueryStatsOutlinedIcon className="icon" /><span>Stats </span></li>
          <li><NotificationsActiveOutlinedIcon className="icon" /><span>Notification </span></li>
          <p className="title">SERVICE</p>
          <li><SettingsSystemDaydreamOutlinedIcon className="icon" /><span>System Health</span></li>
          <li><PsychologyOutlinedIcon className="icon" /><span>Logs </span></li>
          <li><SettingsSuggestOutlinedIcon className="icon" /><span>Settings </span></li>
          <p className="title">USER</p>
          <li><AccountCircleOutlinedIcon className="icon" /><span>Profile </span></li>
          <li><LogoutOutlinedIcon className="icon" /><span>Logout </span></li>

        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={ () => dispatch({type: "LIGHT"})}></div>
        <div className="colorOption" onClick={ () => dispatch({type: "DARK"})}></div>

      </div>
    </div>
  )
}

export default Sidebar
