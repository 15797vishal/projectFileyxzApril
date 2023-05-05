import React from 'react'; 
// alll this take form temporary drawer chrome
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
export default function TemporaryDrawer() {
   const [open,setopen]=useState(false);
  return (
    <div>   
        <IconButton onClick={()=> setopen(true)}><MenuRoundedIcon className='link'/></IconButton>
        <Drawer
            anchor={"right"}
            open={open}
            onClose={()=> setopen(false)}
          > 
          <div className='drawerdiv'>
          <Link to=''> <p className='link'>home</p></Link>
     <Link to='' > <p className='/compare'>compare</p></Link>
     <Link to=''> <p className='/watchlist'>WatchList</p></Link>
     <Link to=''> <p className='/dashboard'>DashBoard</p></Link>
          </div>
         </Drawer>
       
    
    </div>
  );
}