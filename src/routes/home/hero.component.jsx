import React from "react";
import { Autoplay, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import Button from "../../components/button.component";
import Slides from "./slides";

export default function Hero() {
	return (
		<section className="hero-section">
			<Swiper
				spaceBetween={20}
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
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
				modules={[Autoplay, Pagination]}
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
							<img
								className="hero-img"
								src={slide.image.desktop}
								alt={slide.name}
							/>
						</picture>
						<div className="slider-hero-info">
							<h1 className="heading-l hero-title">{slide.title}</h1>
							<p className="hero-description">{slide.text}</p>
							<Button btn={`See Our Portfolio `} linkedTo={"/portfolio"} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
