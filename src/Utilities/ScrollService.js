import { TOTAL_SCREENS } from "./CommnUtils";
import { Subject } from "rxjs";


export default class ScrollService {
    static scrollHandler = new ScrollService();

    static currentScreenBraodCaster =new Subject();

    static currebtScreenFadeIn = new Subject();


    constructor(){
        window.addEventListener('scroll',this.checkCurrentScreenUnderViewport);
    }

    scrollToHireMe =() =>{
        let contactMeScreen = document.getElementById("Contact Me")
        if(!contactMeScreen)return;
        contactMeScreen.scrollIntoView({behavior:"smooth"})
    }
    scrollToHome =() =>{
        let HomeScreen = document.getElementById("Home")
        if(!HomeScreen)return;
        HomeScreen.scrollIntoView({behavior:"smooth"})
    }
    isElementInView = (elem , type ) =>{
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elemetnBottom = rec.Bottom;

        let partiallyVisible = elementTop < window.innerHeight && elemetnBottom >=0;
        let completelyVisible = elementTop >= 0 && elemetnBottom <=window.innerHeight;
        switch (type) {
            case "partial":
                return partiallyVisible;
                case "complete":
                    return completelyVisible;     
        
            default:
                return false;
        }
    }
    checkCurrentScreenUnderViewport = event =>{
        if(!event || Object.keys(event).length <1)
        return;
        for(let screen of TOTAL_SCREENS){
            let screenFormDOM = document.getElementById(screen.screen_name);
            if(!screenFormDOM)
            continue;
            

            let fullyVisible = this.isElementInView(screenFormDOM , "complete");
            let partiallyVisible = this.isElementInView(screenFormDOM , "partial");
            

            if (fullyVisible || partiallyVisible){
                if(partiallyVisible && !screen.alreadyRendered){
                    ScrollService.currebtScreenFadeIn.next({
                        fadeInScreen : screen.screen_name
                    })
                    screen ['alreadyRendered'] = true;
                    break;
                }
                if(fullyVisible){
                    ScrollService.currentScreenBraodCaster.next({
                        screenInView:screen.screen_name,
                    });
                    break;
                }
            }
        }
    }
}
