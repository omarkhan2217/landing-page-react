import React from "react";
import logo from "../../../images/logoo.jpg";
import classes from "./firstSection.module.css";

const FirstSection = () => {
  return (
    <div className={classes.container2}>
      <div className={classes.section1}>
        <img className={classes.logo} src={logo}></img>
        <div className={classes.motherDayContainer}>
          <h4>Mother's Day</h4>
          <h2>Affection, bottled</h2>
          <p className={classes.motherDayParagraph}>
            Offering renewed thanks with every pour, dollop and lather, our
            suggested gifts for caregivers of all varieties include satisfying
            body cleansers, softening hand balms, and gentle formulations for
            the skin.{" "}
          </p>
          <a href="#" className={classes.btnDark}>
            Discover gifts for mother figures{" "}
            <div className={classes.icon}>
              <i class="fas fa-arrow-right"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
