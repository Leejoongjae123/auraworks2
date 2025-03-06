const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote" style={{ fontSize: "12px" }}>
                "여러 개발 프로그램을 고민하시는데 크몽에서 한다면 AS도 안되고
                피드백도 안될것 같은 두려움에 구매를 망설이고 계시고 계시다면
                아우라 웍스를 추천드립니다. 우선 여러 개발자분들은 컨택해봤는데
                개발에 어렵다고 하시는 분들이 많이 계셔서 여러번 거절을
                당하였습니다. 그러던 중 리뷰를 보고 아우라웍스 대표님께 연락을
                하였고 마침 사무실도 가까워서 직접 대면으로 미팅을 하였습니다.
                그동안에 만나왔던 개발자 분들과는 다르게 너무 친절하였고 저의
                니즈를 하나한나 노션으로 정리하여 개발 계획서를 체계적으로
                보내주시고 시작하실 정도로 프로시져가 잘 되어 있어서 놀랐습니다.
                또한 제가 설날에 여러 수정문의를 드렸음에도 바로 바로 피드백이
                오셔서 너무 죄송하기도 하고 감사했습니다. 결과적으로 프로그램은
                대 만족입니다. 연초부터 좋은 개발자님을 만나 올한해 운세가 좋을
                것 같습니다. 적극 추천드립니다."
              </span>
              <span className="person">보일드 에그</span>
              <span className="job">성진모 대표님</span>
            </p>
            {/* <img src="assets/testimonials/testimonial-1.jpg" alt="" /> */}
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote" style={{ fontSize: "12px" }}>
                "그동안 크몽에서 정말 많은 분들에게 작업을 요청드렸습니다
                그중에 가장 빠르고 친절하며 실력이 좋은 전문가분이십니다 특히 저
                같은 일반인들이 필요한 기능을 정확하게 이해하고 이를 최적의
                기능으로 구현하는 능력이 정말 탁월하십니다 가끔 모든 프로세스는
                고객에게 요구하고 코딩만 하려는 분들도 많아서 실질적인
                업무협의다 힘든데 이분은 완전 다릅니다 주말이나 저녁에도 소통이
                잘 되고 빠르게 도외주십니다 크몽 최고의 전문가 강추합니다"
              </span>
              <span className="person">그리즐리</span>
              <span className="job">이한민 대표님</span>
            </p>
            {/* <img src="assets/testimonials/testimonial-2.jpg" alt="" /> */}
          </div>
        </div>
        
        
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
