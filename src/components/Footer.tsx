import React from "react";

import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <p>
        <span>React + TS Todo</span> @2023
      </p>
    </footer>
  );
};

export default Footer;
