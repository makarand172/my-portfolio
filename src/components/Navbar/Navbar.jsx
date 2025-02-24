import React, { useState } from "react";
import styles from "./Navbar.module.css";
import getImageUrl from "../../utils";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title}>Portfolio</a>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Exp">Experience</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
