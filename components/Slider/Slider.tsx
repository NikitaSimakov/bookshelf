"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowDown } from "react-icons/io";
import supportList from "./supportList";
import "./support.scss";

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
          375: { slidesPerView: 6, slidesPerGroup: 1, rewind: true },
        }}
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

export default VerticalSlider;
