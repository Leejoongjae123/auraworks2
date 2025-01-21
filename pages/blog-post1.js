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
        <h1>My Blog</h1>
        {/* ARTICLE STARTS */}
        <div className="main-post">
          {/* META STARTS */}
          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-calendar" />
              <span>9 Apr 2023</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>Python</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>AI, LLM등을 활용한 챗봇 개발</h3>
          <img src="posts/chatbot.jpg" alt="Blog image" />
          <div className="post-content">
            <h4>💻 AI 챗봇, 비즈니스의 핵심으로 자리잡다</h4>
            <p>
              오늘날 AI 기술은 단순히 혁신적인 기술을 넘어, 비즈니스 성공의 필수
              요소가 되었습니다. 특히, 고객과의 소통이 중요한 카카오톡,
              텔레그램, 왓츠앱과 같은 메시징 플랫폼에서 AI 챗봇은 그 중요성이
              더욱 커지고 있습니다. 하지만 단순한 대화형 챗봇만으로는 현대
              고객의 기대를 충족시키기 어렵습니다. 우리는 여기에 GPT와 RAG
              (Retrieval-Augmented Generation) 기술을 더해 차별화된 솔루션을
              제공합니다.
            </p>
            <br />
            <h4>✨ GPT와 RAG로 가능해진 새로운 고객 경험</h4>
            <ul>
              <li>
                1️⃣ 자연스러운 대화 GPT 기반 AI는 마치 사람이 응답하는 것처럼
                매끄럽고 자연스러운 대화를 제공합니다. 단순한 FAQ 수준을 넘어,
                고객의 니즈를 예측하고 이에 맞춘 답변을 생성합니다.
              </li>
              <li>
                2️⃣ 실시간 정보 제공 RAG 모델은 외부 데이터 소스를 검색하고
                활용하여 실시간으로 정확한 정보를 제공합니다. 예를 들어, 고객이
                특정 제품의 재고를 묻거나 최신 정보를 원할 때, RAG 모델은 그
                순간에도 적합한 답변을 제공합니다.
              </li>
              <li>
                3️⃣ 다양한 플랫폼 지원 카카오톡, 텔레그램, 왓츠앱 등 다양한
                메시징 플랫폼에서 고객과의 접점을 만들어냅니다. 고객이 주로
                사용하는 플랫폼에서 바로 소통할 수 있어 접근성과 편의성을
                극대화합니다.
              </li>
              <li>
                4️⃣ 데이터 기반 개인화 서비스 챗봇은 고객의 대화 데이터를
                학습하여 더 개인화된 경험을 제공합니다. 예를 들어, 특정 고객의
                선호도나 과거 구매 이력을 반영해 더욱 맞춤형 답변을 할 수
                있습니다.
              </li>
            </ul>
            <br />
            <h4>🚀 AI 챗봇, 단순한 자동화를 넘어선 가치 제공</h4>
            <p>
              AI 챗봇의 진정한 가치는 단순히 대화를 자동화하는 데 있지 않습니다.
            </p>
            <ul>
              <li>
                - 고객 경험 혁신: 24시간 대응 가능한 챗봇으로 고객 만족도를
                높입니다.{" "}
              </li>
              <li>
                - 비용 효율성: 고객지원 인력을 효율화하여 비용 절감 효과를
                가져옵니다.
              </li>
              <li>
                - 업무 생산성 향상: 단순 반복 작업을 챗봇이 처리해, 팀이 더
                전략적인 업무에 집중할 수 있습니다.
              </li>
            </ul>
          </div>
          {/* CONTENT ENDS */}
        </div>
        {/* ARTICLE ENDS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          <Link href="https://kmong.com/gig/558292">
            상세정보:https://kmong.com/gig/558292
          </Link>
        </div>
      </div>
    </Fragment>
  );
};
export default BlogPost;
