// all this take form tab component mui exptab
import * as React from 'react';
import Tab from '@mui/material/Tab';//for this npm i @mui/lab need
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { ThemeProvider } from "styled-components" 
import"./style.css";
import { createTheme } from '@mui/material';
 import Grid from"../GridComponent";
import List from '../ListComponent'; 

export default function TabsComponent({coins}) {
  const [value,setvalue]=useState("grid");
const handlechange=(event, newvalue)=>{
  setvalue(newvalue);
};
  
const style={        
  color:"white",
  width:"50vw",
  fontSize:"1.2rem",
  fontFamily:"Inter",
  textTransform:"caitalize", 
  fontWeight:600,
};
const theme=createTheme({
    palette:{
      primary:{
        main:"#fffff",
      }
    }
  });
                
  return (
    <ThemeProvider theme={theme} >
      <TabContext   value={value} >
        
      <div className='tabs'>
      <TabList onChange={handlechange} variant='fullWidth'>
       <Tab  label="Grid"  value="grid"  sx={{style}}  >Grid</Tab>
        <Tab  label="List" value="list" sx={{style}} > List</Tab>
          </TabList> 
      </div>
          
         
        <TabPanel value="grid">
        <div className='gridflex' >
        {coins.map((coin,i) =>{
          return <Grid  coin={coin} key={i}/>
        })}
        </div> 
        </TabPanel>

        {/* this is about the list pages in gridcontainer*/}
        <TabPanel value="list">
        <table className='tablerowtabs'> 
        {coins.map((item,i) =>{
          return  <List coin={item} key={i}/> 
       ; })} 
        </table>
        </TabPanel>

      </TabContext>
    </ThemeProvider>

  );
} 
