import "./navBar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";
import ThemeBtn from "/Users/rijuljain/Documents/photos/Web Development/react-social-media/client/src/components/ThemeBtn/ThemeBtn.js";
import { useTheme } from "/Users/rijuljain/Documents/photos/Web Development/react-social-media/client/src/components/UseTheme/useTheme.js";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const NavBar = () => {
  
  const theme = useTheme()

  const {currentUser} = useContext(AuthContext);

  return (
    <div className="navbar ${theme}">
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
          <span>GossipHub</span>
        </Link>
        <HomeOutlinedIcon />
        <ThemeBtn />
        <GridViewOutlinedIcon />
        <div className="search">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
         <PersonOutlineOutlinedIcon />
         <EmailOutlinedIcon />
         <NotificationsOutlinedIcon />
         <div className="user">
             <img src={currentUser.profilePic} alt="Img"/>
             <span>{currentUser.name}</span>
         </div>
      </div>
    </div>
  )
}

export default NavBar
