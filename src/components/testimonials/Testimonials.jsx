import React from "react";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <article className="testimonial">
            <div className="client__avatar">
              {/* <img src={AVTR1} alt="" /> */}
            </div>
            <h5>Jake Anderson</h5>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              libero esse reprehenderit voluptatem non dolore voluptatibus sequi
              repellat cupiditate, ratione commodi, quae voluptas! Officiis vel
              distinctio eaque in et aspernatur?
            </small>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="testimonial">
            <div className="client__avatar">
              {/* <img src={AVTR2} alt="" /> */}
            </div>
            <h5>Jake Anderson</h5>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              libero esse reprehenderit voluptatem non dolore voluptatibus sequi
              repellat cupiditate, ratione commodi, quae voluptas! Officiis vel
              distinctio eaque in et aspernatur?
            </small>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="testimonial">
            <div className="client__avatar">
              {/* <img src={AVTR3} alt="" /> */}
            </div>
            <h5>Jake Anderson</h5>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              libero esse reprehenderit voluptatem non dolore voluptatibus sequi
              repellat cupiditate, ratione commodi, quae voluptas! Officiis vel
              distinctio eaque in et aspernatur?
            </small>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
