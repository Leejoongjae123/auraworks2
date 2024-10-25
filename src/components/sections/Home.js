const Home = () => {
  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                Welcome
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">to</span>
              <span className="intro animated-layer">
                Web & Automation Development in Seoul,Korea
              </span>
            </span>
            <span>
              <span className="animated-layer">Auraworks</span>
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
