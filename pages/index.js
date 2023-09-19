import Head from 'next/head';
import styles from './mySite.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import {YsabeauOffice} from 'next/font/google';
export default function Home() {
  useEffect( () => { document.querySelector("body").classList.add(styles.body) } );
  return (
    <div>
      <Head>
        <title>Benjamin Kang's Website</title>
        <Link rel="icon" href="/favicon.ico" />                          
      </Head>
      <main >
      <div className={styles['whole-site']}>
        <div className = {styles.information}>
            <div className = {styles['about-me']}>
                <h1>Benjamin Kang</h1>
                <h2>About Me</h2>   
                <p>Hi! I'm Ben, a 2nd-year computer science student studing at the University 
                of Wisconsin Madison. Currently, I am focusing on learning frontend developement. I love to challenge myself with difficult tasks and improve along the process. I enjoy learning
                new things and understanding how things work. Some of my hobbies include playing games and tennis. 
                </p>
            </div>
            <div className="skills">
                <h2>Skills</h2>
                <div className = {styles['skills-container']}>
                    <img className={styles.icon} src="./images//html-icon.png" alt="HTML icon"/>  
                    <img className={styles.icon} src="./images/css-icon.png" alt="CSS icon"/>
                    <img className={styles.icon} src="./images/javascript-programming-language-icon.png" alt="Javascript icon"/>
                    <img className={styles.icon} src="./images/java-programming-language-icon.png" alt="Java icon"/>
                    <img className={styles.icon} src="./images/nodejs-1-logo.png" alt="Node JS icon"/>
                    <img className={styles.icon} src="./images/python-programming-language-icon.png" alt="Python icon"/>
                    <img className={styles.icon} src="./images/git-icon.png" alt="Git icon"/>
                    <img className={styles.icon} src="./images/react-js-icon.png" alt="React icon"/>
                </div>
            </div>
        </div>
        <div className = {styles.picture}>
            <img src="/images/me.jpg" alt="Benjamin Kang" className={styles.me}/>
        </div>
      </div>
      <div className ="projects">
          <div className="my-website">
              <h2>Projects</h2>
              <ul>
                <li>
                    <h3> <strong>This Website</strong> <code>&#8212;</code> <i className={styles.right}>Next.js, React.js, HTML/CSS, Javascript</i> </h3>
                </li>
                <li>
                    <h3><Link href="/games/rock-paper-scissors/App" target='_blank'>Rock Paper Scissors</Link> <code>&#8212;</code> <i className={styles.right}> React.js, HTML/CSS, Javascript</i> </h3>
                </li>
                <li>
                <h3><Link href="/games/number-guesser/App" target="_blank">Number Guesser</Link> <code>&#8212;</code> <i className={styles.right}> React.js, HTML/CSS, Javascript</i> </h3>
                </li>

              </ul>
          </div>
      </div> 
        </main> 
        <footer>
            <div className = {styles.contact}>
                <h2>Contact</h2>
                <div className ={styles["contact-icons"]}>
                    <a href="mailto:pajamas887@gmail.com"><img className={styles.mail} src="./images/Mail-02.png" alt="Mail icon"/></a>
                    <a href=""><img className = {styles.discord} src="./images/discord-black-icon.png" alt="Discord icon"/></a>
                    <a href="https://github.com/blackcamel887"><img className={styles.github} src="./images/github-icon.png" alt="Github icon"/></a>
                </div>
            </div>
        </footer>
      </div>
  );
}
