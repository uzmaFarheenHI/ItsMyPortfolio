import React from "react";
import styles from "./Contact.module.css";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"Images/emailIcon.png"} alt="Email icon" />
          <a href="mailto:farheenuzma72@gmail.com">farheenuzma72@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={"Images/linkedinIcon.png"}
            alt="LinkedIn icon"
          />
          <a href="https://linkedin.com/in/uzma-farheen-h-i">linkedin.com/in/uzma-farheen-h-i</a>
        </li>
        <li className={styles.link}>
          <img src={"Images/githubIcon.png"} alt="Github icon" />
          <a href="https://github.com/uzmaFarheenHI">github.com/uzmaFarheenHI</a>
        </li>
      </ul>
    </footer>
  );
};
