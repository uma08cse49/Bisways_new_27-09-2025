"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Section1() {
	// first section
	const { ref: ref1, inView: inView1 } = useInView({
		triggerOnce: false,
		threshold: 0.2,
	})

	// second section
	const { ref: ref2, inView: inView2 } = useInView({
		triggerOnce: false,
		threshold: 0.2,
	})

	// animation variants
	const leftSlide = {
		hidden: { x: -80, opacity: 0 },
		visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
	}

	const rightSlide = {
		hidden: { x: 80, opacity: 0 },
		visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
	}

	return (
		<section className="s-why-choose-4 tf-spacing-3">
			{/* FIRST ROW */}
			<div className="content-wrap tf-spacing-3">
				<div className="content-left" ref={ref1}>
					<motion.p
						className="s-sub-title mb-15"
						initial="hidden"
						animate={inView1 ? "visible" : "hidden"}
						variants={leftSlide}
						style={{ color: "#0b1972" }}
					>
						<i className="icon-angles-right moveLeftToRight" style={{ color: "#0b1972" }}/>
						Why choose us
					</motion.p>

					<motion.p
						className="s-title mb-40 text-anime-wave"
						initial="hidden"
						animate={inView1 ? "visible" : "hidden"}
						variants={leftSlide}
						style={{ color: "#0b1972" }}
					>
						Unmatched Expertise for Your <span style={{ color: "#e6ac41" }}>Business Success</span>
					</motion.p>

					<motion.p
						className="text"
						initial="hidden"
						animate={inView1 ? "visible" : "hidden"}
						variants={leftSlide}
					>
						We are committed to delivering exceptional service and personalized strategies
						that help our clients succeed in a rapidly evolving marketplace. Through
						collaboration, integrity, and a relentless focus on results, we aim to be a
						trusted partner
					</motion.p>

					{/* Rest stays static */}
					<ul className="benefit-list style-2">
						<li>
							<div className="icon">
								<i className="icon-check-2" />
							</div>
							<p>Experience, Expertise, Results to Choose Us</p>
						</li>
						<li>
							<div className="icon">
								<i className="icon-check-2" />
							</div>
							<p>Smart Choice for Business Consulting Excellence</p>
						</li>
					</ul>
					<Link href="/service-details" className="tf-btn style-3 text-anime-style-1">
						Explore Our Services <i className="icon-chevron-right" />
					</Link>
				</div>

				<div className="image-right">
					<div className="image">
						<Image
							width="0"
							height="0"
							sizes="100vw"
							style={{ width: "100%", height: "auto" }}
							src="/images/section/home-7.jpg"
							alt=""
							className="lazyload"
						/>
					</div>
				</div>
			</div>

			{/* SECOND ROW */}
			<div className="content-wrap wrap-2">
				<div className="image-left relative">
					<div className="image">
						<Image
							width="0"
							height="0"
							sizes="100vw"
							style={{ width: "100%", height: "auto" }}
							src="/images/section/home-3.jpg"
							alt=""
							className="lazyload"
						/>
					</div>
				</div>

				<div className="content-right" ref={ref2}>
					<motion.p
						className="s-title text-anime-wave"
						initial="hidden"
						animate={inView2 ? "visible" : "hidden"}
						variants={rightSlide}
						style={{ color: "#0b1972" }}
					>
						Smart Choice for Business Consulting <span style={{ color: "#e6ac41" }}>Excellence</span>
					</motion.p>

					{/* List stays static */}
					<ul className="list">
						<li className="wow fadeInUp" data-wow-delay="0s">
							<div className="number">
								<p>1</p>
							</div>
							<div>
								<Link href="/#" className="title">
									Customized Solutions
								</Link>
								<p>
									We provide tailored strategies that address the unique challenges and goals of each
									client, ensuring personalized approaches
								</p>
							</div>
						</li>
						<li className="wow fadeInUp" data-wow-delay="0s">
							<div className="number">
								<p>2</p>
							</div>
							<div>
								<Link href="/#" className="title">
									Data-Driven Approach
								</Link>
								<p>
									We leverage data analytics and market research to create actionable strategies,
									helping businesses make informed, evidence-based
								</p>
							</div>
						</li>
						<li className="wow fadeInUp" data-wow-delay="0s">
							<div className="number">
								<p>3</p>
							</div>
							<div>
								<Link href="/#" className="title">
									Sustainable Results
								</Link>
								<p>
									We focus on long-term success by developing strategies that not only solve
									immediate challenges but also position businesses
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}
