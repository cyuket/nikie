 import React, { Component } from 'react'
 import Slide from 'react-reveal/Slide'
 
 export default class CountDown extends Component {
   state = {
       birthDay : 'Dec, 06, 2018',
       days : '0',
       hours: '0',
       minutes: '0',
       seconds: '0'

   }
   getTime = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if(time < 0){
        console.log("Date Passed")
    }else {
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours= Math.floor((time/(1000*60*60))%24);
        const days = Math.floor(time/(1000*60*60*24));
        this.setState({
            days,
            hours,
            minutes,
            seconds
        })
    }
   }
   componentDidMount(){
        setInterval(()=> this.getTime(this.state.birthDay),1000)  
   }
   render() {
     return (
        <Slide 
         left 
         delay={1000}
        > 
            <div className="countdown_wrapper">
                <div className='countdown_top'>
                    Happy Birthday Bestie
                </div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">
                            06
                        </div>
                        <div className="countdown_tag">
                            Day
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            Dec
                        </div>
                        <div className="countdown_tag">
                            Month
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            2018
                        </div>
                        <div className="countdown_tag">
                            Year
                        </div>
                    </div>
                   
                </div>
            </div>
        </Slide>
      
     )
   }
 }
 