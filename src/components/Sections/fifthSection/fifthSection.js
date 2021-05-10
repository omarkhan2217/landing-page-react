import React from "react";
import classes from "./fifthSection.module.css";
import Slider from "react-slick";

const FifthSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <i className="fas fa-chevron-right"></i>
      ) : (
        <i className="fas fa-chevron-left"></i>
      );
    return (
      <span className={className} onClick={props.onClick}>
        {char}
      </span>
    );
  }

  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.section1}>
          <h2 className={classes.header}>Store Locator</h2>
          <p className={classes.paragraph}>
            Our consultants are available to host you in-store and provide
            tailored guidance on gift purchases.{" "}
          </p>
          <a href="#" className={classes.btnDark}>
            Find a nearby store
            <div className={classes.icon}>
              <i class="fas fa-arrow-right"></i>
            </div>
          </a>
        </div>
        <div className={classes.imageContainer}>
          <Slider
            {...settings}
            arrows={false}
            accessibility={true}
            prevArrow={<Arrow type="prev" />}
            nextArrow={<Arrow type="next" />}
          >
            <div>
              <img src="https://www.aesop.com/u1nb1km7t5q7/40xVxq4tBdXpyJLXVTQPvO/aa8ef7a4cca7a713e12b58f1ab8cc6ea/Aesop-HK-K11-Hero-Bleed-Desktop-2880x1620px.jpg"></img>
            </div>

            <div>
              <img src="https://www.aesop.com/u1nb1km7t5q7/DqJCGx3tPeDqODieHw5uA/48f50fbd1758ee27990a600c131bd2ce/Aesop-HK-New-Town-Plaza-Hero-Bleed-Desktop-2880x1620px.jpg"></img>
            </div>

            <div>
              <img src="https://www.aesop.com/u1nb1km7t5q7/3b6KRiDt3QpNut8LoYGgB9/1d62a7373daa8a6ba4dff6ea300b891e/Aesop-HK-Hollywood-Road-Hero-Desktop-2880x1620.jpg"></img>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
