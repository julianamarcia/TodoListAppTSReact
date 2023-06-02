import React from "react";

//CSS
import styles from "./Modal.module.css";

interface Props {
  title: string | undefined;
  hide: boolean;
  children: React.ReactNode;
  hideOrShow: (display: boolean) => void;
}

const Modal = ({ title, hide, children, hideOrShow }: Props) => {
  return (
    <div id="modal" className={`${!hide && styles.hide}`}>
      <div
        className={`${styles.fade} ${!hide && styles.hide}`}
        onClick={() => {
          hideOrShow(false);
        }}
      ></div>
      <div className={styles.modal}>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
