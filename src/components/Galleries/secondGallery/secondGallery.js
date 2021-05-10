import React from "react";
import classes from "./secondGallery.module.css";
import gallery9 from "../../../images/gallery9.webp";
import gallery10 from "../../../images/gallery10.webp";
import gallery11 from "../../../images/gallery11.webp";
import gallery12 from "../../../images/gallery12.webp";
import gallery13 from "../../../images/gallery13.webp";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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

const SecondGallery = () => {
  return (
    <div
      className={classes.containerMain}
      style={{
        marginTop: "5.3rem",
        backgroundColor: "transparent",
        padding: "5rem",
      }}
    >
      <Slider
        {...settings}
        arrows={true}
        accessibility={true}
        prevArrow={<Arrow type="prev" />}
        nextArrow={<Arrow type="next" />}
      >
        <div>
          <div className={classes.gallery1}>
            <img
              className={classes.galleryImg1}
              src={gallery13}
              alt="Img 13"
            ></img>
            <a href="#" className={classes.btnGallery}>
              Sublime Replenishing Night Masque
            </a>
            <p className={classes.paragraph}>
              Gel-cream rich in Vitamin C, E and F
            </p>
          </div>
        </div>
        <div>
          <div className={classes.gallery1}>
            <img
              className={classes.galleryImg2}
              src={gallery9}
              alt="Img 9"
            ></img>
            <a href="#" className={classes.btnGallery}>
              Rōzu Eau de Parfum
            </a>
            <p className={classes.paragraph}>Floral, Green and Woody</p>
          </div>
        </div>
        <div>
          <div className={classes.gallery1}>
            <img
              className={classes.galleryImg3}
              src={gallery10}
              alt="Img 10"
            ></img>
            <a href="#" className={classes.btnGallery}>
              The Chance Companion
            </a>
            <p className={classes.paragraph}>
              For fragnant, soft skin neck-to-toe
            </p>
          </div>
        </div>
        <div>
          <div className={classes.gallery1}>
            <img
              className={classes.galleryImg4}
              src={gallery11}
              alt="Img 11"
            ></img>
            <a href="#" className={classes.btnGallery}>
              The Chance Companion
            </a>
            <p className={classes.paragraph}>
              For fragnant, soft skin neck-to-toe
            </p>
          </div>
        </div>
        <div>
          <div className={classes.gallery1}>
            <img
              className={classes.galleryImg5}
              src={gallery12}
              alt="Img 12"
            ></img>
            <a href="#" className={classes.btnGallery}>
              The Chance Companion
            </a>
            <p className={classes.paragraph}>
              For fragnant, soft skin neck-to-toe
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SecondGallery;
