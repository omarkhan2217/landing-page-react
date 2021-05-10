import React from "react";
import classes from "./popupContact.module.css";

const PopupContact = ({ setIsChatBoxOpen }) => {
  return (
    <div
      className={classes.container}
      onClick={() => {
        setIsChatBoxOpen((prev) => !prev);
      }}
    >
      <a className={classes.popupContact}>
        <div className={classes.icon}>
          <i class="far fa-comment-alt"></i>
        </div>
      </a>
    </div>
  );
};

export default PopupContact;
