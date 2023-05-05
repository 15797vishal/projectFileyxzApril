import React from 'react'
 import "./style.css";
import TemporaryDrawer from './drawer';
import Button from '../Button'; //not mui
import { Link } from 'react-router-dom';
//  mui.com takes and  etc  link bootstrap

function Header() {
  return (
    <div className='navbar'>
    <h1 className='logo'>crypto tracker <span style={{color:"blue"}}> .</span></h1> 
     
    <div className='links'>
     <Link to=''> <p className='link'>home</p></Link>
     <Link to='/compare'> <p className='link'>compare</p></Link>
      <Link to='/watchlist'> <p className='link'>Watchlist</p>   
      </Link>
     <Link to='/dashboard'>
     <Button text={"dashboard"} 
     outlinedbtn={true} onClick={()=> console.log("clicked")}/>
     </Link> 

     <Button text={"share"} 
     outlinedbtn={true} onClick={()=> console.log("clicked")}/>
    </div> 
    <div className='mobiledrawer' > 
    <TemporaryDrawer/>
    </div>
</div>

  )
}

export default Header;