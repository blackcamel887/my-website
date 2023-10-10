import { useState,useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from './number-guesser.module.css';
let ans = Math.floor(Math.random()*100)+1;//the answer to check on between 1 and 100 inclusive
let trackBest = 100;
function NumberGuesser() {
  useEffect( () => { document.querySelector("body").classList.add(styles.body) } );
  let [userInput,setUserInput] = useState('');//the holder for the userInput
  let [outputMessage,setOutputMessage] = useState('?');//the holder for the message for user
  let [gameState,setGameState] = useState('default');//game state holder
  let [buttonMessage,setButtonMessage] = useState('Check')//the holder for the message that appears
  let [currentScore,setCurrentScore] = useState(0);//holder for the current score
  let [bestScore,setBestScore] = useState();//holder for the best score
  //makes sure to limit numbers
  function handleKeyDown(e){
    const allowed = "1234567890"
    if(!allowed.includes(e.key)&&['Backspace','ArrowLeft','ArrowRight','Delete'].indexOf(e.key)==-1){
      e.preventDefault();
    }
  }
  //the functionality to control the users input
  function handleInputChange(e){
    //makes sure user value is in allowed range
    let value = e.target.value;
    let regex = new RegExp(/^\d+$/)
    if (regex.test(value)){
      let parse = parseInt(value) 
      if(parse>0 && parse<=100){//check if input is a number between 1 and 100
        setUserInput(value);
      }
    }
    else if (value==''){
      setUserInput(value);
    }
  }
  //the functionality that determines the appropriate message to be given to user
  function handleOnClick(){
    if(userInput===''){
      return;
    }
    setCurrentScore(prev=>prev+1);
    //increases current score with each click on button
    if(gameState==='default'){
      if(userInput<ans){//switches back to default state
        setOutputMessage('Too small!');
        setTimeout(()=>{
          setOutputMessage('?');
        },1250)
      }
      //switches gameState and updates correspoding messages
      else if(userInput===`${ans}`){
        setOutputMessage('Bingo!');
        setButtonMessage('Play again');
        //changes best attempt 
        if(currentScore+1<trackBest){
          trackBest = currentScore+1;
        }
        setBestScore(trackBest);
        setGameState('winner');
      }
      else if(userInput>ans){
        setOutputMessage('Too big!');
        setTimeout(()=>{
          setOutputMessage('?');
        },1250)
      }
    }
    //revert back all the states back to default state
    else if(gameState==='winner'){
      setButtonMessage('Check');
      ans = Math.floor(Math.random()*100)+1;//creates a new answer to check on between 1 and 100 inclusive
      setUserInput('');
      setOutputMessage('?');
      setCurrentScore(0);
      setGameState('default');
    }
  }
  return (
    <div className={styles.App}>
      <h1>
      Number Guesser
      </h1>
      <h2 className={styles.h2}>
        Pick a number between 1-100
      </h2>
      <div className={`${styles.top} ${styles.part}`}>
        <text className={styles.text}>
          {outputMessage}
        </text>
      </div>
      <input className={styles.input} type = 'number' value={userInput} onKeyDown = {handleKeyDown} 
      onChange = {handleInputChange} placeholder='Guess' max={100} min={1}>
      </input>
      <br></br>
      <button className={styles.button} onClick = {handleOnClick}>
        {buttonMessage}
      </button>
      <h3>Current tries: {currentScore} <br></br>Best attempt: {bestScore}</h3>
    </div>

  );
}

export default NumberGuesser;
