'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Section7() {
  const { ref, inView } = useInView({
    triggerOnce: false, // animate only once
    threshold: 0.2
  })

  const boxes = [
    {
      id: '01',
      title: 'Customer-centric approach',
      text: 'Customer-centric approach business strategy prioritizes the needs, preferences.',
      delay: 0
    },
    {
      id: '02',
      title: 'Sales-driven and marketing plans',
      text: 'Sales-driven marketing plans focus on aligning marketing strategies sales objectives',
      delay: 0.2
    },
    {
      id: '03',
      title: 'Financial analysis & tutorials',
      text: 'Financial analysis a tutorials essential compo businesses, investors, and individuals.',
      delay: 0.4
    },
    {
      id: '04',
      title: 'Market Research and Analysis solutions',
      text: 'Analyze competitors in the eco-friendly laun detergent space to identify gaps.',
      delay: 0.6
    }
  ]

  return (
    <section
      className="s-business-benefit tf-spacing-2"
      ref={ref}
    >
      {/* Top content */}
      <div className="wrap-1">
        <div className="tf-container w-1780">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-wrap">
                <div className="image tf-hover">
                  <div className="hover-1">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/images/section/home-4.jpg"
                      alt=""
                      className="lazyload"
                    />
                  </div>
                </div>
                <div className="content">
                  {/* Sub-title */}
                  <motion.p
                    className="s-sub-title mb-17"
                    initial={{ x: -100, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <i className="icon-angles-right moveLeftToRight" />
                    business benefit
                  </motion.p>

                  {/* Title */}
                  <motion.p
                    className="s-title text-main-green-3 mb-40 letter-space-0 text-anime-wave"
                    initial={{ x: 100, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  >
                    Transformative Benefits Corporate <span style={{color:"#e6ac41"}}>Consulting</span>
                  </motion.p>

                  {/* Paragraph */}
                  <motion.p
                    className="text"
                    initial={{ y: 50, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  >
                    Corporate consulting strategic partnership to helps organizations navigate
                    complex business challenges, optimize operations, and drive sustainable
                    growth. By leveraging industry expertise and analytical insights,
                    corporate consultants
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 boxes */}
      <div className="wrap-2">
        <div className="tf-container">
          <div className="row">
            {boxes.map((box, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <motion.div
                  className="box-benefit"
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={inView ? { rotateY: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: box.delay
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="icon style-circle">
                    <span>{box.id}</span>
                  </div>
                  <Link href="/pricing-table" className="title text-clamp-2">
                    {box.title}
                  </Link>
                  <span className="line" />
                  <p className="text text-clamp-3">{box.text}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
