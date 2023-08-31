import React from "react";
import { Wrapper, HeaderWrapper } from "./Hero.styles";
import HeroImage from "./HeroImage";


const Hero = ({title, description}) => {
        
    return (
        <Wrapper>
            <HeroImage />
            <HeaderWrapper>
                <h1>{title}</h1>
                <p>{description}</p>
            </HeaderWrapper>
        </Wrapper>
    )
}

export default Hero