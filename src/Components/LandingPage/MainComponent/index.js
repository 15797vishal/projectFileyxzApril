import React from 'react'
import "./style.css";
import Button from '../../Common/Button';
import gradient from'../../../assets/gradient.jpg';
import iphoneimg from'../../../assets/iphoneimg.png';
import { delay, motion } from "framer-motion";
function MainComponent() {
  return (
    <div className='flexinfo'>
    <div className='leftcomponent'>
    <motion.h1 className='trackcryptohead' 
    initial={{opacity:0,scale:0.5 ,x:50}}
    animate={{ opacity:1 ,scale:1,x:0}}
    transition={{duration:2}}>track crypto</motion.h1>
    <motion.h1 className='realtimehead' 
    initial={{opacity:0,scale:0.5 ,x:50}}
    animate={{ opacity:1 ,scale:1,x:0}}
    transition={{duration:2 ,delay:.7}}
    >real time</motion.h1>
    <motion.p  className='infotext'
    initial={{opacity:0,scale:0.5 ,x:50}}
    animate={{ opacity:1 ,scale:1,x:0}}
    transition={{duration:2 ,delay:1.5}}
    >track crypto thriugh a public api in reak time, visit the dashboard to do so !</motion.p> 
      <motion.div className='btnflex'
      initial={{opacity:0,scale:0.5 ,x:50}}
    animate={{ opacity:1 ,scale:1,x:0}}
    transition={{duration:2 ,delay:2.1}}
      >
    <Button text={"dashboard"}/>                    
    <Button className="sharesbtn" text={"share"}  outlined={true}/>
      </motion.div>
    </div>

    <div  className='phoncontain'>
    <motion.img alt='' className='iphones' src={iphoneimg} 
    initial={{y:-25,}}
    animate={{y:25}}
    transition={{type:"smooth",
  repeatType:"mirror",
duration:2,
repeat:Infinity}}
    ></motion.img>
    <motion.img  alt='' className='gradients' src={gradient} ></motion.img>
  
  </div> 
    
    </div>                                            
  )
}

export default MainComponent