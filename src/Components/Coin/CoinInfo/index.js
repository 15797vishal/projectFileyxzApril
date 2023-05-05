import React, { useState } from 'react'
import "./style.css";
function CoinInfo
({heading,desc}) {

    const shortdesc=desc.slice(0,350)+ "<span>readmore...</span>";

    const longdesc=desc +"<span>readless...</span>";
 const [flag,setflag]=useState();

  return (
    <div className='greywrapper'>
    <h2 className='coinInfohead'>{heading} </h2>  
    {desc.length>350 ?(
      <p  
     onClick={()=>setflag(!flag)} 
     className='coinInfoDesc' 
     dangerouslySetInnerHTML={{__html:!flag?shortdesc: longdesc}} /> ):(
      <p dangerouslySetInnerHTML={{__html:desc}}/>

      )}
   
    </div>
  )
}

export default CoinInfo ;
