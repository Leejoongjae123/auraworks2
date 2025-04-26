import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              My Portfolio
            </span>
          </span>
        </h3>
      </div>
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        
        <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <Swiper
              {...salimovSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/sontop/sontop1.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/sontop/sontop2.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/sontop/sontop3.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/sontop/sontop4.jpg" title="img" />
              </SwiperSlide>
              

              <div className="swiper-pagination" />
            </Swiper>
          </div>
          <div className="details">
            <h4>손해사정사 중개 플랫폼 "손탑"</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> 프로젝트 :
                  </span>
                  <span>반응형 웹 사이트</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> 클라이언트 :
                  </span>
                  <span>개인인</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> 기간 :
                  </span>
                  <span>2개월</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> 프레임워크 :
                  </span>
                  <span>Next JS,Supabase</span>
                </li>
              </ul>
            </div>
            {/* <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <Swiper
              {...salimovSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/und/und1.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/und/und2.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/und/und3.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/und/und4.jpg" title="img" />
              </SwiperSlide>
              

              <div className="swiper-pagination" />
            </Swiper>
          </div>
          <div className="details">
            <h4>항공 유학원 "UND 글로벌"</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> 프로젝트 :
                  </span>
                  <span>반응형 웹 사이트</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> 클라이언트 :
                  </span>
                  <span>주식회사 유앤디글로벌</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> 기간 :
                  </span>
                  <span>1개월</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> 프레임워크 :
                  </span>
                  <span>Next JS</span>
                </li>
              </ul>
            </div>
            {/* <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <Swiper
              {...salimovSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/exgen/exgen1.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/exgen/exgen2.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/exgen/exgen3.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/exgen/exgen4.jpg" title="img" />
              </SwiperSlide>
              

              <div className="swiper-pagination" />
            </Swiper>
          </div>
          <div className="details">
            <h4>제휴 마케팅 회사 커뮤니티 "공생마케팅"</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> 프로젝트 :
                  </span>
                  <span>반응형 웹앱 + 하이브리드 앱</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> 클라이언트 :
                  </span>
                  <span>주회사 공생마케팅</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> 기간 :
                  </span>
                  <span>2개월</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> 프레임워크 :
                  </span>
                  <span>Next JS,Supabase,Kotlin/Swift</span>
                </li>
              </ul>
            </div>
            {/* <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <Swiper
              {...salimovSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/diabetes/diabetes1.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/diabetes/diabetes2.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/diabetes/diabetes3.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/diabetes/diabetes4.jpg" title="img" />
              </SwiperSlide>
              

              <div className="swiper-pagination" />
            </Swiper>
          </div>
          <div className="details">
            <h4>애견 당뇨병 소변 검사지 분석 앱 개발</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> 프로젝트 :
                  </span>
                  <span>반응형 웹앱 + 하이브리드 앱</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> 클라이언트 :
                  </span>
                  <span>개인</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> 기간 :
                  </span>
                  <span>2개월</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> 프레임워크 :
                  </span>
                  <span>NextJS,Supabase,React Native</span>
                </li>
              </ul>
            </div>
            {/* <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <Swiper
              {...salimovSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/scuber/scuber1.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/scuber/scuber2.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/scuber/scuber3.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/scuber/scuber4.jpg" title="img" />
              </SwiperSlide>
              

              <div className="swiper-pagination" />
            </Swiper>
          </div>
          <div className="details">
            <h4>스쿠버 다이빙 프로그램 예약 관리 플랫폼폼</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> 프로젝트 :
                  </span>
                  <span>반응형 웹앱</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> 클라이언트 :
                  </span>
                  <span>주식회사 디에이치이이</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> 기간 :
                  </span>
                  <span>3개월</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> 프레임워크 :
                  </span>
                  <span>NextJS,Supabase</span>
                </li>
              </ul>
            </div>
            {/* <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a> */}
          </div>
        </SwiperSlide>
        
        <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <Swiper
              {...salimovSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/whatsapp/whatsapp1.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/whatsapp/whatsapp2.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/whatsapp/whatsapp3.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="portfolio/whatsapp/whatsapp4.jpg" title="img" />
              </SwiperSlide>
              

              <div className="swiper-pagination" />
            </Swiper>
          </div>
          <div className="details">
            <h4>물류 정보 질의응답 왓츠앱 챗봇 "선일챗봇"</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> 프로젝트 :
                  </span>
                  <span>왓츠앱 챗봇봇</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> 클라이언트 :
                  </span>
                  <span>주식회사 선일</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> 기간 :
                  </span>
                  <span>1개월</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> 프레임워크 :
                  </span>
                  <span>Twilio,FastAPI, Supabase</span>
                </li>
              </ul>
            </div>
            {/* <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a> */}
          </div>
        </SwiperSlide>
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Portfolio;
