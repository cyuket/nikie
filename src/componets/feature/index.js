 import React from 'react'
 import  Carrousel from './caro'
import CountDown from './countDown'

 const Featured = ()=> {
  
     return (
       <div style={{position:'relative'}}>
       <Carrousel/>
        <div className="artist_name">
          <div className="wrapper">
              Happy Birthday Bestie
              
          </div>  
        </div>
         <CountDown/>
       </div>
     )
   
 }
 export default Featured
 