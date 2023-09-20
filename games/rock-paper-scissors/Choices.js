import Pick from "./pick.js";
import styles from './App.module.css'
function Choices(props){
    if(props.state === 'default'){//the default state will show all 3 choices for both user and bot
        return <div className={styles.choices}>
            <Pick type='scissors' side={props.side} setter={props.setter} stateChange={props.stateChange}>

            </Pick>
            <Pick type='rock' side={props.side} setter={props.setter} stateChange={props.stateChange}>

            </Pick>
            <Pick type='paper' side={props.side} setter={props.setter} stateChange={props.stateChange}>

            </Pick>
        </div>
    }
    else if(props.state === 'winner'){//the winner state will show the choice that each user chose
        return <div className={styles.choices}>
            <Pick type={props.choice} side='none'>

            </Pick>
        </div>
    }
    
}
export default Choices;