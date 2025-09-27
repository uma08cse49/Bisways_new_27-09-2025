'use client'
import { sliderService } from "@/utils/swiperOptions"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Section3() {
  const serviceImages = {
    cfo:  "/images/section/home-3.jpg",
    registration: "/images/section/home-3.jpg",
    filings: "/images/section/home-3.jpg",
    audit: "/images/section/home-3.jpg"
  };
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
    <section className="s-service-2 tf-spacing-1" style={{marginTop:"50px"}}>
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="s-heading">
              <p className="s-sub-title text-white justify-center mb-18">
                <i className="icon-angles-right moveLeftToRight" />
                title
              </p>
              <p className="s-title text-white text-center text-anime-wave">
                Leadership Development &amp; Executive <br />
                Coaching Market Expansion &amp; Growth <br />
                Strategies
                <span style={{color:" #e6ac41"}}> and Solutions </span>
              </p>
            </div>

            {/* ✅ No manual swiper-wrapper */}
            <Swiper {...sliderService} className="swiper-container slider-service">

              <SwiperSlide>
                <div className="card-service text-center tf-hover wow fadeInUp" data-wow-delay="0s">
                  <h5 className="title mb-10">
                    <Link href="/service-details">Become Profitable</Link>
                  </h5>
                  <p className="text mb-35">
                    Assisting organizations defining <br /> long-term goals growth.
                  </p>
                  <div className="image hover-1">
                    <Link href="/service-details">
                      <Image
                        src={serviceImages.cfo}
                        alt="Strategic Planning"
                        width={600}
                        height={600}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Link>
                  </div>
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
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-service text-center tf-hover wow fadeInUp" data-wow-delay="0.1s">
                  <h5 className="title mb-10">
                    <Link href="/service-details">Save Time</Link>
                  </h5>
                  <p className="text mb-35">
                    Management, capital allocation <br /> financial restructuring.
                  </p>
                  <div className="image hover-1">
                    <Link href="/service-details">
                      <Image
                        src={serviceImages.registration}
                        alt="Financial Advisory"
                        width={600}
                        height={600}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Link>
                  </div>
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
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-service text-center tf-hover wow fadeInUp" data-wow-delay="0.2s">
                  <h5 className="title mb-10">
                    <Link href="/service-details">Expand Cash</Link>
                  </h5>
                  <p className="text mb-35">
                    Helping organizations identify, <br /> assess, and mitigate risks while.
                  </p>
                  <div className="image hover-1">
                    <Link href="/service-details">
                      <Image
                        src={serviceImages.filings}
                        alt="Risk Management"
                        width={600}
                        height={600}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Link>
                  </div>
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
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-service text-center tf-hover wow fadeInUp" data-wow-delay="0.3s">
                  <h5 className="title mb-10">
                    <Link href="/service-details">Enhance Collections</Link>
                  </h5>
                  <p className="text mb-35">
                    Executive coaching, leadership <br /> training and management
                  </p>
                  <div className="image hover-1">
                    <Link href="/service-details">
                      <Image
                        src={serviceImages.audit}
                        alt="Leadership Development"
                        width={600}
                        height={600}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Link>
                  </div>
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
              </SwiperSlide>

              {/* Pagination */}
              <div className="flex justify-center">
                <div className="tf-pagination style-3 service-pagination swiper-pagination" />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
