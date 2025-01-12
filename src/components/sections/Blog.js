import Link from "next/link";
const Blog = () => {
  return (
    <section className="blog main-section flex-column-mobile" id="blog">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Latest Posts
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* LATEST POSTS STARTS */}
      <div className="latestposts flex-column-mobile">
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post" legacyBehavior>
            <a>
              <span className="img-holder">
                <img
                  src="/posts/chatbot.jpg"
                  alt=""
                  style={{ width: "300px", height: "auto", objectFit: "cover" }}
                />
              </span>
              <div className="content">
                <span className="category">개발분야1</span>
                <span className="title">
                  챗봇 개발
                </span>
                <p>
                  각종 원본 데이타를 기반으로 하여 자동화된 챗봇이 상담원의 역할 대신도록 개발해드립니다.
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>9 Apr 2023</span>
                  </div>
                  {/* <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>17 comments</span>
                  </div> */}
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post" legacyBehavior>
            <a>
              <span className="img-holder">
                <img
                  src="/posts/store.jpg"
                  alt=""
                  style={{ width: "300px", height: "auto", objectFit: "cover" }}
                />
              </span>
              <div className="content">
                <span className="category">개발분야2</span>
                <span className="title">
                  상품 정보 자동화 서비스
                </span>
                <p>
                  상품 정보 자동화 서비스를 통해 상품 가격/재고 등을 자동으로 업데이트하여 쇼핑몰의 효율성을 향상시킵니다.
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>21 Oct 2024</span>
                  </div>
                  {/* <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>34 comments</span>
                  </div> */}
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post" legacyBehavior>
            <a>
              <span className="img-holder">
                <img
                  src="/posts/web.jpg"
                  alt=""
                  style={{ width: "300px", height: "auto", objectFit: "cover" }}
                />
              </span>
              <div className="content">
                <span className="category">개발분야3</span>
                <span className="title">
                  웹 개발
                </span>
                <p>
                  Next, Supabase 등 효과적인 프레임워크를 사용하고 빠르고 가볍게 MVP 모델을 만듭니다.
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>1 Jan 2025</span>
                  </div>
                  {/* <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>10 comments</span>
                  </div> */}
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
      </div>
      {/* LATEST POSTS ENDS */}
    </section>
  );
};
export default Blog;
