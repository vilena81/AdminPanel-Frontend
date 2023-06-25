import React, { useContext } from 'react'
import "./navbar.scss"
import MyImage from '../navbar/ap.webp'
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import  {DarkModeContext} from "../../context/darkModeContext";


const Navbar = () => {
  const {dispatch}= useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="searchc">
          {/* <input type='text' placeholder='Search...' />
          <SearchOutlinedIcon className='icon'/> */}
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon  className='icon'/> English 
          </div>
          <div className="item">
            <DarkModeOutlinedIcon  className='icon' onClick={()=>dispatch({type:"TOGGLE"})}/> 
          </div>
          <div className="item">
            <CloseFullscreenOutlinedIcon  className='icon'/> 
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon  className='icon'/>
            <div className="counter">1</div> 
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon  className='icon'/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon  className='icon'/> 
          </div>
          <div className="item">
            <img src={MyImage} alt='iPhone' className='avatar'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar