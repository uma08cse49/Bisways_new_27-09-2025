"use client";

import { motion } from "framer-motion";

const syncTransition = { duration: 0.3, ease: "easeInOut" };

const circleVariants = {
  rest: { x: 0, transition: syncTransition },
  hover: { x: 7, transition: syncTransition },
};

const arrowVariants = {
  // NOTE: negative rotation -> up-right (↗)
  rest: { rotate: -45, transition: syncTransition },
  hover: { rotate: 0, transition: syncTransition }, // to right (→)
};

export default function Section2() {
  return (
    <>
      <section className="s-map">
        <div className="box-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan%20Rafael%2C%20California!5e0!3m2!1sen!2s!4v1678975266976!5m2!1sen!2s"
            height={825}
            style={{ border: 0, width: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="content-wrap">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-8 offset-lg-4">
                <div className="content">
                  <div className="comment-wrap style-2">
                    <h3 className="text-anime-wave" style={{ color: "#0b1972" }}>
                      Send Us Message
                    </h3>
                    <p className="note mb-40">
                      Your email address will not be published. Required fields are marked *
                    </p>

                    <form action="#" className="form-comment style-3">
                      <div className="cols mb-20">
                        <fieldset>
                          <input type="text" placeholder="Name" required />
                        </fieldset>
                        <fieldset>
                          <input type="number" placeholder="Phone" required />
                        </fieldset>
                      </div>

                      <div className="cols mb-20">
                        <fieldset>
                          <input type="email" placeholder="Email" required />
                        </fieldset>
                        <fieldset>
                          <input type="text" placeholder="Subject" required />
                        </fieldset>
                      </div>

                      <div className="cols mb-20">
                        <fieldset>
                          <textarea placeholder="Message" />
                        </fieldset>
                      </div>

                      <div className="checkbox-item mb-30">
                        <label>
                          <span className="text">
                            Save my name, email, and website in this browser for the next time I comment.
                          </span>
                          <input type="checkbox" className="checkbox-item" defaultChecked />
                          <span className="btn-checkbox" />
                        </label>
                      </div>

                      {/* ---------- Styled Submit Button (animated circle + arrow) ---------- */}
                      <div
                        style={{
                          display: "flex",
                          gap: "36px", // gap between button+circle pairs (if multiple)
                          flexWrap: "wrap",
                          justifyContent: "center",
                          marginTop: "50px",
                        }}
                      >
                        <motion.div
                          initial="rest"
                          whileHover="hover"
                          animate="rest"
                          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                        >
                          {/* the real submit button */}
                          <button
                            type="submit"
                            aria-label="Send message"
                            style={{
                              padding: "16px 36px",
                              borderRadius: "50px",
                              background: "#e6ac41",
                              color: "#ffffff",
                              fontSize: "18px",
                              fontWeight: 600,
                              cursor: "pointer",
                              marginRight: 0,
                              border: "none",
                            }}
                          >
                            Send Message Us
                          </button>

                          {/* animated circle touching the button */}
                          <motion.div
                            variants={circleVariants}
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginLeft: 0,
                              background: "#e6ac41",
                              // ensure circle doesn't block pointer events for the button
                              // but still responds to hover (parent handles hover)
                              pointerEvents: "auto",
                            }}
                          >
                            {/* arrow rotates from ↗ to → */}
                            <motion.svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              variants={arrowVariants}
                              style={{
                                transformOrigin: "50% 50%",
                                transformBox: "fill-box",
                                display: "block",
                              }}
                            >
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </motion.svg>
                          </motion.div>
                        </motion.div>
                      </div>
                      {/* --------------------------------------------------------------------- */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* optional local styles to keep layout tidy — remove if you already have them globally */}
      <style jsx>{`
        .form-comment .cols fieldset input,
        .form-comment .cols fieldset textarea {
          width: 100%;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
