import React from "react";
import classes from "./navbar.module.css";

const Navbar = () => {
  return (
    <div class={classes.container}>
      <div>
        <nav>
          <ul className={classes.navStart}>
            <li className={classes.listItem}>Shop</li>
            <li className={classes.listItem}>Read</li>
            <li className={classes.listItem}>Stores</li>
            <li className={classes.listItem}>Search</li>
            <div className={classes.navEnd}>
              <li className={classes.listItem}>Login</li>
              <li className={classes.listItem}>Cart</li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
