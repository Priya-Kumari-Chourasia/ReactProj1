import React from "react";
import web from "../src/images/img1.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};
export default About;
