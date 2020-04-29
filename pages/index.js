import React, { useEffect } from "react";
import Link from "next/link";
import ReactGA from "react-ga";
import styled from "styled-components";
import Router from "next/router";

Router.onRouteChangeComplete = (url) => {
  console.log("주소 변경", url);
  const pathName = window.location.pathname;
  //console.log(window);
  ReactGA.initialize("UA-164936400-1");
  ReactGA.set({ page: pathName });
  ReactGA.pageview(pathName);
};

export default function Home() {
  useEffect(() => {
    getGA();
  }, []);
  const getGA = () => {
    console.log("페이지 들어옴");
    const pathName = window.location.pathname;
    ReactGA.initialize("UA-164936400-1");
    ReactGA.set({ page: pathName });
    ReactGA.pageview(pathName);
  };
  return (
    <Wrapper>
      <Contents>
        <Title1>졸업 전에</Title1>
        <Title1>뿌리는</Title1>
        <Title2>홍대 맛집 족보</Title2>
        <Link href="/question">
          <StartBtn>맛집 추천 시작</StartBtn>
        </Link>
      </Contents>
      {`<홍대맛집족보 0.0.1>`}
      <br />
      1. 배포 환영
      <br />
      2. 수정 금지
      <br />
      3. 상업적 이용 금지
      <br />
      4. 피드백 환영- 오픈카톡방(https://open.kakao.com/o/g7KKlQ8b)
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 3rem 3rem;
  background-color: rgb(170, 240, 209);
`;

const Contents = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 2rem;
  margin: 2rem auto;
  width: 90%;
`;

const Title1 = styled.p`
  font-size: 2rem;
  text-align: center;
  margin: 1rem auto;
`;
const Title2 = styled.p`
  color: red;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  margin: 1rem auto 5rem auto;
`;

const StartBtn = styled.button`
  font-size: 0.7rem;
  margin: 0 auto;
  width: 6rem;
  height: 3rem;
  border: none;
  border-radius: 0.3rem;
  background: pink;
`;
