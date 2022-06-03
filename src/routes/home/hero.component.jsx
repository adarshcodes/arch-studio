import React from "react";
import { Autoplay, Pagination, EffectCreative } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

import Button from "../../components/button.component";
import Arrow from "../../assets/images/icons/icon-arrow.svg";
import Slides from "./slides";

export default function Hero() {
	return (
		<section className="hero-section">
			<Swiper
				spaceBetween={0}
				slidesPerView={1}
				loop={true}
				// autoplay={{
				// 	delay: 1500,
				// 	disableOnInteraction: false,
				// }}
				creativeEffect={{
					prev: {
						shadow: true,
						translate: [0, 0, -400],
					},
					next: {
						translate: ["100%", 0, 0],
					},
				}}
				pagination={{
					clickable: true,
					type: "bullets",
					renderBullet: function (index, className) {
						return (
							'<span class="' + className + '">0' + (index + 1) + "</span>"
						);
					},
				}}
				modules={[EffectCreative, Autoplay, Pagination]}
				className="mySwiper"
			>
				{Slides.map((slide) => (
					<SwiperSlide key={slide.name}>
						<picture>
							<source
								srcSet={slide.image.mobile}
								media="(max-width: 450px)"
								type="image/jpeg"
							/>
							<source
								srcSet={slide.image.tablet}
								media="(max-width: 850px)"
								type="image/jpeg"
							/>
							<img src={slide.image.desktop} alt={slide.name} />
						</picture>
						<div className="slider-hero-info">
							<h1>{slide.title}</h1>
							<p>{slide.text}</p>
						</div>
						<Button
							btn={`See Our Portfolio `}
							arrow={<img src={Arrow} alt="arrow" className="arrow-icon" />}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
