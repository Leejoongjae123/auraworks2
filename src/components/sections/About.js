import Link from "next/link";

const About = () => {
  // 나이 계산 함수 추가
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  // 생년월일 설정
  const birthDate = "1988-08-15";
  const age = calculateAge(birthDate);
  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              <img
                className="my-photo w-32 h-auto object-cover"
                src="assets/profile/profile1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}
        {/* INFO STARTS */}
        <div className="flex flex-row  flex-between">
          <div>
            <h2>
              <span>
                <span className="animated-layer fade-in-up-animation fadeInUp wow">
                  CEO
                </span>
              </span>
              <span>
                <span className="animated-layer fade-in-up-animation fadeInUp wow">
                  이중재
                </span>
              </span>
            </h2>
          </div>

          <div className="infos">
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>나이 :</span>
                    <span>{age}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>크몽 :</span>

                    <Link
                      className="text-[#FFB400] "
                      href="https://kmong.com/@아우라웍스"
                    >
                      링크
                    </Link>
                  </span>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>주소 :</span>
                    <span>서울 강남</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>연락처 :</span>
                    <span>010-9070-3001</span>
                  </span>
                </span>
              </li>
              <li className="">
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>이메일 :</span>
                    <span>ljj3347@auraworks.kr</span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}
      {/* SKILLS STARTS */}
      <div className="skills flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                My Skills
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        <div className="skills-content">
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-nextjs-plain"></i>
              </span>
              <h4>Nextjs</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-python-plain"></i>
              </span>
              <h4>Python</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-fastapi-plain"></i>
              </span>
              <h4>Fast API</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-supabase-plain"></i>
              </span>
              <h4>Supabase</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-tailwindcss-original"></i>
              </span>
              <h4>Tailwindcss</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-amazonwebservices-plain-wordmark"></i>
              </span>
              <h4>AWS</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-postgresql-plain"></i>
              </span>
              <h4>PostgrSQL</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-docker-plain"></i>
              </span>
              <h4>Docker</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
        </div>
      </div>
      {/* SKILLS ENDS */}
      {/* RESUME STARTS */}
      <div className="resume flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title fadeInUp wow">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">
                My Resume
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        {/* TIMELINE STARTS */}
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>인턴십 프로그램</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2012</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span className="involve-group">한온 시스템(구 한라공조)</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="experience">
                  <h4>학부 졸업</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2013</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>아주대학교</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>연구원</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2013~2024</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>현대자동차</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="education">
                  <h4>회사 설립</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2023~</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>아우라웍스</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="education">
                  <h4>크몽 Prime 등급</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2023~</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>크몽</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            <li />
          </ol>
        </div>
        {/* TIMELINE ENDS */}
      </div>
      {/* RESUME ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default About;
