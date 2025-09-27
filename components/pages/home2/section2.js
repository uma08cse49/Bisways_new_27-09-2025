'use client';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

export default function Section2() {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false,  // 👈 animate every time
    threshold: 0.2
  });

  const { ref: gridRef, inView: gridInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const boxes = [
    { title: "Discovery", text: "We analyze your business needs in detail, identifying strengths, weaknesses, and hidden opportunities to ensure clarity before execution.", img: "/images/section/home-2.jpg" },
    { title: "Strategy", text: "We craft tailored frameworks backed by research, market trends, and proven methodologies that help your business scale smartly.", img: "/images/section/home-3.jpg" },
    { title: "Execution", text: "Our team ensures seamless implementation of your business roadmap with agility and precision for maximum efficiency.", img: "/images/section/home-4.jpg" },
    { title: "Monitoring", text: "We track progress in real-time and optimize strategies continuously, ensuring sustainable growth and reduced risks.", img: "/images/section/home-5.jpg" },
    { title: "Planning", text: "We create detailed business roadmaps aligned with your goals to achieve short and long-term milestones effectively.", img: "/images/section/home-2.jpg" },
    { title: "Advisory", text: "We provide expert consulting and advisory services to empower your leadership with actionable insights.", img: "/images/section/home-3.jpg" },
    { title: "Financial", text: "Our financial services include forecasting, risk assessment, and portfolio optimization for steady performance.", img: "/images/section/home-4.jpg" },
    { title: "Growth", text: "We accelerate business growth through innovation, digital transformation, and strategic expansion strategies.", img: "/images/section/home-5.jpg" },
  ];

  return (
    <section ref={sectionRef} className="s-service-2 tf-spacing-1 lazyload" >
      <div className="tf-container">
        <div className="row" >
          <div className="col-lg-12" >
            <div className="s-heading text-center" >

              {/* Sub-title */}
              <motion.p
                className="s-sub-title text-white justify-center mb-18"
                initial={{ x: -100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <i className="icon-angles-right moveLeftToRight" />
                services we provide
              </motion.p>

              {/* Title */}
              <motion.p
                className="s-title text-white-yellow text-center text-anime-wave"
                initial={{ x: 100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                Leadership Development &amp; Executive <br />
                Coaching Market Expansion &amp; Growth <br />
                Strategies <span style={{color:"#e6ac41"}}>and Solutions</span>
              </motion.p>

            </div>
          </div>
        </div>

        {/* 🔽 Image Section */}
        <div className="grid" ref={gridRef} >
          {boxes.map((box, index) => (
            <motion.div
              key={index}
              className="box"
              style={{ backgroundImage: `url(${box.img})` }}
              initial={{ y: 80, opacity: 0 }}
              animate={gridInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="box-inner">
                <div className="title-box">{box.title}</div>
                <div className="text-box">{box.text}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
