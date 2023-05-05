import React from 'react'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import "./style.css";

function BackToTop() { 
    let mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 25) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    function topFunction() {
      document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
    }
    
  return (
    <div  className='backtotop' id="myBtn" onClick={()=> topFunction()}>
    <ArrowUpwardRoundedIcon  className='btnup' />
    </div>
  )
}

export default BackToTop; 