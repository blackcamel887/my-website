import Head from 'next/head';
import styles from './mySite.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
export default function Home() {
  useEffect( () => { document.querySelector("body").classList.add(styles.body) } );
  return (
    <div>
      <Head>
        <title>Benjamin Kang's Website</title>
        <Link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Ysabeau+Office:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet"/>
      </Head>
      <main >
      <div className={styles['whole-site']}>
        <div className = {styles.information}>
            <div className = {styles['about-me']}>
                <h1>Benjamin Kang</h1>
                <h2>About Me</h2>   
                <p>Hi! I'm Ben, a 2nd-year computer science student studing at the University 
                of Wisconsin Madison. I love to challenge myself with difficult tasks and improve along the process. I enjoy learning
                new things and understanding how things work. Some of my hobbies include playing games and tennis. 
                </p>
            </div>
            <div class="skills">
                <h2>Skills</h2>
                <div className = {styles['skills-container']}>
                    <img className={styles.html} src="./images//html-icon.png" alt="HTML icon"/>  
                    <img className={styles.css} src="./images/css-icon.png" alt="CSS icon"/>
                    <img src="./images/javascript-programming-language-icon.png" alt="Javascript icon"/>
                    <img className={styles.java} src="./images/java-programming-language-icon.png" alt="Java icon"/>
                    <img className={styles.node} src="./images/nodejs-1-logo.png" alt="Node JS icon"/>
                    <img src="./images/python-programming-language-icon.png" alt="Python icon"/>
                    <img src="./images/git-icon.png" alt="Git icon"/>
                    <img src="./images/react-js-icon.png" alt="React icon"/>
                </div>
            </div>
        </div>
        <div classNamev = {styles.picture}>
            <img src="https://c4.wallpaperflare.com/wallpaper/560/855/635/spy-x-family-anya-forger-hd-wallpaper-preview.jpg"
            alt="Anya smug face"/>
        </div>
      </div>
      <div className ="projects">
          <div class="my-website">
              <h2>Projects</h2>
              <h3>This website</h3>
          </div>
      </div> 
        </main> 
        <footer>
            <div className = {styles.contact}>
                <h2>Contact</h2>
                <div classname ={styles["contact-icons"]}>
                    <a href="mailto:pajamas887@gmail.com"><img className={styles.mail} src="./images/Mail-02.png" alt="Mail icon"/></a>
                    <a href=""><img className = {styles.discord} src="./images/discord-black-icon.png" alt="Discord icon"/></a>
                    <a href="https://github.com/blackcamel887"><img className={styles.github} src="./images/github-icon.png" alt="Github icon"/></a>
                </div>
            </div>
        </footer>
      </div>
  );
}
