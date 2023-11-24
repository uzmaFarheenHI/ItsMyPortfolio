import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Uzma Farheen H I</h1>
        <p className={styles.description}>
        Experienced Web Developer with over 2 years of expertise in building high-performance web applications. Skilled in JavaScript libraries such as React, Redux, and Next.js, with a focus on optimizing user experiences and web performance.
        </p>
        <a href="mailto:farheenuzma72@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={"Images/uzmaFarheenImage.png"}
        alt=" Hero  me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
