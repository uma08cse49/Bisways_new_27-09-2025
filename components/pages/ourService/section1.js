"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Section1() {
	const { ref, inView } = useInView({
		triggerOnce: false, // 👈 replay every scroll
		threshold: 0.2,
	})

	// Left slide
	const slideLeft = {
		hidden: { opacity: 0, x: -80 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
	}

	// Bottom slide
	const slideUp = {
		hidden: { opacity: 0, y: 60 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
	}

	return (
		<section className="s-we-do tf-spacing-3" ref={ref}>
			<div className="tf-container">
				<div className="row">
					<div className="col-lg-12">
						<div className="heading mb-70">
							{/* Subtitle */}
							<motion.p
								className="s-sub-title mb-15 justify-center"
								style={{ color: "#0b1972", display: "flex", alignItems: "center", gap: "6px" }}
								initial="hidden"
								animate={inView ? "visible" : "hidden"}
								variants={slideLeft}
							>
								<i className="icon-angles-right moveLeftToRight" style={{ color: "#0b1972" }} />
								what we do
							</motion.p>

							{/* Main Title */}
							<motion.p
								className="s-title text-center text-anime-style-2"
								style={{ color: "#0b1972" }}
								initial="hidden"
								animate={inView ? "visible" : "hidden"}
								variants={slideLeft}
								transition={{ delay: 0.2 }}
							>
								Empowering Businesses with Expert <br />
								Business <span style={{ color: "#e6ac41" }}>Consulting</span>
							</motion.p>
						</div>

						{/* Feature Boxes */}
						<div className="feature-group overflow-hidden">
							{[
								{
									icon: "flaticon-workflow",
									title: "Customized Strategic Planning & Ideas",
									text: "We develop tailored strategies that align with your business addressing unique challenges leveraging.",
								},
								{
									icon: "flaticon-workflow",
									title: "Customized Strategic Planning & Ideas",
									text: "We develop tailored strategies that align with your business addressing unique challenges leveraging.",
								},
								{
									icon: "flaticon-team",
									title: "Operational Efficiency Optimization",
									text: "We analyze and refine business the processes to improve productivity to reduce costs, and enhance overall.",
								},
							].map((item, i) => (
								<motion.div
									key={i}
									className="box-icon style-8"
									initial="hidden"
									animate={inView ? "visible" : "hidden"}
									variants={slideUp}
									transition={{ delay: 0.4 + i * 0.2 }}
								>
									<div className="icon">
										<i className={item.icon} />
									</div>
									<Link href="/service-details" className="title">
										{item.title}
									</Link>
									<span className="line mb-30" />
									<p className="text" style={{ backgroundColor: "#e6ac41",padding:"20px",borderRadius:"20px" }}>{item.text}</p>
									<div className="image">
										<Link href="/service-details">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "100%" }}
												src="/images/section/feature.jpg"
												alt=""
												className="lazyload"
											/>
										</Link>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
