import React, { useEffect, useRef } from "react";
import "./contact.css";
import EmailIcon from "@mui/icons-material/Email";
import { useForm, ValidationError } from "@formspree/react";
import Done from '../../success.json'
import contactUs from '../../TTA Contact Us.json'
import Lottie from "lottie-react";


export default function Contact() {
  const textareaRef = useRef(null);
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const handleInput = () => {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    };

    textarea.addEventListener("input", handleInput);

    return () => {
      textarea.removeEventListener("input", handleInput);
    };
  }, []);

  const [state, handleSubmit] = useForm("xeozknwq");
  return (
    <div className="contact">
      <div className="contact-content">
        <div className="contact-title">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              marginBottom: "2rem",
            }}
          >
            <div className="contact-icon">
              <EmailIcon />
            </div>
            <h1>Contact Us</h1>
          </div>
          <p>
            Contact us for more information and get notified when I publish
            something new.
          </p>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address:</label>
            <input
            autoComplete="off"
              required
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message">Your Message:</label>
            <textarea
              required
              id="message"
              name="message"
              ref={textareaRef}
              placeholder="Your Message"
            ></textarea>
                  <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
            <div className="submit">
              <button type="submit" disabled={state.submitting} >
                {state.submitting?"submitting......":"send massage"}
                </button>
            </div>
          {state.succeeded && (<p style={{
            fontSize:"18px", marginTop:"1.7rem", display:"flex",justifyContent:"center",alignItems:"center"
          }}>
            <Lottie loop={false} style={{height:55}} animationData={Done} />
            Your massage has been send successfully</p>
            )}
          </form>

        </div>
      </div>

      <div className="contact-animation ">
        <Lottie style={{height:350,rotate:"-10deg"}} animationData={contactUs} />
      </div>
    </div>
  );
}
