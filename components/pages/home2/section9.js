'use client';
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

export default function Section9() {
	const syncTransition = { duration: 0.3, ease: 'easeInOut' }

	const circleVariants = {
		rest: { x: 0, transition: syncTransition },
		hover: { x: 7, transition: syncTransition },
	}

	const arrowVariants = {
		rest: { rotate: -45, transition: syncTransition },
		hover: { rotate: 0, transition: syncTransition },
	}

	// 👇 Add intersection observer for text animations
	const { ref, inView } = useInView({
		triggerOnce: false, // re-trigger every time you scroll here
		threshold: 0.2,
	});

	return (
		<section className="s-partner-2 tf-spacing-3" ref={ref} style={{marginTop:"150px"}}>
			<div className="tf-container">
				<div className="row">
					<div className="col-lg-4">
						<div className="content">
							{/* Sub-title animation */}
							<motion.p
								className="s-sub-title"
								initial={{ x: -80, opacity: 0 }}
								animate={inView ? { x: 0, opacity: 1 } : { x: -80, opacity: 0 }}
								transition={{ duration: 0.6, ease: "easeOut" }}
							>
								<i className="icon-angles-right moveLeftToRight" />
								our partners
							</motion.p>

							{/* Title animation */}
							<motion.p
								className="s-title text-main-green-3 mb-40 text-anime-wave"
								initial={{ x: 80, opacity: 0 }}
								animate={inView ? { x: 0, opacity: 1 } : { x: 80, opacity: 0 }}
								transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
							>
								Global Trusted
								<span style={{ color: "#e6ac41" }}> Partners </span>
							</motion.p>

							{/* Button + Arrow stays same */}
							<Link href="/our-service">
								<div
									style={{
										display: 'flex',
										gap: '36px',
										flexWrap: 'wrap',
										justifyContent: 'center',
										marginTop: '50px',
									}}
								>
									{['Get Started'].map((label, idx) => (
										<motion.div
											key={idx}
											initial="rest"
											whileHover="hover"
											animate="rest"
											style={{
												display: 'flex',
												alignItems: 'center',
												cursor: 'pointer',
											}}
										>
											<button
												style={{
													padding: '16px 36px',
													borderRadius: '50px',
													background: '#e6ac41',
													color: '#ffffff',
													fontSize: '18px',
													fontWeight: '600',
													cursor: 'pointer',
												}}
											>
												{label}
											</button>
											<motion.div
												variants={circleVariants}
												transition={syncTransition}
												style={{
													width: '50px',
													height: '50px',
													borderRadius: '50%',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													marginLeft: 0,
													background: '#e6ac41',
													pointerEvents: 'auto',
												}}
											>
												<motion.svg
													xmlns="http://www.w3.org/2000/svg"
													width="22"
													height="22"
													viewBox="0 0 24 24"
													fill="none"
													stroke="white"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													variants={arrowVariants}
													style={{
														transformOrigin: '50% 50%',
														transformBox: 'fill-box',
													}}
												>
													<line x1="5" y1="12" x2="19" y2="12" />
													<polyline points="12 5 19 12 12 19" />
												</motion.svg>
											</motion.div>
										</motion.div>
									))}
								</div>
							</Link>
						</div>
					</div>

					{/* Partner logos (unchanged) */}
					<div className="col-lg-8">
						<div className="wg-partner">
							<Link href="/#"><img className="img1" src="/images/partner/quora.png" alt="Partner" /><img className="img2" src="/images/partner/quora.png" alt="Partner" /></Link>
							<Link href="/#"><img className="img1" src="/images/partner/rakuten.png" alt="Partner" /><img className="img2" src="/images/partner/rakuten.png" alt="Partner" /></Link>
							<Link href="/#"><img className="img1" src="/images/partner/consumer_reports.png" alt="Partner" /><img className="img2" src="/images/partner/consumer_reports.png" alt="Partner" /></Link>
							<Link href="/#"><img className="img1" src="/images/partner/forbes.png" alt="Partner" /><img className="img2" src="/images/partner/forbes.png" alt="Partner" /></Link>
							<Link href="/#"><img className="img1" src="/images/partner/hubspot.png" alt="Partner" /><img className="img2" src="/images/partner/hubspot.png" alt="Partner" /></Link>
							<Link href="/#"><img className="img1" src="/images/partner/roku.png" alt="Partner" /><img className="img2" src="/images/partner/roku.png" alt="Partner" /></Link>
							<Link href="/#"><img className="img1" src="/images/partner/forbes.png" alt="Partner" /><img className="img2" src="/images/partner/forbes.png" alt="Partner" /></Link>
							<Link href="/#"><img className="img1" src="/images/partner/hubspot.png" alt="Partner" /><img className="img2" src="/images/partner/hubspot.png" alt="Partner" /></Link>
							<Link href="/#"><img className="img1" src="/images/partner/roku.png" alt="Partner" /><img className="img2" src="/images/partner/roku.png" alt="Partner" /></Link>

						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
