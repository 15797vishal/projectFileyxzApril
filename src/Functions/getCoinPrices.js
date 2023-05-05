import axios from "axios";

export const getCOinPrices = (days,id) =>{

 const prices = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`).then((response) =>{
        console.log("prices are .."+ response.data.prices); 
        return response.data.prices;
    
      })
      .catch((error)=>{
        console.log("error is :" ,error); 
      // return prices;
        });

}