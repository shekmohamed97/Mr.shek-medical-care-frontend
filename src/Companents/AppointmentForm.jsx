import React,{useEffect} from 'react';
import {useState} from "react";
import axios from 'axios';;
import {toast} from "react-toastify"
const AppointmentForm = () => {
    
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [address, setAddress] = useState("");
  
    const handleAppointment=async(e)=>{
      e.preventDefault();
      try {
      const res=   await axios.post(
          "https://back-end-code-fm9z.onrender.com/api/v1.1/appointment/post",
          {
            firstName,
            lastName,
            email,
            phone,
            nic,
            dob,
            gender,
            appointment_date: appointmentDate,
            address,
          },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        );
        toast.success(res.data.message);
        setFirstName(""),
          setLastName(""),
          setEmail(""),
          setPhone(""),
          setNic(""),
          setDob(""),
          setGender(""),
          setAppointmentDate(""),
          setAddress("");
      } catch (error) {
        console.error("Error submitting appointment:", error);
        toast.error(error.response.data.message);
      }
    };
    
    return (
        <>
        <div className="container form-component appointment-form">
          <h2>Appointment</h2>
          <form onSubmit={handleAppointment}>
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="NIC"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
              />
              <input
                type="date"
                placeholder="Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div>
              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="date"
                placeholder="Appointment Date"
                valu={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
              />
            </div>
           <textarea
              rows="10"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
            />
            
            <button style={{ margin: "0 auto" }}>GET APPOINTMENT</button>
          </form>
        </div>
      </>
    );
};

export default AppointmentForm;