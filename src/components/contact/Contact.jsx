import React from "react";
import "./Contact.css";
import { MdMail } from "react-icons/md";
import { ValidationError, useForm } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/Animation - 1719440731706.json";
import contactUs from "../../../public/animation/contact-us.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("manwwknn");

  return (
    <section>
      <div className="title flex ">
        <MdMail className="iconMail" />
        <h2>contact us</h2>
      </div>
      <p className="subtitleform">
        contact us for more information and get notified when i publish
        something new
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email address :</label>
            <input required name="email" type="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div style={{ marginTop: "24px" }} className="flex">
            <label htmlFor="message">Your message :</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="boxsubmit">
            <button
              className="submit"
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? "submitting..." : " submit"}
            </button>
            {state.succeeded && (
              <p
                style={{
                  color: "green",

                  fontSize: "24px",
                  marginTop: "40px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Lottie
                  loop={false}
                  style={{ height: "100px", width: "100px" }}
                  animationData={doneAnimation}
                />
                your message has been successfully{" "}
              </p>
            )}
          </div>
        </form>
        <div className="contact-animation">
          <Lottie style={{ height: "300px" }} animationData={contactUs} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
