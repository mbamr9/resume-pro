import React from 'react'
import { TOTAL_SCREENS } from '../Utilities/CommnUtils.js'
const PortfolioContainer = () => {
   
    const mapAllScreen =()=>{
        return TOTAL_SCREENS.map((screen)=>{
            return(
                screen.component   ? <screen.component screenName={screen.screen_name} key={screen.screen_name} id={screen.screen_name} /> :  <div key={screen.screen_name}></div>
            )
            })
        
    }
   
    return (
        <div className='portfolio_container'>
            {mapAllScreen()}
        </div>
    )
}

export default PortfolioContainer
