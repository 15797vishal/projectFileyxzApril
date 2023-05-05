import React from 'react'
import "./style.css"; 
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
function List({coin}) {
  return (

    <Link  to={`/coin/${coin.id}`}>
    <tr className='listrow'>
      <td className='td_image'>  
  <img  alt='' src={coin.image} className='coinlogo'/>    
      </td>  

      <div className='namecolumn'>  
<p className='coin_symbol'>{coin.symbol} </p>
      <p className='coin_name'>{coin.name}</p>
       </div> 
       {coin.price_change_percentage_24h>0?(
       <td className='chipflex'> 
       <div className='pricechip'>{coin.price_change_percentage_24h.toFixed(2)}%
       </div>  
         <div className='iconchip chip_up'>
        <TrendingUpIcon />
        </div>
       </td> 
  ):(
    <td className='chipflex'>
     <div className='pricechip chip-red'> 
 {coin.price_change_percentage_24h.toFixed(2)}%
     </div> 
    
     <div className='iconchip chip-red'> 
    <TrendingDownIcon/>
      </div>
    </td> 
  )}  
  <Tooltip title="currentprice">
<td >
   <h3 className='coinprice td_center_align ' style={{color:coin.price_change_percentage_24h <0 
  ? "red": "green",  
  }}> ${coin.current_price.toLocaleString()}</h3>  
  </td> 
  </Tooltip>

  
    <td> 
    <p className='totalvolume td_right_align td-total-volume' > 
  ${coin.total_volume.toLocaleString()}
   </p> 
   </td>
   
   <td className='mobile-td-mkt'>
   <p className='totalvolume td_right_align' > 
  {coin.market_cap.toLocaleString()}
   </p>
   </td>   
    </tr> 

    </Link>
  )
}

export default List