import React from "react";
import classes from "./flickityViewPortSection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Cell from "./carousel-cell/cell";
import Image from "next/image";
import { Navigation } from "swiper/modules";

interface SectionData {
  id: number;
  Image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  h3: string;
}

function FlickityViewPortSection({
  data,
  H2,
}: {
  data: SectionData[];
  H2: string;
}) {
  return (
    <section className={classes.flickityViewSection}>
      <h2>{H2}</h2>
      <button id="leftButton" className={classes.leftButton}>
        <Image width={20} height={20} alt="arrow" src={"/assets/arrow.svg"} />
      </button>
      <button id="rightButton" className={classes.rightButton}>
        <Image width={20} height={20} alt="arrow" src={"/assets/arrow.svg"} />
      </button>
      <div>
        <Swiper
          slidesPerView={"auto"}
          className={classes.mainCarousel}
          modules={[Navigation]}
          navigation={{
            nextEl: "#rightButton",
            prevEl: "#leftButton",
          }}
        >
          {data.map((el) => (
            <SwiperSlide key={el.id} className={classes.carouselCell}>
              <Cell data={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default FlickityViewPortSection;
