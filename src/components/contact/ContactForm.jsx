"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { validate } from "@/utils/joiSchema";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [disabled, setDisabled] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [focus, setFocus] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Validate the specific field that lost focus
  const handleBlur = async (e) => {
    let name;

    if (e.target) {
      name = e.target.name;
    } else {
      name = e;
    }

    const result = await validate({ [name]: formData[name] });
    setErrors({
      ...errors,
      [name]: result[name],
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (e) => {
    e.preventDefault();

    //Validate all the data before submitting
    const result = await validate(formData);
    console.log(Object.keys(result).length !== 0);
    if (Object.keys(result).length !== 0) {
      setFeedbackMessage("Please make sure everything is filled in correctly");
      setFocus({ name: true, email: true, subject: true, message: true });
      return;
    } else {
      setFeedbackMessage("");
    }

    try {
      // Disable form while processing submission
      setDisabled(true);

      // Use emailjs to email contact form data
      await emailjs.send(
        process.env.NEXT_PUBLIC_VITE_SERVICE_ID,
        process.env.NEXT_PUBLIC_VITE_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_VITE_PUBLIC_KEY
      );

      setFeedbackMessage("Form submission was successful!");
    } catch (e) {
      console.error(e);
      setFeedbackMessage("Uh oh. Something went wrong.");
      setDisabled(false);
      return;
    }
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    console.log(formData);

    if (errors[name]) {
      handleBlur(name);
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setFocus({ ...focus, [name]: true });
  };

  //animation variables
  const variants = {
    initial: { scale: 1, opacity: 1 },
    loading: {
      rotate: 360,
      transition: { duration: 2, repeat: Infinity, ease: "linear" },
    },
    success: {
      scale: 1.2,
      backgroundColor: "#7aada5",
      transition: { duration: 0.5 },
    },
    error: {
      scale: 1.2,
      backgroundColor: "#d6673c",
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>
        Feel free to contact me directly through{" "}
        <a href="mailto:sacha-u@hotmail.com" className="colour">
          email
        </a>{" "}
        or{" "}
        <a
          href="https://www.linkedin.com/in/sachauijlen/"
          target="_blank"
          className="colour"
        >
          linkedIn
        </a>
        .
      </p>
      <div className="contactForm">
        <form id="contact-form" onSubmit={onSubmit}>
          <div className="nameContainer">
            <label htmlFor="name">Name: </label>
            {errors.name && focus.name && (
              <p className="errorMessage colour">{errors.name}</p>
            )}
            <input
              type="text"
              name="name"
              value={formData.name}
              onFocus={handleFocus}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control formInput"
            ></input>
          </div>
          <div className="emailContainer">
            <label htmlFor="email">Email: </label>
            {errors.email && focus.email && (
              <p className="errorMessage colour">{errors.email}</p>
            )}
            <input
              type="email"
              name="email"
              value={formData.email}
              onFocus={handleFocus}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control formInput"
            ></input>
          </div>
          <div className="subjectContainer">
            <label htmlFor="subject">Subject: </label>
            {errors.subject && focus.subject && (
              <p className="errorMessage colour">{errors.subject}</p>
            )}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onFocus={handleFocus}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control formInput"
            ></input>
          </div>
          <div className="messageContainer">
            <label htmlFor="message">Message: </label>
            {errors.message && focus.message && (
              <p className="errorMessage colour">Please enter a message</p>
            )}
            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onFocus={handleFocus}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control formInput"
            ></textarea>
          </div>
          {feedbackMessage && (
            <div className={`feedback-message colour`}>{feedbackMessage}</div>
          )}
          <motion.div
            className="containerBtn borderColour bgGradient"
            disabled={disabled}
            type="submit"
            initial={{ backgroundPosition: "10% 0" }}
            whileHover={{ backgroundPosition: "105% 0" }}
            transition={{ duration: 0.2 }}
            style={{
              background:
                "linear-gradient(to left, var(--global-color) 50%, #111111 50%)",
              backgroundSize: "200% 100%",
            }}
          >
            <button className="btn submitBtn">Submit</button>
            <div className="containerBtnImg bgColour">
              <img src="./send.svg" alt="send icon" className="sendIcon" />
            </div>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
