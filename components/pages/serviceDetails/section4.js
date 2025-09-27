'use client'
import { sliderTestimonial2 } from '@/utils/swiperOptions'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
import { motion } from "framer-motion"

export default function Section4() {
	return (
		<>
			<section className="s-process-2 tf-spacing-1">
				<div className="bg-image">
					<div className="rellax" data-rellax-speed="0.5" data-bleed={5}>
						<Image
							width="0"
							height="0"
							sizes="100vw"
							style={{ width: "100%", height: "auto" }}
							src="/images/widget/process.jpg" alt="" />
					</div>
				</div>
				<div className="tf-overlay" />
				<div className="relative z-5">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-5">
								<div className="content">

									{/* 🔥 Subtitle slides in first */}
									<motion.p
										className="s-sub-title text-white mb-15"
										style={{ color: "#0b1972" }}
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.8, ease: "easeOut" }}
										viewport={{ amount: 0.3 }}
									>
										<i className="icon-angles-right moveLeftToRight" />
										working process
									</motion.p>

									{/* 🔥 Title slides in after subtitle */}
									<motion.p
										className="s-title text-white mb-40"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
										viewport={{ amount: 0.3 }}
									>
										What Our Clients
										Say <span style={{ color: "#e6ac41" }}> about Us </span>
									</motion.p>

									{/* 🔥 Paragraph slides in last */}
									<motion.p
										className="text text-white mb-40"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
										viewport={{ amount: 0.3 }}
									>
										Helping businesses develop clear, actionable strategies to achieve long-term
										goals and sustainable growth.
									</motion.p>

									<div className="bot">
										<div className="btn-slider-tesimonial btn-slide btn-prev style-4">
											<i className="icon-arrow-left" />
										</div>
										<div className="btn-slider-tesimonial btn-slide btn-next style-4">
											<i className="icon-arrow-right" />
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-7">
								<Swiper {...sliderTestimonial2} className="swiper-container slider-testimonial-2 overflow-hidden">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="wg-testimonial bg-white">
												<div className="icon style-circle mb-40">
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30">
													"Working with saylo was a game changer for our company their team
													quickly identy
													operations and helped streamline,"
												</p>
												<div className="bot">
													<Link href="/#" className="name fw-7"> Mendoza P. Alfredo </Link>
													<p className="duty">CEO of Tech Solutions</p>
												</div>
											</div>
										</SwiperSlide>

										<SwiperSlide>
											<div className="wg-testimonial bg-white">
												<div className="icon style-circle mb-40">
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30">
													"Working with saylo was a game changer for our company their team
													quickly identy
													operations and helped streamline,"
												</p>
												<div className="bot">
													<Link href="/#" className="name fw-7"> Mendoza P. Alfredo </Link>
													<p className="duty">CEO of Tech Solutions</p>
												</div>
											</div>
										</SwiperSlide>
									</div>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
