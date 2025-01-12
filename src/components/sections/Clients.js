import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Clients = () => {
  return (
    <section className="clients">
      <div className="clients-container animated-layer fade-in-right-animation fadeInUp wow">
        <h3>My Clients</h3>
        <Swiper
          {...salimovSlider.clients}
          className="swiper swiper-clients fadeInUp wow"
        >
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div style={{ backgroundColor: "white" }}>
              <img
                src="/logo/ktalpha.png"
                alt="client"
                style={{ width: "auto", height: "130px" }}
              />
            </div>
            <div style={{ backgroundColor: "white" }}>
              <img
                src="/logo/doosan.png"
                alt="client"
                style={{ width: "auto", height: "120px" }}

              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div style={{ backgroundColor: "white" }}>
              <img
                src="/logo/kolon.png"
                alt="client"
                style={{ width: "auto", height: "100px" }}
              />
            </div>
            <div style={{ backgroundColor: "white" }}>
              <img
                src="/logo/hankook.png"
                alt="client"
                style={{ width: "auto", height: "150px" }}
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div style={{ backgroundColor: "white" }}>
              <img
                src="/logo/snu.png"
                alt="client"
                style={{ width: "auto", height: "100px" }}
              />
            </div>
            <div style={{ backgroundColor: "white" }}>
              <img
                src="/logo/jgd.png"
                alt="client"
                style={{ width: "auto", height: "150px" }}
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div style={{ backgroundColor: "white" }}>
              <img
                src="/logo/lg.png"
                alt="client"
                style={{ width: "auto", height: "80px" }}
              />
            </div>
            <div style={{ backgroundColor: "white" }}>
              <img
                src="/logo/keis.png"
                alt="client"
                style={{ width: "auto", height: "50px" }}
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div style={{ backgroundColor: "white" }}>
              <img
                src="/logo/kist.png"
                alt="client"
                style={{ width: "auto", height: "150px" }}
              />
            </div>
            <div style={{ backgroundColor: "white" }}>
              <img
                src="/logo/samick.png"
                alt="client"
                style={{ width: "auto", height: "150px" }}
              />
            </div>
          </SwiperSlide>
          <div className="swiper-pagination" />
        </Swiper>
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Clients;
