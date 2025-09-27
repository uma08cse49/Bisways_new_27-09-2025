'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from "react"

export default function Section2() {
	useEffect(() => {
		const elements = document.querySelectorAll(".slide-top, .slide-bottom")

		if (!elements.length) return

		const isSmallScreen = window.matchMedia("(max-width: 550px)").matches

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
				threshold: isSmallScreen ? 0.2 : 0.3,
			}
		)

		elements.forEach((el) => observer.observe(el))

		return () => {
			elements.forEach((el) => observer.unobserve(el))
		}
	}, [])

	return (
		<>
			<section className="s-why-choose-3 tf-spacing-8">
				<div className="tf-container">
					<div className="row">
						{/* LEFT SIDE (slide from top) */}
						<div className="col-lg-7 slide-top" >
							<div className="wg-company" style={{ backgroundColor: "#e6ac41"}}>
								<ul className="list">
									<li >
										<div className="title">
											<div className="icon">
												<i className="flaticon-rocket" />
											</div>
											<Link href="/#" style={{ color: "#0b1972" }}>Company Mission</Link>
										</div>
										<p className="text">
											Our mission is to empower businesses by providing innovative, data-driven
											solutions that drive growth, enhance efficiency, and create lasting value.
											We are committed to delivering exceptional service and personalized.
										</p>
									</li>
									<li>
										<div className="title">
											<div className="icon">
												<i className="flaticon-market" />
											</div>
											<Link href="/#" style={{ color: "#0b1972" }}>Company Vision &amp; Goals</Link>
										</div>
										<p className="text">
											Our vision is to be global leader delivering transformative business
											solutions that empower organizations to reach their full potential. We
											strive to set the standard for innovation, excellence, and customer success
											by continuously improving.
										</p>
									</li>
								</ul>
							</div>
						</div>

						{/* RIGHT SIDE (slide from bottom) */}
						<div className="col-lg-5 slide-bottom">
							<div className="image tf-hover">
								<div className="hover-1">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto",maxHeight:"500px",objectFit:"cover" }}
										src="/images/section/home-1.jpg"
										alt=""
										className="lazyload"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</section>

			{/* Inline styles */}
			<style jsx>{`
				/* Initial state */
				.slide-top,
				.slide-bottom {
					opacity: 0;
					transition: all 0.8s ease;
				}

				.slide-top {
					transform: translateY(-80px);
				}

				.slide-bottom {
					transform: translateY(80px);
				}

				/* Active animation state */
				.slide-top.active-animate,
				.slide-bottom.active-animate {
					opacity: 1;
					transform: translateY(0);
				}
			`}</style>
		</>
	)
}
