import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';


function Header() {
  return (
<div className="Header">
  <div className='first'>
  <MenuIcon/>
  <img      alt='img'src="https://variety.com/wp-content/uploads/2020/06/youtube-logo.png?w=681&h=383&crop=1"/>
  </div>

 <div className='input'>
  <input type="text" className='inputtext' placeholder="Search"/>
   <SearchOutlinedIcon/>
 </div>

<div className='materialicons'>
<VideoCallIcon/>
<AppsIcon/>
<NotificationsIcon/>
<Avatar src="https://img.etimg.com/thumb/msid-69383692,width-300,imgsize-345753,,resizemode-4,quality-100/tech.jpg"/>
</div>


</div>
  );
}

export default Header;
