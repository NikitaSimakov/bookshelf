"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { IoIosArrowDown } from "react-icons/io";
import supportList from "./supportList";

const VerticalSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<any>(null);
  const handleNext = () => {
    setCurrentSlide(currentSlide + 1);
    sliderRef.current.swiper.slideNext();
  };

  return (
    <>
      <Swiper
        ref={sliderRef}
        className="swiper-container support-list"
        direction="vertical"
        loop={true}
        breakpoints={{
          768: { slidesPerView: 6, slidesPerGroup: 1, rewind: true },
        }}
        slidesPerView={5}
      >
        {supportList.map(({ id, name, width, height, src, link }, index) => (
          <SwiperSlide className="support-item" key={id}>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              className="support-link"
              href={link}
            >
              <span>{`0${index + 1}`}</span>
              <Image src={src} alt={name} width={width} height={height} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="support-button-next" onClick={handleNext}>
        <IoIosArrowDown />
      </button>
    </>
  );
};

const Support = () => {
  return (
    <section className="support">
      <div className="support-container">
        <h2 className="support-title">Our partners</h2>

        <VerticalSlider />
      </div>
    </section>
  );
};

export default Support;
