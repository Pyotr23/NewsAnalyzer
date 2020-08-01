import React from "react";
import AboutHeader from "../header/about-header";
import Description from "../description/description";
import Stack from "../stack/stack";
import Author from "../author/author";
import Commits from "../commits/commits";

const About = () => (
  <>
    <AboutHeader />
    <Description />
    <Stack />
    <Author />
    <Commits />
  </>
)

export default About;
