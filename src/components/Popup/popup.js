import React from "react";
import classes from "./popup.module.css";

const Popup = ({ setIsPaneOpen }) => {
  return (
    <div
      className={classes.popupContainer}
      onClick={() => {
        setIsPaneOpen((prev) => !prev);
      }}
    >
      <p className={classes.popupParagraph}>
        Enjoy complimentary standard shipping on all orders.{" "}
        <div className={classes.icon}>
          <i class="fas fa-plus"></i>
        </div>
      </p>
    </div>
  );
};

export default Popup;
