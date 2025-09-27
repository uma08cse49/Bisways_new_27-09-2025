"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Section3() {
	const { ref: headingRef, inView: headingInView } = useInView({
		triggerOnce: false,
		threshold: 0.2,
	})

	const slideLeft = {
		hidden: { x: -80, opacity: 0 },
		visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
	}

	const boxes = [
		{ icon: "flaticon-market-1", title: "Client-Centered Approach", text: "Our clients’ success is our top priority and we provide tailored strategies that align with their goals." },
		{ icon: "flaticon-excellent", title: "Excellence in Experience", text: "We bring together years of experience and a commitment to delivering exceptional results." },
		{ icon: "flaticon-integration", title: "Integrity and Transparency", text: "Integrity and transparency are the cornerstones of our consulting approach." },
		{ icon: "flaticon-integrity", title: "Ethical Integrity", text: "We ensure that every project reflects our dedication to the highest quality of service." },
		{ icon: "flaticon-teamwork", title: "Collaboration and Teamwork", text: "We foster collaboration, working closely with clients and internal teams to achieve shared goals." },
		{ icon: "flaticon-dna", title: "Innovation and Adaptability", text: "We embrace continuous improvement and integrate the latest industry trends and technologies." },
	]

	return (
		<section className="s-value tf-spacing-2">
			<div className="tf-container">
				<div className="row">
					<div className="col-lg-12">
						<div className="heading mb-70" ref={headingRef}>
							<motion.p
								className="s-sub-title mb-15 justify-center"
								style={{ color: "#0b1972", display: "flex", alignItems: "center", gap: "6px" }}
								initial="hidden"
								animate={headingInView ? "visible" : "hidden"}
								variants={slideLeft}
							>
								<i className="icon-angles-right moveLeftToRight" style={{ color: "#0b1972" }} />
								our value
							</motion.p>

							<motion.p
								className="s-title text-center text-anime-style-2"
								style={{ color: "#0b1972" }}
								initial="hidden"
								animate={headingInView ? "visible" : "hidden"}
								variants={slideLeft}
								transition={{ delay: 0.2 }}
							>
								Values That Drive Our Consulting
								<br />
								Approach Commitment <span style={{ color: "#e6ac41" }}>to Excellence</span>
							</motion.p>
						</div>

						<div className="grid-layout-3">
							{boxes.map((box, index) => (
								<div
									key={index}
									className="box-icon style-6 type-2 tf-hover-icon text-white"
									style={{ backgroundColor: "#e6ac41", padding: "15px", transition: "transform 0.3s ease" }}
									onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
									onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
								>
									<div className="icon">
										<i className={`${box.icon} hover-icon-2`} />
									</div>
									<Link href="/#" className="title fw-7 fs-22" style={{ color: "#0b1972"}}>
										{box.title}
									</Link>
									<p className="text-black">{box.text}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
