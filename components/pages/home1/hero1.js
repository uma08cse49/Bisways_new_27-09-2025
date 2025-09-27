'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { TypeAnimation } from "react-type-animation"
export default function Hero1() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<div className="page-title-home-1">
				<div className="mb-50">
					<div className="tf-container w-1780">
						<div className="row">
							<div className="col-lg-6">
								<div className="content">
									<p className="s-sub-title text-white ">
										<i className="icon-angles-right moveLeftToRight" />
										consulting agency
									</p>
									<p className="s-title text-white-yellow mb-70 text-fs-70">
										Modern Business <br />
										Consulting
										<span className="animationtext clip">
											<TypeAnimation
												sequence={[
													' Service',
													1000,
													' Firm',
													1000,
													' Office',
													1000,
												]}
												wrapper="span"
												speed={50}
												style={{ display: 'inline-block', marginLeft: "15px" }}
												repeat={Infinity}
												className="cd-words-wrapper ms-3">
											</TypeAnimation>
										</span>
									</p>
									<span className="line mb-75" />
									<p className="text font-main-2 fw-5 mb-40">
										We provide expert guidance across various business functions, <br /> including
										strategy
										development, process organizational.
									</p>
									<div className="bot">
										<Link href="/our-service" className="tf-btn">
											Explore Services
											<i className="icon-chevron-right" />
										</Link>
										<div className="video-wrap">
											<a onClick={() => setOpen(true)} className="popup-youtube fs-14 fw-7">
												<span className="icon style-circle">
													<span className="bg" />
													<span className="wave-3" />
													<i className="icon-play fs-12" />
												</span>
												Watch Video
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="image-wrap">
									<div className="image">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/page-title-home-1.jpg" data-src="/images/section/page-title-home-1.jpg" alt="" className="lazyload" />
									</div>
									<div className="wg-curve-text tf-animate__box animate__slow">
										<div className="icon">
											<i className="flaticon-rocket" />
										</div>
										<div className="text-rotate">
											<div className="circle">
												<div id="circularText" className="text" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tf-marquee slider-saylo">
					<div className="wrap-marquee">
						<div className="marquee-item">
							<p className="font-main-2 text">
								Saylo Consulting
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Saylo Consulting
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Saylo Consulting
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Saylo Consulting
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Saylo Consulting
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Saylo Consulting
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Saylo Consulting
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Saylo Consulting
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Saylo Consulting
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Saylo Consulting
							</p>
						</div>
					</div>
				</div>
			</div>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />

		</>
	)
}
