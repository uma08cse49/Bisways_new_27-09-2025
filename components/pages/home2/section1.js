'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";


export default function Section1() {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false, // 👈 animate every time in view
    threshold: 0.2
  });
  const syncTransition = { duration: 0.3, ease: 'easeInOut' }

  const circleVariants = {
    rest: { x: 0, transition: syncTransition },
    hover: { x: 7, transition: syncTransition },
  }

  const arrowVariants = {
    // NOTE: negative rotation -> up-right (↗)
    rest: { rotate: -45, transition: syncTransition },
    hover: { rotate: 0, transition: syncTransition }, // to right (→)
  }

  return (
    <section ref={sectionRef} className="s-about-company-2 tf-spacing-3">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-9">
            <div className="wrap">
              <div>
                {/* Heading Animation */}
                <motion.p
                  className="s-sub-title"
                  initial={{ x: 100, y: 50, opacity: 0 }}
                  animate={inView ? { x: 0, y: 0, opacity: 1 } : { x: 100, y: 50, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <p className="s-sub-title mb-15">
                    <i className="icon-angles-right moveLeftToRight" />
                    WHO WE ARE
                  </p>
                </motion.p>

                <p className="s-title text-main-green-3 mb-70 text-anime-wave">
                  A Consulting Partner <br />
                  You Can <span style={{ color: "#e6ac41" }}>Trust</span>
                </p>

                {/* Left Image */}
                <div className="image-1 tf-hover">
                  <div className="hover-1">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/images/section/home-2.jpg"
                      alt=""
                      className={`lazyload ${inView ? 'tf-animate-1' : ''}`}
                    // 👆 add animation class only when in view
                    />
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="image-right tf-hover">
                <div className="image-2 hover-1">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src="/images/section/home-4.jpg"
                    alt=""
                    className={`lazyload ${inView ? 'tf-animate-2' : ''}`}
                  // 👆 same logic for second image
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="col-lg-3">
            <div className="content">
              <div className="wg-curve-text style-2 mb-50">
                <div className="icon"><i className="flaticon-rocket" /></div>
                <div className="text-rotate">
                  <div className="circle"><div id="circularText" className="text" /></div>
                </div>
              </div>
              <p className="text mb-40">
                We specialize in transforming growth businesses delivering strategic insights and
                tailored solutions that drive growth and operational excellence consultants,
              </p>
              <Link href="/our-service">


                <div
                  style={{
                    display: 'flex',
                    gap: '36px', // gap between button+circle pairs
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: '50px',
                  }}
                >
                  {['Get Started'].map((label, idx) => (
                    // parent group: hovering either button or circle triggers variants
                    <motion.div
                      key={idx}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                    >
                      {/* Button (fixed, doesn't move) */}
                      <button
                        style={{
                          padding: '16px 36px',
                          borderRadius: '50px',
                          // border: '2px solid #ffffff',
                          background: '#e6ac41',
                          color: '#ffffff',
                          fontSize: '18px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          // ensure no gap: right margin zero
                          marginRight: 0,
                        }}
                      >
                        {label}
                      </button>

                      {/* Circle (separate element touching edge) */}
                      <motion.div
                        variants={circleVariants}
                        transition={syncTransition}
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          // border: '2px solid #ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          // edges touch: no margin between elements
                          marginLeft: 0,
                          background: '#e6ac41',
                          // keep pointer events so hovering circle also triggers parent hover
                          pointerEvents: 'auto',
                        }}
                      >
                        {/* Right-pointing arrow base; rotate from center */}
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
                            transformOrigin: '50% 50%',
                            transformBox: 'fill-box', // make transform-origin work reliably for SVG
                          }}
                        >
                          {/* horizontal shaft */}
                          <line x1="5" y1="12" x2="19" y2="12" />
                          {/* arrow head pointing right */}
                          <polyline points="12 5 19 12 12 19" />
                        </motion.svg>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
