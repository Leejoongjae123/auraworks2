import Header from "@/src/components/Header";
import ScrollBar from "@/src/components/ScrollBar";
import About from "@/src/components/sections/About";
import Blog from "@/src/components/sections/Blog";
import Clients from "@/src/components/sections/Clients";
import Contact from "@/src/components/sections/Contact";
import Copyright from "@/src/components/sections/Copyright";
import Facts from "@/src/components/sections/Facts";
import Home from "@/src/components/sections/Home";
import Portfolio from "@/src/components/sections/Portfolio";
import Testimonials from "@/src/components/sections/Testimonials";
import Separator from "@/src/components/Separator";
import { jqueryFuntion } from "@/src/utilits";
import { Fragment, useEffect } from "react";
import Head from "next/head";

const Index = () => {
  useEffect(() => {
    jqueryFuntion();
  });

  return (
    <Fragment>
      <Head>
        <meta
          name="naver-site-verification"
          content="642b9efe2d11ed371f6dc35185796b7998e631f8"
        />
        <meta
          name="google-site-verification"
          content="2cmVGpUqBBn8W4mo5rByshQepyp-IQmXZ48YVnNL110"
        />
        <meta name="description" content="웹 & 업무 자동화 전문 개발 에이전시 아우라웍스 소개" />
        <meta property="og:title" content="아우라웍스 | AURAWORKS" />
        <meta property="og:description" content="웹 & 업무 자동화 전문 개발 에이전시 아우라웍스 소개" />
        <meta property="og:image" content="/logo/logo.jpg" />
        <link rel="shortcut icon" href="https://kakaotalk.s3.ap-northeast-2.amazonaws.com/favicon.png"/>

      </Head>
      <div className="page-content">
        <Header />
        <div id="wrapper">
          <main className="flex-column-mobile">
            <Home />
            <About />
            <Separator type={"down"} />
            <Facts />
            <Separator type={"up"} />
            <Portfolio />
            <Separator type={"down"} />
            <Testimonials />
            <Separator type={"up"} />
            <Contact />
            <Separator type={"down"} />
            <Clients />
            <Separator type={"up"} />
            <Blog />
            <Separator type={"down"} />
            <Copyright />
          </main>
        </div>
        <ScrollBar />
      </div>
    </Fragment>
  );
};
export default Index;
