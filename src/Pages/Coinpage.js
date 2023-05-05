import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { coinObject } from '../Functions/convertObject';
import Loader from '../Components/Common/Loader';
import List from '../Components/Dashboard/ListComponent';
import CoinInfo from '../Components/Coin/CoinInfo';
import { getcoinData } from '../Functions/getCoinData';
import { getCOinPrices } from '../Functions/getCoinPrices';
import LineChart from '../Components/Coin/LineChart';
import { convertDate } from '../Functions/convertDate';
import SelectDays from '../Components/Coin/SelectDays';
import { settingChartData } from '../Functions/settingChartData';

function CoinPage() {  

 const[days,setdays]=useState(30);
const[coinData,setcoindata]=useState();
  const [isLoading,setIsLoading]=useState(true);
const {id}=useParams(); 
const [chartData,setChartData]=useState({});

useEffect(() => {
 if(id){  
 
  axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
.then((response) =>{console.log("res is :",response);
// setcoins(response.data);
// setPaginatedCoins(response.data.slice(0,10));
setIsLoading(false);
       
})
.catch((error)=>console.log("err is :" ,error));
setIsLoading(false);
  // getData();
    
 }
}, [id]);
 
async function getData(){ 
  const data=await getcoinData(id);
  if(data){
    coinObject(setcoindata,data )
  }
}
  
const handleDayschange = async (event) => {
  setIsLoading(true); 
    setdays(event.target.value );
    const prices= getCOinPrices(id,event.target.value);
if(prices.length>0 ){
  // console.log("good");
  settingChartData(setChartData,prices);
  setIsLoading(false); 
  
} 

  };

  return (
    <div>
    <header />    
  {isLoading ?( <Loader /> ) :(
     <>
    <div className='greywrapper'>
        <List  coin={coinData} />
    </div> 
    <div className='greywrapper'>
    <SelectDays   days={days} handleDayschange={handleDayschange}/>
        <LineChart chartdata={chartData} />
    </div>
    <CoinInfo heading={coinData.name} desc={coinData.desc} />
    </> 
    )}  
  
  </div>
  );
}
  
export default CoinPage;