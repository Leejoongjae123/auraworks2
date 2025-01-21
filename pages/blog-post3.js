import { Fragment, useEffect } from "react";
import Link from "next/link";
const BlogPost = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");
  }, []);

  return (
    <Fragment>
      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>
      <div className="blog-content">
        <h1>플랫폼(웹/앱) 개발</h1>
        {/* ARTICLE STARTS */}
        <div className="main-post">
          {/* META STARTS */}
          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-calendar" />
              <span>1 Jan 2025</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>wordpress, business</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>
            Next, Supabase 등 효과적인 프레임워크를 사용하고 빠르고 가볍게 MVP
            모델을 만듭니다.
          </h3>
          <img src="posts/web.jpg" alt="Blog image" />
          <div className="post-content">
            <h4>🌐 디지털 세상, 더 빠르고 효율적인 방법이 필요합니다</h4>

            <p>
              오늘날 비즈니스는 단순히 웹사이트 하나를 운영하는 데서 멈추지
              않습니다. 사용자가 모바일에서 앱을 통해 브랜드를 경험하기도 하고,
              데스크톱에서 웹 플랫폼으로 구매를 결정하기도 합니다. 이런 환경에서
              기업이 성공하려면 빠르고 효율적인 웹과 앱 개발이 필요합니다.
              저희는 Next.js와 Supabase를 활용한 웹 개발, 그리고 React Native
              기반의 크로스플랫폼 앱 개발 서비스를 제공합니다. 효율성, 확장성,
              그리고 안정성. 저희가 제공하는 솔루션으로 비즈니스의 디지털 전환을
              완성해보세요.
            </p>
            <br/>
            <h4>✨ Next.js와 Supabase로 구축하는 웹 플랫폼</h4>
            <p>
              Next.js는 현대적인 웹 개발에서 가장 선호되는 프레임워크 중
              하나입니다. SSR(Server-Side Rendering)과 SSG(Static Site
              Generation)를 활용해 빠르고 SEO 최적화된 웹사이트를 제작할 수
              있습니다. 여기에 Supabase를 더하면 강력한 백엔드 기능까지 갖춘
              완벽한 풀스택 솔루션이 탄생합니다.
            </p>
            <ul>
              <li>
                - 빠른 개발 속도
              </li>
              <li>
                - 백엔드 확장성 확보
              </li>
              <li>
                - 대중적인 프레임워크로 유지/보수 용이
              </li>
            </ul>
            <br/>
            <h4>2️⃣ 이런 웹 플랫폼을 제공합니다</h4>
            <p>
              전자상거래 사이트: 빠른 페이지 로딩과 실시간 재고 업데이트로 판매
              효율 극대화
            </p>
            <p>
              포트폴리오/브랜딩 웹사이트: SEO 최적화와 빠른 성능으로 더 많은
              고객 유치
            </p>
            <p>
              커뮤니티/포럼 플랫폼: 실시간 채팅과 데이터 동기화 기능 추가 가능
            </p>
          </div>
          {/* CONTENT ENDS */}
        </div>
        {/* ARTICLE ENDS */}
        <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
          <Link href='https://kmong.com/gig/558791'>상세정보:https://kmong.com/gig/558791</Link>
        </div>
      </div>

    </Fragment>
  );
};
export default BlogPost;
