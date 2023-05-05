import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header'
import TabsComponent from '../Components/Dashboard/Tabs'
import axios from"axios"; //it is faste than fetch or not need to written json form
import Search from '../Components/Dashboard/Search';
import BackToTop from '../Components/Common/BackToTop';
import PaginationComponent from '../Components/Dashboard/Pagination';
import Loader from '../Components/Common/Loader';
import CoinInfo from '../Components/Coin/CoinInfo';


function DashboardPage() { 
  const [coins,setcoins]=useState([]); 
  const [paginatedcoins,setPaginatedCoins]=useState([]);

  const [search,setSearch]=useState(""); 
  const [page, setpage]=useState(1);
  const [isLoading , setIsLoading]=useState(true);

  const onSearchChange =(e)=>{
    console.log(e.target.value);
    setSearch(e.target.value);
  };  
 
  var filteredcoins=coins.filter((item)=>item.name.toLowerCase(). includes(search.toLowerCase())||
item.symbol.toLowerCase().includes(search.toLowerCase()) );


const handlePageChange=(event,value)=>{
  setpage(value);
  var previousindex=(value -1)*setPaginatedCoins(coins.slice(previousindex,previousindex+10));
}

useEffect(() =>{
axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
.then((response) =>{console.log("res is :",response);
setcoins(response.data);
setPaginatedCoins(response.data.slice(0,10));
setIsLoading(false);
       
})
.catch((error)=>console.log("err is :" ,error));
setIsLoading(false);

},[]);

  return ( 
    
    <>  
    <Header/> 
    {  
       isLoading  ? ( 
        <Loader /> 
    ):(
      <div> 
      <BackToTop />
    <Search search={search} onSearchChange={onSearchChange}/>
  <TabsComponent coins={ search ? filteredcoins :paginatedcoins}/> 
<PaginationComponent  page={page} handlePageChange={handlePageChange}/> 
      </div> 
      )}  
  </> 
    
  )
}

export default DashboardPage ;