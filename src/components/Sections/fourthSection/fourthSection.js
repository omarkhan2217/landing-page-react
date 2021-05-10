import React from "react";
import classes from "./fourthSection.module.css";

const FourthSection = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <img src="https://www.aesop.com/u1nb1km7t5q7/6a0rFYweQvQusUfEHpowUJ/32611c5a1ea838756fd635261d88d2db/Aesop-Generic-Images-Facial-Appointments-1-Mid-Desktop-2560x1440px.jpg"></img>
        </div>
        <div className={classes.section1}>
          <h4 className={classes.header}>Facial Appointments</h4>
          <h2 className={classes.headerBig}>
            Composure for the skin and senses
          </h2>
          <p className={classes.paragraph}>
            For a well-rounded skin care regimen, Aesop Facial Appointments
            offer a series of treatments tailored to balance, stimulate and
            intensely nourish the skin.{" "}
          </p>
          <a href="#" className={classes.btnDark}>
            Learn more
            <div className={classes.icon}>
              <i class="fas fa-arrow-right"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
