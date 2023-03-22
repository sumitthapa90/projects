import React from "react";
import Analize from "../../component/Analize/Analize";
import Hero from "../../component/Hero/Hero";
import NewsLetter from "../../component/NewsLetter/NewsLetter";
import Form from "../../component/Form/Form";

function Homepage() {
  return (
    <>
      <Hero />
      <Analize />
      <NewsLetter />
      <Form />
    </>
  );
}

export default Homepage;
