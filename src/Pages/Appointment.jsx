import React from 'react';
import Hero from '../Companents/Hero';
import AppointmentForm from '../Companents/AppointmentForm';

const Appointment = () => {
    return (
        <>
            <Hero 
            title={"Schedule Your Appointment | Mr.shekCare Medical Institute"}
            imageUrl={"/signin.png"}
            />

            <AppointmentForm/>
        </>
    );
};

export default Appointment;