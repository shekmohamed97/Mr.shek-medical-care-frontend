import React from 'react';
import Hero from "../Companents/Hero";
import Biography from "../Companents/Biography";
const AboutUs = () => {
    return (
        <>
            <Hero
              title={"Learn More About Us | Mr.shekCare Medical Institute"}
              imageUrl={"/about.png"}
            />
            <Biography imageUrl={"/whoweare.png"}/>
        </>
    );
};

export default AboutUs;