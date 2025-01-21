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
        {/* <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/project-1.jpg"
              alt="Image Project"
            />
          </div>
          <div className="details">
            <h4>Image Project</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Website</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Envato</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>3 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>WordPress</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <div className="videocontainer">
              <iframe
                className="youtube-video"
                src="https://www.youtube.com/embed/AqcjdkPMPJA?enablejsapi=1&version=3&playerapiid=ytplayer"
                allowFullScreen=""
              />
            </div>
          </div>
          <div className="details">
            <h4>Youtube Project</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Short Film</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Videohive</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>8 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>After Effects</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
        </SwiperSlide> */}
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
            <h4>기업 소개 웹 사이트 개발 건</h4>
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
            <h4>제휴 마케팅 회사 커뮤니티 하이브리드 앱 개발건</h4>
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
        {/* <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <a
              href="https://themeforest.net"
              target="_blank"
              className="external"
            >
              <img
                className="img-fluid"
                src="assets/portfolio/project-3.jpg"
                alt="External Project"
              />
            </a>
          </div>
          <div className="details">
            <h4>External Link</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Advertising</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Envato</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>1 month</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>Adobe Premiere</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
        </SwiperSlide> */}
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
