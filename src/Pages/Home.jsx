import React from 'react';
import Hero from '../Companents/Hero';
import Biography from '../Companents/Biography';
import Department from '../Companents/Department';
import MessageForm from '../Companents/MessageForm';

const Home = () => {
    return (
        <>
            <Hero title={
               "Welcome to Mr.shek Medical Institute | Your Trusted Healthcare Provider"    
            }
            imageUrl={"/hero.png"}/>
            <Biography imageUrl={"./about.png"}/>
            <Department/>
            <MessageForm/>
        </>
    );
};

export default Home;