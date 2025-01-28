import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your Firebase database URL
      await axios.post(
        "https://ecommerce-signup-176ca-default-rtdb.firebaseio.com/contacts.json",
        formData
      );
      alert("Your query has been submitted successfully!");
      setFormData({ name: "", email: "", phone: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Something went wrong, please try again!");
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
