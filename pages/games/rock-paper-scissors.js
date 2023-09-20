import styles from './RPC.module.css'
import Choices from './Choices';
import Score from './Score';
import { useEffect, useState } from "react";
export default function RockPaperScissors() {
  useEffect( () => { document.querySelector("body").classList.add(styles.body) } );
  let [userScore,setUserScore] = useState(0);//the state for user's score
  let [botScore,setBotScore] = useState(0);//the state for bot's score
  let [gameState,setGameState] = useState('default');//the state for the state of the game, initallized as the default state
  let [userChoice,setUserChoice] = useState(null);//the choice that the user makes
  let [botChoice,setBotChoice] = useState(null);//the choice that the bot makes
  let [userMessage,setUserMessage] = useState(null);
  let [botMessage,setBotMessage] = useState(null);
  //the steps to take when the user makes a choice
  // const mainFunc = () =>{
      
  //     //revert back to default state after 2 seconds to continue game
  // }
  useEffect(()=>{
    //the steps to take when the user makes a choice
    const delay = ms => new Promise(res => setTimeout(res, ms));
    if(gameState==='winner'){
      setTimeout(async()=>{
        if(userChoice===botChoice){
          setUserMessage('Tie');
          setBotMessage('Tie');
          await(delay(1000));
        }
        if(userChoice==='scissors'){
          if(botChoice==='rock'){
            setBotMessage('WINNER!');
            await(delay(1000));
            setBotScore((prev)=>{
              return prev+1;
            });
          }
          if(botChoice==='paper'){
            setUserMessage('WINNER!');
            await(delay(1000));
            setUserScore((prev)=>{
              return prev+1;
            });
          }
        }
        if(userChoice==='rock'){
          if(botChoice==='paper'){
            setBotMessage('WINNER!');
            await(delay(1000));
            setBotScore((prev)=>{
              return prev+1;
            });
          }
          if(botChoice==='scissors'){
            setUserMessage('WINNER!');
            await(delay(1000));
            setUserScore((prev)=>{
              return prev+1;
            });
          }
        }
        if(userChoice==='paper'){
          if(botChoice==='scissors'){
            setBotMessage('WINNER!');
            await(delay(1000));
            setBotScore((prev)=>{
              return prev+1;
            });
          }
          if(botChoice==='rock'){
            setUserMessage('WINNER!');
            await(delay(1000));
            setUserScore((prev)=>{
              return prev+1;
            });
          }
        }
        setGameState('default');
        setUserMessage(null);
        setBotMessage(null);  
      },500);   
    }
    
  },[gameState,botChoice,userChoice]);

  return (
    
    <div className={styles.App}>
      <title>Rock Paper Scissors</title>
      <div className = {styles["Top-half"]}>
        <Score state = {gameState} region='top-score' name = 'Player' score={userScore} message={userMessage}></Score>
        <Choices state = {gameState} choice={userChoice} setter={[setUserChoice,setBotChoice]} stateChange={setGameState} side='player'></Choices>
      </div>

      <div className = {styles["Bottom-half"]} >
        <Score state = {gameState} region='bottom-score' name = 'Bot' score={botScore} message={botMessage}></Score>
        <Choices state = {gameState} choice={botChoice} setter={[setUserChoice,setBotChoice]} stateChange={setGameState} side='bot'></Choices>
      </div>
    </div>
  );
}

