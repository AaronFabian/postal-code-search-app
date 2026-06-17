import { SearchHistory } from '@/_classes/SearchHistory';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import CarouselNextBtn from '@/_components/home/CarouselNextBtn';
import CarouselPrevBtn from '@/_components/home/CarouselPrevBtn';

const ITEMS_PER_PAGE = 3;

export default function HistoryGrid({ searchHistories }: { searchHistories: SearchHistory[] }) {
	if (searchHistories.length < 0) return null;

	const pages: SearchHistory[][] = [];

	for (let i = 0; i < searchHistories.length; i += ITEMS_PER_PAGE) {
		pages.push(searchHistories.slice(i, i + ITEMS_PER_PAGE));
	}

	return (
		<div className="history-carousel">
			<CarouselPrevBtn className="carousel-prev" />
			<Swiper
				slidesPerView={1}
				spaceBetween={24}
				pagination={{
					el: '.history-pagination',
					clickable: true,
				}}
				navigation={{
					prevEl: '.carousel-prev',
					nextEl: '.carousel-next',
				}}
				loop={false}
				modules={[Pagination, Navigation]}
				className="history-swiper"
			>
				{pages.map((page, pageIndex) => (
					<SwiperSlide key={pageIndex}>
						<div className="history-grid">
							{page.map((history, historyIndex) => (
								<div className="history-card" key={`${history.zipcode}-${pageIndex}-${historyIndex}`}>
									<div className="postal-row">郵便番号: {history.zipcode}</div>

									<hr className="divider" />

									{history.addresses.map((address, addressIndex) => (
										<React.Fragment key={addressIndex}>
											<div className="info-row">
												<span className="label">住所:</span>

												<span className="value">
													{address.address1} {address.address2} {address.address3}
												</span>
											</div>

											<div className="info-row">
												<span className="label">カナ:</span>

												<span className="value">
													{address.kana1} {address.kana2} {address.kana3}
												</span>
											</div>

											{addressIndex !== history.addresses.length - 1 && <hr className="divider" />}
										</React.Fragment>
									))}
								</div>
							))}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<CarouselNextBtn className="carousel-next" />

			<div className="history-pagination" />
		</div>
	);

	/*
	return (
		<>
			<div className="history-grid">
				{searchHistories.map(history => (
					<div className="history-card" key={crypto.randomUUID()}>
						<div className="postal-row">郵便番号: {history.zipcode}</div>
						<hr className="divider" />
						{history.addresses.map((address, index) => (
							<React.Fragment key={index}>
								<div className="info-row">
									<span className="label">住所:</span>
									<span className="value">
										{address.address1} {address.address2} {address.address3}
									</span>
								</div>
								<div className="info-row">
									<span className="label">カナ:</span>
									<span className="value">
										{address.kana1} {address.kana2} {address.kana3}
									</span>
								</div>
								{index !== history.addresses.length - 1 && <hr className="divider" />}
							</React.Fragment>
						))}
					</div>
				))}
			</div>

			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="history-grid"
			>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
				<SwiperSlide>Slide 8</SwiperSlide>
				<SwiperSlide>Slide 9</SwiperSlide>
			</Swiper>
		</>
	);
  */
}
