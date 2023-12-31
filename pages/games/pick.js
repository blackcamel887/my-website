import styles from './RPC.module.css'
import Image from 'next/image';
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
        return (
        <div className={styles.image_container}> 
            <Image className={styles.img} width={200} height={200} src="/images/scissors.png" alt='scissors' onClick={handleOnClick}></Image>
        </div>
        )
    }
    else if(type==='rock'){
        return (<div className={styles.image_container}> 
        <Image className={styles.img} height={349} width={425} src="/images/rock.png" alt='rock' onClick={handleOnClick}></Image>
        </div>)
    }
    else if(type==='paper'){
        
        return (<div className={styles.image_container}> 
        <Image className={styles.img} height={120} width={120} src="/images/paper.png" alt='paper' onClick={handleOnClick}></Image>
        </div>)
    }
}
export default Pick;