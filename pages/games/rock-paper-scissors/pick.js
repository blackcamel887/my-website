import rock from './images/rock.png';
import scissors from './images/scissors.png';
import paper from './images/paper.png';
import styles from './App.module.css'
function Pick(props){
    let type = props.type;
    let handleOnClick =(e)=>{
        if(props.side==='player'){//only do the following if its the player's choices being clicked
            props.setter[0](type);//change the choice of the user 
            let random = Math.floor(Math.random()*3);
            //change the choice of the bot to a random choice
            if(random===0){
                props.setter[1]('rock');
            }
            else if(random===1){
                props.setter[1]('scissors');
            }
            else if(random===2){
                props.setter[1]('paper');
            }
            props.stateChange('winner');
        }
    }
    if(type==='scissors'){
        return <img className={styles.img} src={scissors} alt='scissors' onClick={handleOnClick}></img>
    }
    else if(type==='rock'){
        return <img className={styles.img} src={rock} alt='rock' onClick={handleOnClick}></img>
    }
    else if(type==='paper'){
        return <img className={styles.img} src={paper} alt='paper' onClick={handleOnClick}></img>
    }
}
export default Pick;