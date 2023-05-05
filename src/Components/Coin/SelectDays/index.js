// import  React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import {useState} from "react";
// import "./style.css";
// export default function SelectDays({days,handleDayschange}) {
// //   const [days, setdays] = useState(30);

// //   const handleChange = (event) => {
// //     setdays(event.target.value );
// //   };

//   return (
//     <div className='selectDays' >

//     <p>price change in</p>
        
//         <Select 
//        sx= {
//             {
//                 height:"2.4rem",
//                 color:"white",
//                 borderColor:"white",
                
//             }
//         }
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={days}
//           label="days"
//           onChange={handleDayschange}
//         >
//           <MenuItem value={30}>thirty</MenuItem>
//           <MenuItem value={60}>sixty</MenuItem>
//           <MenuItem value={90}>ninety</MenuItem>
//         </Select>
//         <InputLabel id="demo-simple-select-label">days</InputLabel>
//     </div>
//   );
// }