import React from "react";
import classes from "./sixthSection.module.css";

const SixthSection = () => {
  return (
    <div className={classes.quoteContainer}>
      <p className={classes.quote}>
        ‘Sunlight fell upon the wall; the wall received a borrowed splendour.’
      </p>
      <p className={classes.quoter}>Jalāl ad-Dīn Muhammad Rūmī</p>
    </div>
  );
};

export default SixthSection;
