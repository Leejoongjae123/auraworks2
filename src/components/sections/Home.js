const Home = () => {
  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                안녕하세요
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">.</span>
              <span className="intro animated-layer">
                {/* Web & Automation Development in Seoul,Korea */}
                웹 & 자동화 솔루션 개발
              </span>
            </span>
            <span>
              <span className="animated-layer">아우라웍스입니다</span>
            </span>
          </h1>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );
};
export default Home;
