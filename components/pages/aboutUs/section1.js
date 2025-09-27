'use client'
import { motion } from "framer-motion"
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'

export default function Section1() {
	return (
		<section className="s-about tf-spacing-7 relative overflow-hidden" style={{ backgroundColor: "#0b1972",borderRadius:"0px 0px 30px 30px" }}>
			{/* Gradient overlay at the top */}
			<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/70 to-transparent pointer-events-none z-10"></div>

			<div className="tf-container relative z-20">
				<div className="row">
					<div className="col-lg-7">
						<div className="heading">
							<motion.p
								initial={{ x: -80, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								viewport={{ once: false, amount: 0.3 }}
								transition={{ duration: 0.8, ease: "easeOut" }}
								className="s-sub-title text-white mb-16"
							>
								<i className="icon-angles-right moveLeftToRight" />
								about company
							</motion.p>

							<motion.p
								initial={{ x: 80, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								viewport={{ once: false, amount: 0.3 }}
								transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
								className="s-title text-white mb-70 text-anime-wave"
							>
								We Work For Building a Brighter Future Together <br />
								and
								<span style={{color:"#e6ac41"}}> Grow Business</span>
							</motion.p>

							<div className="image">
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									src="/images/section/home-5.jpg"
									alt=""
									className="lazyload"
								/>
							</div>
						</div>
					</div>

					<div className="col-lg-5">
						<div className="content-right">
							<div className="wg-counter style-4 pt-5">
								<div className="odometer style-4"><CounterUp count={10} /></div>
								<span className="sub-odo">+</span>
							</div>
							<p className="sub-counter text-white font-main-2 fw-5 fs-20 mb-70 mt-5">
								Years Of Experience In Business Consulting
							</p>
							<div className="image mb-30 tf-hover">
								<div className="hover-1">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/section/home-4.jpg"
										alt=""
										className="lazyload tf-animate-2"
									/>
								</div>
							</div>
							<p className="text text-white mb-40">
								Business consulting services are designed help organizations navigate challenges,
								streamline operations a achieve long-term success we work closely with clients to
								identify areas.
							</p>
							<ul className="list mb-40">
								<li>
									<div className="icon"><i className="icon-check-2" /></div>
									<p>Customized Solutions</p>
								</li>
								<li>
									<div className="icon"><i className="icon-check-2" /></div>
									<p>Expertise &amp; Experience</p>
								</li>
							</ul>
							<Link href="/our-service" className="tf-btn text-anime-style-1">
								Get Started
								<i className="icon-chevron-right" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
