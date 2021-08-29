import React from 'react';
import './VideoModal.css';
import {Avatar} from "@material-ui/core";

function Videodesc({imgsrc,src,title,channel,views,timestamp}) {
  return (
<div className="Videodesc">
   <img alt='videoimg' src={imgsrc} className='image'/>
   <div className='desc'>
   <Avatar src={src}/>
   <h5 className='title'>{title}</h5>
   </div>
   <p className='channel'>{channel}</p>
   <div className='viewdes'>
   <p className='views'>{views} Views</p>
   <p className='time'>{timestamp}</p>
   </div>

</div>
  );
}

export default Videodesc;
