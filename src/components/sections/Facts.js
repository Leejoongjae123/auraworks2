const Facts = () => {
  return (
    <section className="facts">
      <div className="flex-column-mobile">
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInLeft wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>4</h3>
              <p>
                창사<span>이후</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInRight wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>272</h3>
              <p>
                완료<span>프로젝트</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInLeft wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>269</h3>
              <p>
                만족<span>고객</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInRight wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>Prime</h3>
              <p>
                크몽 등급<span>상위5%</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInLeft wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>8</h3>
              <p>
                가능한<span>프레임워크</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Facts;
