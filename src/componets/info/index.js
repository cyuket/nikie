import React from 'react'
import icon_calendar from '../../resources/images/icons/calendar.png'
//import icon_location from '../../resources/images/icons/location.png'
import Zoom from 'react-reveal/Zoom';  
const Venue = ()=> {  
    
    return (
      <div className="bck_black" >
        <div className="center_wrapper">
            <div className="vn_wrapper">
            <a href="https://medium.com/@cyriluket12/nicki-is-1-dc0ed9648c84">
            <Zoom duration={500}>
                <div className="vn_item">
                    <div className="vn_outer">
                        <div className='vn_inner'>
                            <div className="vn_icon_square bck_red" ></div>
                            <div className='vn_icon'
                                style={{
                                    background: `url(${icon_calendar})`
                                }}
                            ></div>   
                            <div className="vn_title">
                                Just Click Me
                            </div>
                            <div className='vn_desc'>
                                Happy Birthday
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom> </a>
            


                
            </div>
        </div>
      </div>
    )
  
}
export default Venue