import React ,{useState} from 'react'
import ScrollService from '../../Utilities/ScrollService';
import { GET_SCREEN_INDEX, TOTAL_SCREENS } from '../../Utilities/CommnUtils'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Header = () => {

    const [selectedScreen , serSelectedScreen] =  useState(0)
    const [showHeaderOptions , setShowHeaderOptions ] = useState(false)
    
    const updateCurrentScreen =(currentScreen)=>{
          if(!currentScreen || !currentScreen.screenInView) return;
          let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView)

          if(screenIndex < 0 )
          return;
    }

    let currentScreenSuvscription = ScrollService.currentScreenBraodCaster.subscribe(updateCurrentScreen)
   

    const getHeaderOptions =()=>{
         return(
             TOTAL_SCREENS.map((screen , i )=>(
                 <div key={screen.screen_name} className={getHeaderOptionsClass(i)}
                 onClick={()=>switchScreen(i, screen )}>
                     <span >{screen.screen_name}</span>
                 </div>
             ))
         )
    }

    return (
        <div>
            
        </div>
    )
}

export default Header
