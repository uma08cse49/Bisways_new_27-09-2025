'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"

export default function Section3() {
	return (
		<>
			<section className="s-service-4 tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">

								{/* 🔥 Sub-title animation */}
								<motion.p
									className="s-sub-title mb-15 justify-center"
									initial={{ x: -80, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.8, ease: "easeOut" }}
									viewport={{ amount: 0.3 }}
									style={{ color: "#0b1972" }}
								>
									<i className="icon-angles-right moveLeftToRight" style={{ color: "#0b1972" }} />
									consulting services
								</motion.p>

								{/* 🔥 Main title animation */}
								<motion.p
									className="s-title text-center text-anime-wave"
									initial={{ y: 50, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ duration: 1.0, ease: "easeOut" }}
									viewport={{ amount: 0.3 }}
									style={{ color: "#0b1972" }}
								>
									The Quality Consulting Service to <br />
									grow your business <span style={{ color: "#e6ac41" }}> and sales </span>
								</motion.p>

							</div>

							<div className="grid-layout-3">

								{/* 🔥 Top Left */}
								<motion.div
									className="card-service-2 tf-hover"
									initial={{ x: -100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.8, ease: "easeOut" }}
									viewport={{ amount: 0.3 }}
									style={{ backgroundColor: "#0b1972" }}
								>
									<div className="image hover-1 hover-14">
										<Image src="/images/widget/card-service-5.jpg" alt="" width={0} height={0} sizes="100vw"
											style={{ width: "100%", height: "auto" }} />
									</div>
									<div className="content text-white">
										<div className="icon"><i className="flaticon-data-management" style={{ color: "white" }} /></div>
										<Link href="/service-details" className="title fw-7" style={{ color: "white" }}>Management Consulting</Link>
										<p className="text text-white">Saylo our Management Consulting services businesses the unlock potential.</p>
										<Link href="/service-details" className="tf-btn-readmore style-3 text-white">Read More <i className="icon-chevron-right" /></Link>
									</div>
								</motion.div>

								{/* 🔥 Top Middle */}
								<motion.div
									className="card-service-2 tf-hover"
									initial={{ y: -100, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.8, ease: "easeOut" }}
									viewport={{ amount: 0.3 }}
									style={{ backgroundColor: "#0b1972" }}
								>
									<div className="image hover-1 hover-14">
										<Image src="/images/widget/card-service-6.jpg" alt="" width={0} height={0} sizes="100vw"
											style={{ width: "100%", height: "auto" }} />
									</div>
									<div className="content text-white">
										<div className="icon"><i className="flaticon-human-resources" style={{ color: "white" }} /></div>
										<Link href="/service-details" className="title fw-7" style={{ color: "white" }}>Resources Consulting</Link>
										<p className="text text-white">Our resources consulting services designed to optimize the organizations manage</p>
										<Link href="/service-details" className="tf-btn-readmore style-3 text-white">Read More <i className="icon-chevron-right" /></Link>
									</div>
								</motion.div>

								{/* 🔥 Top Right */}
								<motion.div
									className="card-service-2 tf-hover"
									initial={{ x: 100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.8, ease: "easeOut" }}
									viewport={{ amount: 0.3 }}
									style={{ backgroundColor: "#0b1972" }}
								>
									<div className="image hover-1 hover-14">
										<Image src="/images/widget/card-service-7.jpg" alt="" width={0} height={0} sizes="100vw"
											style={{ width: "100%", height: "auto" }} />
									</div>
									<div className="content text-white">
										<div className="icon"><i className="flaticon-target-1" style={{ color: "white" }} /></div>
										<Link href="/service-details" className="title fw-7" style={{ color: "white" }}>Marketing Consulting</Link>
										<p className="text text-white">We analyze your current marketing efforts, identify areas for improvement goals</p>
										<Link href="/service-details" className="tf-btn-readmore style-3 text-white">Read More <i className="icon-chevron-right" /></Link>
									</div>
								</motion.div>

								

								{/* 🔥 Bottom Left */}
								<motion.div
									className="card-service-2 tf-hover"
									initial={{ x: -100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.8, ease: "easeOut" }}
									viewport={{ amount: 0.3 }}
									style={{ backgroundColor: "#0b1972" }}
								>
									<div className="image hover-1 hover-14">
										<Image src="/images/widget/card-service-8.jpg" alt="" width={0} height={0} sizes="100vw"
											style={{ width: "100%", height: "auto" }} />
									</div>
									<div className="content text-white">
										<div className="icon"><i className="flaticon-return-of-investment" style={{ color: "white" }} /></div>
										<Link href="/service-details" className="title fw-7" style={{ color: "white" }}>Financial Consulting</Link>
										<p className="text text-white">Provides expert financial planning, budget risk management and investment.</p>
										<Link href="/service-details" className="tf-btn-readmore style-3 text-white">Read More <i className="icon-chevron-right" /></Link>
									</div>
								</motion.div>

								{/* 🔥 Bottom Middle */}
								<motion.div
									className="card-service-2 tf-hover"
									initial={{ y: 100, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.8, ease: "easeOut" }}
									viewport={{ amount: 0.3 }}
									style={{ backgroundColor: "#0b1972" }}
								>
									<div className="image hover-1 hover-14">
										<Image src="/images/widget/card-service-9.jpg" alt="" width={0} height={0} sizes="100vw"
											style={{ width: "100%", height: "auto" }} />
									</div>
									<div className="content text-white">
										<div className="icon"><i className="flaticon-viral-marketing" style={{ color: "white" }} /></div>
										<Link href="/service-details" className="title fw-7" style={{ color: "white" }}>Digital Transformation</Link>
										<p className="text text-white">Guiding businesses through the adoption of new technologies and digital tools.</p>
										<Link href="/service-details" className="tf-btn-readmore style-3 text-white">Read More <i className="icon-chevron-right" /></Link>
									</div>
								</motion.div>

								{/* 🔥 Bottom Right */}
								<motion.div
									className="card-service-2 tf-hover"
									initial={{ x: 100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.8, ease: "easeOut" }}
									viewport={{ amount: 0.3 }}
									style={{ backgroundColor: "#0b1972" }}
								>
									<div className="image hover-1 hover-14">
										<Image src="/images/widget/card-service-10.jpg" alt="" width={0} height={0} sizes="100vw"
											style={{ width: "100%", height: "auto" }} />
									</div>
									<div className="content text-white">
										<div className="icon"><i className="flaticon-solution" style={{ color: "white" }} /></div>
										<Link href="/service-details" className="title fw-7" style={{ color: "white" }}>Operations Management</Link>
										<p className="text text-white">Analyzing and optimizing internal processes to improve efficiency, reduce costs.</p>
										<Link href="/service-details" className="tf-btn-readmore style-3 text-white">Read More <i className="icon-chevron-right" /></Link>
									</div>
								</motion.div>

							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
