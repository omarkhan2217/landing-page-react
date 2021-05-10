import React from "react";
import classes from "./secondSection.module.css";

const SecondSection = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.section1}>
          <h4>Vitamin C for day and night</h4>
          <h2>Supporting the architecture of the skin</h2>
          <p className={classes.paragraph}>
            Vitamin C is essential for enhancing the skin’s resilience. Suited
            to use both morning and evening, this potent ingredient offers
            significant benefits when paired with time and dedication.{" "}
          </p>
          <a href="#" className={classes.btnDark}>
            Discover more about Vitamin C
            <div className={classes.icon}>
              <i class="fas fa-arrow-right"></i>
            </div>
          </a>
        </div>
        <div className={classes.videoContainer}>
          <video>
            <source src="https://player.vimeo.com/external/535715853.hd.mp4?s=391e3ff0e4217a298622caf7765a1876c8cc8b37&profile_id=175"></source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
