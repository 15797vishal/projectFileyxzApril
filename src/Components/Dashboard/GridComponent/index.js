import React from 'react'
import"./style.css";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Link } from 'react-router-dom';
function Grid({coin}) {
  return (
    <Link  to={`/coin/${coin.id}`}>

    <div className='gridcontainer'>   
       <div className='infoflex'>  
  <img  alt='' src={coin.image} className='coinlogo'/>    </div>  

      <div className='namecolumn'>  
<p className='coin_symbol'>{coin.symbol} </p>
   <p className='coin_name'>{coin.name}</p>
       </div> 

       {coin.price_change_percentage_24h> 0 ? (
      <div className='chipflex'> 
          <div className='pricechip'>{coin.price_change_percentage_24h.toFixed(2)}%
          </div>  
          <div className='iconchip chip-up'>
          <TrendingUpIcon/>
          </div> 
      </div>  
       
  ):(
    <div className='chipflex'>
    <div className='pricechip chip-red'> 
    {coin.price_change_percentage_24h.toFixed(2)}%
    </div> 
    
    <div className='iconchip icon-chip-red'> 
    <TrendingDownIcon/>
    </div> 
    </div> 
  )} 

  <div className='infocontainer'> <h3 className='coinpricecommas' style={{color:coin.price_change_percentage_24h <0 
  ? "red": "green",  
  }}> ${coin.current_price.toLocaleString()}</h3>
  <p className='totalvolume' > 
   Total volume : {coin.total_volume.toLocaleString()}</p>

   <p className='totalvolume' > 
   market cap : {coin.market_cap.toLocaleString()}</p>
  </div>
</div> 

    </Link>
  )
}

export default Grid ; 