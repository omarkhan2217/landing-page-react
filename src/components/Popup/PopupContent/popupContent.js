import React from "react";
import classes from "./popupContent.module.css";

const PopupContent = () => {
  return (
    <div className={classes.popupContentContainer}>
      <div>
        <p>Shipping fees and delivery times</p>
      </div>
      <div>
        <p className={classes.header}>Morning Express (Hong Kong)</p>
        <div className={classes.orders}>
          <p>All orders</p>
          <p className={classes.order}>Complimentary</p>
        </div>
        <p className={classes.orderContent}>2-3 buisness days</p>
      </div>
      <div>
        <p className={classes.header}>EMS (mainland China)</p>
        <div className={classes.orders}>
          <p>All orders</p>
          <p className={classes.order}>Complimentary</p>
        </div>
        <p className={classes.orderContentSpecial}>5-10 buisness days</p>
        <p className={classes.orderParagraph}>
          Regrettably we are unable to accept orders containing Dangerous Goods
          to Mainland China.
        </p>
      </div>
      <div>
        <p className={classes.header}>Video consultation</p>
        <p className={classes.orderParagraph}>
          We welcome you to book a video appointment with a trained Aesop
          consultant for personalised advice.
        </p>
      </div>
    </div>
  );
};

export default PopupContent;
