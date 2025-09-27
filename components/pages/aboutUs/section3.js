'use client'
import { sliderTeam } from "@/utils/swiperOptions"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect } from "react"

export default function Section3() {
	useEffect(() => {
		const elements = document.querySelectorAll(".slide-left, .slide-right")

		if (!elements.length) return

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("active-animate")
					} else {
						// reset when leaving so it can trigger again
						entry.target.classList.remove("active-animate")
					}
				})
			},
			{
				root: null,
				threshold: 0.2,
			}
		)

		elements.forEach((el) => observer.observe(el))

		return () => {
			elements.forEach((el) => observer.unobserve(el))
		}
	}, [])

	return (
		<>
			<section className="s-team">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="flex justify-space-between item-center mb-70">
								{/* LEFT SIDE - Slide in from left */}
								<div className="content slide-left">
									<p className="s-sub-title" style={{ color: "#0b1972" }}>
										<i className="icon-angles-right moveLeftToRight" />
										Meet our team
									</p>
									<p
										className="s-title letter-space-0 text-anime-wave"
										style={{ color: "#0b1972" }}
									>
										Expert Team <span style={{ color: "#e6ac41" }}> Member </span>
									</p>
								</div>

								{/* RIGHT SIDE - Slide in from right */}
								<Link
									href="/team-member"
									className="tf-btn style-3 text-anime-style-1 slide-right"
								>
									Explore All Member
									<i className="icon-chevron-right" />
								</Link>
							</div>
						</div>
					</div>
				</div>

				<Swiper {...sliderTeam} className="swiper-container slider-team">
					<div className="swiper-wrapper">
						{/* TEAM MEMBER 1 */}
						<SwiperSlide>
							<div
								className="card-member  tf-hover"
								style={{ backgroundColor: "#0b1972" }}
							>
								<div className="image hover-14 hover-1">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" ,maxHeight:"540.94px"}}
										src="/images/section/home-1.jpg"
										alt=""
										className="lazyload"
									/>
								</div>
								<div className="content">
									<Link href="/team-details" className="name">
										Daniel L. Braddock
									</Link>
									<p className="duty">Business Consultant</p>
									<ul className="social-list style-5 style-4">
										<li><Link href="/#"><i className="icon-facebook" /></Link></li>
										<li><Link href="/#"><i className="icon-twitter" /></Link></li>
										<li><Link href="/#"><i className="icon-linkedin" /></Link></li>
										<li><Link href="/#"><i className="icon-youtube" /></Link></li>
									</ul>
								</div>
							</div>
						</SwiperSlide>

						{/* TEAM MEMBER 2 */}
						<SwiperSlide>
							<div className="card-member tf-hover">
								<div className="image hover-14 hover-1">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/section/home-1.jpg"
										alt=""
										className="lazyload"
									/>
								</div>
								<div className="content">
									<Link href="/team-details" className="name">
										Michael B. Reader
									</Link>
									<p className="duty">Business Consultant</p>
									<ul className="social-list style-5 style-4">
										<li><Link href="/#"><i className="icon-facebook" /></Link></li>
										<li><Link href="/#"><i className="icon-twitter" /></Link></li>
										<li><Link href="/#"><i className="icon-linkedin" /></Link></li>
										<li><Link href="/#"><i className="icon-youtube" /></Link></li>
									</ul>
								</div>
							</div>
						</SwiperSlide>

						{/* TEAM MEMBER 3 */}
						<SwiperSlide>
							<div className="card-member tf-hover">
								<div className="image hover-14 hover-1">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/section/home-1.jpg"
										alt=""
										className="lazyload"
									/>
								</div>
								<div className="content">
									<Link href="/team-details" className="name">
										Robert M. Carlson
									</Link>
									<p className="duty">Business Consultant</p>
									<ul className="social-list style-5 style-4">
										<li><Link href="/#"><i className="icon-facebook" /></Link></li>
										<li><Link href="/#"><i className="icon-twitter" /></Link></li>
										<li><Link href="/#"><i className="icon-linkedin" /></Link></li>
										<li><Link href="/#"><i className="icon-youtube" /></Link></li>
									</ul>
								</div>
							</div>
						</SwiperSlide>

						{/* TEAM MEMBER 4 */}
						<SwiperSlide>
							<div className="card-member last tf-hover">
								<div className="image hover-14 hover-1">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/section/home-1.jpg"
										alt=""
										className="lazyload"
									/>
								</div>
								<div className="content">
									<Link href="/team-details" className="name">
										Jonathon D. Foutch
									</Link>
									<p className="duty">Business Consultant</p>
									<ul className="social-list style-5 style-4">
										<li><Link href="/#"><i className="icon-facebook" /></Link></li>
										<li><Link href="/#"><i className="icon-twitter" /></Link></li>
										<li><Link href="/#"><i className="icon-linkedin" /></Link></li>
										<li><Link href="/#"><i className="icon-youtube" /></Link></li>
									</ul>
								</div>
							</div>
						</SwiperSlide>
					</div>
					<div className="tf-overlay" />
				</Swiper>
			</section>

			{/* Inline animation styles */}
			<style jsx>{`
				.slide-left,
				.slide-right {
					opacity: 0;
					transition: all 0.8s ease;
				}

				.slide-left {
					transform: translateX(-80px);
				}

				.slide-right {
					transform: translateX(80px);
				}

				.slide-left.active-animate,
				.slide-right.active-animate {
					opacity: 1;
					transform: translateX(0);
				}
			`}</style>
		</>
	)
}
