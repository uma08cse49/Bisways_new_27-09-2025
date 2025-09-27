"use client"
import Link from "next/link"
import { motion } from "framer-motion"

const parentVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

const itemVariants = {
  hidden: { x: -80, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function Section4() {
  return (
    <>
      <section className="s-solution tf-spacing-1" style={{ backgroundColor: "#0b1972" }}>
        <div className="mb-70">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-8">
                {/* Parent motion container — this handles triggering + staggering */}
                <motion.div
                  className="content"
                  variants={parentVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.25 }} // <- replay on re-entry
                >
                  <motion.p
                    className="s-title text-white text-anime-wave"
                    variants={itemVariants}
                    style={{ display: "block", willChange: "transform, opacity" }}
                  >
                    Driving Business Growth through{" "}
                    <span style={{ color: "#e6ac41" }}>Solutions</span>
                  </motion.p>

                  <motion.p
                    className="text text-white"
                    variants={itemVariants}
                    style={{ display: "block", willChange: "transform, opacity" }}
                  >
                    We are committed to delivering exceptional service and personalized strategies
                    that help our clients succeed in a rapidly evolving marketplace. Through
                    collaboration, integrity, and a relentless focus on results, we aim to be a trusted
                    partner in their journey toward sustainable success and industry leadership
                  </motion.p>
                </motion.div>
              </div>

              <div className="col-lg-4">
                <div className="content-right">
                  <div className="wg-curve-text tf-animate__box-2 animate__slow">
                    <div className="icon"><i className="flaticon-rocket" /></div>
                    <div className="text-rotate">
                      <div className="circle">
                        <div id="circularText" className="text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* features unchanged */}
        <div className="tf-container w-1780">
          <div className="row">
            <div className="col-lg-4">
              <div className="wg-feature-item tf-hover-icon">
                <div className="icon-item hover-icon"><i className="flaticon-target" /></div>
                <p className="title font-main-2 fw-7"><Link href="/our-service">Consulting Strategy</Link></p>
                <p className="text">Tailored strategies designed to address the unique ways challenges and opportunities of each client.</p>
                <span className="line mb-40" />
                <ul className="benefit-list style-3">
                  <li><div className="icon"><i className="icon-star-of-life" /></div><p><Link href="/service-details">Data-Driven Insights Leveraging</Link></p></li>
                  <li><div className="icon"><i className="icon-star-of-life" /></div><p><Link href="/service-details">Scalability and Flexibility</Link></p></li>
                  <li><div className="icon"><i className="icon-star-of-life" /></div><p><Link href="/service-details">Goal-Oriented Planning</Link></p></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="wg-feature-item style-2 tf-hover-icon">
                <div className="icon-item hover-icon"><i className="flaticon-rocket" /></div>
                <p className="title font-main-2 fw-7"><Link href="/our-service-02">Business Growth &amp; Solutions</Link></p>
                <p className="text">Our business growth and solutions services are designed to drive sustainable success for your company.</p>
                <span className="line mb-40" />
                <ul className="benefit-list style-3">
                  <li><div className="icon"><i className="icon-star-of-life" /></div><p><Link href="/service-details">Market Opportunity Identification</Link></p></li>
                  <li><div className="icon"><i className="icon-star-of-life" /></div><p><Link href="/service-details">Customer-Centric Approach</Link></p></li>
                  <li><div className="icon"><i className="icon-star-of-life" /></div><p><Link href="/service-details">Performance Tracking</Link></p></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="wg-feature-item last style-3 tf-hover-icon">
                <div className="icon-item hover-icon"><i className="flaticon-megaphone" /></div>
                <p className="title font-main-2 fw-7"><Link href="/our-service" className="text-white hover-text-main-yellow">Marketing Growth Solutions</Link></p>
                <p className="text">Our marketing growth solutions are designed accelerate your business’s reach and growth impact.</p>
                <span className="line mb-40" />
                <ul className="benefit-list style-3">
                  <li><div className="icon"><i className="icon-star-of-life" /></div><p><Link href="/service-details" className="text-white hover-text-main-yellow">Performance Tracking &amp; Reporting</Link></p></li>
                  <li><div className="icon"><i className="icon-star-of-life" /></div><p><Link href="/service-details" className="text-white hover-text-main-yellow">Automation and Technology</Link></p></li>
                  <li><div className="icon"><i className="icon-star-of-life" /></div><p><Link href="/service-details" className="text-white hover-text-main-yellow">SEO &amp; Content Optimization</Link></p></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
		<span className="line" />
      </section>
    </>
  )
}
