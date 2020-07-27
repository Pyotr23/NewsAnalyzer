import React from "react";
import AboutHeaderInfo from "../header-info/about-header-info";
import Description from "../description/description";
import Stack from "../stack/stack";
import Author from "../author/author";
import Commits from "../commits/commits";

const About = () => (
  <>
    <AboutHeaderInfo />
    <Description />
    <Stack />
    <Author />
    <Commits />
  </>
)

export default About;
