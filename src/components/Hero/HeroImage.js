import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HeroImage = () => {
  return (
    <StaticImage
      src="../../images/traveler.jpg"
      alt="Hero Image"
      style={{
        maxHeight: `600px`,
        marginBottom: `60px`,
        width: `100%`,
      }}
    />
  )
}

export default HeroImage