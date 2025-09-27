"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Section2() {
	const { ref, inView } = useInView({
		triggerOnce: false, // 👈 replay every time section comes into view
		threshold: 0.2,
	})

	// Left slide
	const slideLeft = {
		hidden: { opacity: 0, x: -80 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	}

	// Right slide
	const slideRight = {
		hidden: { opacity: 0, x: 80 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	}

	return (
		<section className="s-process tf-spacing-1" ref={ref}>
			<div className="tf-overlay" />
			<div className="bg-image">
				<div className="rellax" data-rellax-speed="0.3">
					<Image
						width="0"
						height="0"
						sizes="100vw"
						style={{ width: "100%", height: "100%" }}
						src="/images/section/process.jpg"
						alt=""
						className="lazyload"
					/>
				</div>
			</div>
			<div className="content-wrap">
				<div className="tf-container">
					<div className="row">
						{/* Left Column */}
						<div className="col-lg-6">
							<div className="heading mb-50">
								{/* Sub Title */}
								<motion.p
									className="s-sub-title mb-15"
									style={{ color: "#0b1972", display: "flex", alignItems: "center", gap: "6px" }}
									initial="hidden"
									animate={inView ? "visible" : "hidden"}
									variants={slideLeft}
								>
									<i className="icon-angles-right moveLeftToRight" style={{ color: "#0b1972" }} />
									working process
								</motion.p>

								{/* Main Title */}
								<motion.p
									className="s-title text-anime-wave"
									style={{ color: "#0b1972" }}
									initial="hidden"
									animate={inView ? "visible" : "hidden"}
									variants={slideLeft}
									transition={{ delay: 0.2, duration: 0.6 }}
								>
									Crafting your Success <br />
									to Process <span style={{ color: "#e6ac41" }}>Roadmap</span>
								</motion.p>
							</div>

							{/* Paragraph */}
							<motion.div
								className="wg-step-skill"
								initial="hidden"
								animate={inView ? "visible" : "hidden"}
								variants={slideLeft}
								transition={{ delay: 0.4, duration: 0.6 }}
							>
								<p className="title font-main-2 mb-30">
									Step-by-Step Consulting for Sustainable Growth
								</p>
								<span className="line" />
								<ul className="benefit-list">
									<li>
										<div className="icon">
											<i className="icon-check-2" />
										</div>
										<p>Core Competencies and Expertise</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check-2" />
										</div>
										<p>Key Strengths and Accomplishments</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check-2" />
										</div>
										<p>Skills and Career Highlights</p>
									</li>
								</ul>
							</motion.div>
						</div>

						{/* Right Column */}
						<div className="col-lg-6">
							{[
								{ step: "01", title: "Discovery & Research", text: "We begin deep understanding your business, goal challenges market research, competitor" },
								{ step: "02", title: "Strategy Development", text: "Based on our research develop comprehensive best marketing strategy aligns with objectives." },
								{ step: "03", title: "Implementation", text: "Once the strategy is finalized, we move into action execute marketing campaigns across" },
								{ step: "04", title: "Monitoring Support", text: "We continuously monitor they performance metrics, tracking KPIs such as engagement" },
							].map((item, index) => (
								<motion.div
									key={index}
									className="wg-process mb-10"
									initial="hidden"
									animate={inView ? "visible" : "hidden"}
									variants={slideRight}
									transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
								>
									<div className="right">
										<div className="step-number">
											<span>step {item.step}</span>
										</div>
										<Link href="/#" className="name-process font-main-2">
											{item.title}
										</Link>
									</div>
									<p className="text">{item.text}</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
