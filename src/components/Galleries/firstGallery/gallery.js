import React from "react";
import classes from "./gallery.module.css";
import gallery1 from "../../../images/gallery1.webp";
import gallery2 from "../../../images/gallery2.webp";
import gallery3 from "../../../images/gallery3.webp";
import gallery4 from "../../../images/gallery4.webp";
import gallery5 from "../../../images/gallery5.webp";
import gallery6 from "../../../images/gallery6.webp";
import gallery7 from "../../../images/gallery7.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { keyframes } from "styled-components";
const settings = {
  dots: true,
  infinite: false,
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

const Gallery = () => {
  return (
    <div
      className={classes.container}
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
          <div
            className={classes.gallery1}
            onMouseOver={() => {
              console.log("HOVER");
            }}
          >
            <img
              className={classes.galleryImg1}
              src={gallery1}
              alt="Img 1"
            ></img>
            <a href="#" className={classes.btnGallery}>
              Sublime Replenishing Night Masque
            </a>
            <p className={classes.paragraph}>
              Richly nourishing hydration for overnight use
            </p>
          </div>
        </div>
        <div>
          <div className={classes.gallery1}>
            <img
              className={classes.galleryImg2}
              src={gallery2}
              alt="Img 2"
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
              src={gallery3}
              alt="Img 3"
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
              src={gallery4}
              alt="Img 4"
            ></img>
            <a href="#" className={classes.btnGallery}>
              Aganice Aromatique Candle
            </a>
            <p className={classes.paragraph}>Cardamom, Mimosa, Tobacco</p>
          </div>
        </div>
        <div>
          <div className={classes.gallery1}>
            <img
              className={classes.galleryImg5}
              src={gallery5}
              alt="Img 5"
            ></img>
            <a href="#" className={classes.btnGallery}>
              Parsley Seed Extented Anti-Oxidant Skin Care Kit
            </a>
            <p className={classes.paragraph}>
              Delivers potent doses of anti-oxidants
            </p>
          </div>
        </div>
        <div>
          <div className={classes.gallery1}>
            <img
              className={classes.galleryImg6}
              src={gallery6}
              alt="Img 6"
            ></img>
            <a href="#" className={classes.btnGallery}>
              Rose Hair & Scalp Moisturising Masque
            </a>
            <p className={classes.paragraph}>
              Maintain scalp and hair in peak condition
            </p>
          </div>
        </div>
        <div className={classes.gallery1}>
          <img className={classes.galleryImg7} src={gallery7} alt="Img 7"></img>
          <a href="#" className={classes.btnGallery}>
            Resurrection Duet
          </a>
          <p className={classes.paragraph}>Cleanse and nourish the hands</p>
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;

/* <div className={classes.gallery1}>
<img
  className={classes.galleryImg1}
  src={gallery1}
  alt="Img 1"
></img>
<a href="#" className={classes.btnGallery}>
  Sublime Replenishing Night Masque
</a>
<p>Richly nourishing hydration for overnight use</p>
</div>
<div className={classes.gallery1}>
<img
  className={classes.galleryImg2}
  src={gallery2}
  alt="Img 2"
></img>
<a href="#" className={classes.btnGallery}>
  Rōzu Eau de Parfum
</a>
<p>Floral, Green and Woody</p>
</div>
<div className={classes.gallery1}>
<img
  className={classes.galleryImg3}
  src={gallery3}
  alt="Img 3"
></img>
<a href="#" className={classes.btnGallery}>
  The Chance Companion
</a>
<p>For fragnant, soft skin neck-to-toe</p>
</div> */
