"use client";
import React, { useState } from "react";
import classes from "./ContactForm.module.scss";

interface Translate {
  Header: string;
  placeHolders: {
    FirstName: string;
    Email: string;
    LastName: string;
    Phone: string;
  };
  Submit: string;
}

function ContactForm({ translate }: { translate: Translate }) {
  const [mapSrc, setMapSrc] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.945227102643!2d32.761436415722274!3d39.883604279429245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6b7437030d7eded!2sTOPSPIN%20TENNIS%20ACADEMY!5e0!3m2!1sen!2str!4v1590593724074!5m2!1sen!2str"
  );

  return (
    <section className={classes.formSection}>
      <div className={classes.formContainer}>
        <div>
          <div className={classes.buttons}>
            <button
              onClick={() =>
                setMapSrc(
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.945227102643!2d32.761436415722274!3d39.883604279429245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6b7437030d7eded!2sTOPSPIN%20TENNIS%20ACADEMY!5e0!3m2!1sen!2str!4v1590593724074!5m2!1sen!2str"
                )
              }
              className={`${classes.bilkentBtn} button`}
            >
              Bilkent
            </button>
            <button
              onClick={() =>
                setMapSrc(
                  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1531.6412091741363!2d32.8527397!3d39.8455036!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3456916e089cb%3A0x3c9d011503282f1d!2zVG9wc3BpbiDDh2Fua2F5YSBUZW5pcyBLdWzDvGLDvA!5e0!3m2!1sen!2str!4v1702828084341!5m2!1sen!2str"
                )
              }
              className={`${classes.cankayaBtn} button`}
            >
              Çankaya
            </button>
          </div>
          <iframe
            title="Google Map"
            width="100%"
            className={classes.googleMap}
            style={{ border: 0 }}
            src={mapSrc}
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <form
            action="https://formsubmit.co/İnfo@tta.com.tr"
            method="POST"
            className={classes.formContact}
          >
            <h3>{translate.Header}</h3>
            <div className={classes.inputs}>
              <input
                placeholder={translate.placeHolders.FirstName}
                type="text"
                name="FirstName"
              />
              <input
                placeholder={translate.placeHolders.LastName}
                type="text"
                name="LastName"
              />
            </div>
            <div className={classes.inputs}>
              <input
                placeholder={translate.placeHolders.Email}
                type="text"
                name="Email"
              />
              <input
                placeholder={translate.placeHolders.Phone}
                name="Phone"
                type="text"
              />
            </div>
            <div className={classes.inputs}>
              <textarea name="message" />
            </div>
            <div className={classes.submit}>
              <button className="button"> {translate.Submit} </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
