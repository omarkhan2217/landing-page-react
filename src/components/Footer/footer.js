import React from "react";
import classes from "./footer.module.css";
import PopupContact from "../Popup/PopupContact/popupContact";
import { StickyContainer, Sticky } from "react-sticky";

const Footer = () => {
  return (
    <>
      <div className={classes.footerContainer}>
        <div>
          <input
            className={classes.inputEmail}
            type="Email"
            placeholder="Email Address"
          ></input>
          <p className={classes.description}>
            <input className={classes.checkbox} type="Checkbox"></input>
            Subscribe to receive communications from Aesop about our products
            and services. By subscribing, you confirm you have read and accept
            our privacy policy.
          </p>
        </div>
        <div>
          <h3 className={classes.header}>Orders and support</h3>
          <a className={classes.link} href="#">
            Contact us
          </a>
          <a className={classes.link} href="#">
            FAQs
          </a>
          <a className={classes.link} href="#">
            Delivery and returns
          </a>
          <a className={classes.link} href="#">
            Terms and conditions
          </a>
        </div>

        <div>
          <h3 className={classes.header}>Services</h3>
          <a className={classes.link} href="#">
            Live assistance
          </a>
          <a className={classes.link} href="#">
            Corporate gifts
          </a>
          <a className={classes.link} href="#">
            Facial appointments
          </a>
        </div>
        <div>
          <h3 className={classes.header}>Location preferences</h3>
          <p className={classes.paragraph}>
            Shipping:
            <a className={classes.links} href="#">
              Hong Kong (S.A.R)
            </a>
          </p>
          <p className={classes.paragraph}>
            Language
            <a className={classes.links} href="#">
              English
            </a>
          </p>
        </div>
        <div>
          <h3 className={classes.header}>Sustainability</h3>
          <p className={classes.description}>
            All Aesop products are vegan, and we do not test our formulations or
            ingredients on animals. We are Leaping Bunny approved and a
            Certified B Corporation. Learn more
          </p>
        </div>
        <div>
          <h3 className={classes.header}>About</h3>
          <a className={classes.link} href="#">
            Our story
          </a>
          <a className={classes.link} href="#">
            Foundation
          </a>
          <a className={classes.link} href="#">
            Careers
          </a>
          <a className={classes.link} href="#">
            Privacy policy
          </a>
          <a className={classes.link} href="#">
            Accessibility
          </a>
        </div>
        <div>
          <h3 className={classes.header}>Social media</h3>
          <a className={classes.link} href="#">
            Instagram
          </a>
          <a className={classes.link} href="#">
            Twitter
          </a>
          <a className={classes.link} href="#">
            Linkedln
          </a>
          <a className={classes.link} href="#">
            Wechat
          </a>
          <a className={classes.link} href="#">
            Weibo
          </a>
        </div>
      </div>
      <div className={classes.copyright}>
        <p>© Aesop</p>
      </div>
    </>
  );
};

export default Footer;
