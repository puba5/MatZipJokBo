import React from "react";
import styled from "styled-components";
import Link from "next/link";
import dl from "../data/tmiData/hongikTMI.json";

export default function BeforeResult(props) {
  const { userData } = props;
  const { Price, FoodType } = userData;

  const tmiList = [
    "1. 장학금 수혜 요건은 봉사 시간 15시간인데 헌혈 1번이면 15시간 인정됩니다~",
    "2. R5층에 흡연장이 있는거 아시나요?",
    "3. Q동 7층은 시험기간에 자리가 남는거 아시나요?",
    "4. 홍대입구역 9출에 사람이 많아서 내려가기 힘들죠? GS25 건물 계단이 홍대입구역으로 갑니다!!",
    "5. 이 프로그램 제작자는 4학년인데 4학년이라고 다 나쁜 사람들 아니에요~",
    "6. 홍대는 비가 와도 정문에서 후문까지 비 안 맞고 갈 수 있는 거 아시나요?",
    "7. 프린트 쿼터 충전 Q동 1층에서 가능한 거 아시나요?",
    "8. 홍대는 여자 휴게실과 남자 휴게실이 존재합니다!",
    "9. 신촌역에서 마포 8,9번을 타고 홍대 정문에서 내리면 등산 안 해도 괜찮아요~",
    "10. 후문 쪽 수업이라면 상수역에서 내리는게 가깝답니다~",
    "11. 성적 장학금 받으려면 국가장학금 신청은 필수랍니다~",
    "12. 지인들에게 홍대 맛집 추천해달라고 많이 들을 텐데 이 서비스 알려주시면 됩니다~",
    "13. 걷고 싶은 거리는 버스킹 10시까지 합니다~",
    "14. 우원재 '시차' 노래에 동방의 소음은 정말 동방의 소음입니다!!",
    "15. 이 서비스 기획자는 박재범을 좋아합니다~",
    "16. T동 5층과 Z동은 연결되어 있답니다~",
    "17. Q동 7층과 중앙도서관 5층은 연결되어 있답니다~",
    "18. 홍대에 고양이 집이 많은 거 아시나요?",
    "19. C동 8층에서 보는 야경이 이뻐요~",
    "20. 홍문관 높은 층에 샤브샤브 집이 있는 거 아시나요?",
    "21. 학생회분들은 보이지 않는 곳에서 일하니 응원 부탁드려요~",
    "22. 교양 수업 한문은 첫 시간에 술 먹는 거 아시나요?",
    "23. 이전에 동땡이라 부르는 곳에서 술을 먹었는데 이제는 먹으면 마시지 못해요!!",
    "24. 후문 근처에 콜로세움이라는 놀이터에서 술을 많이 마시는데 기숙사 근처이니 소음 조심해 주세요~",
    "25. CC의 장점은 매일 보고, 단점은 매일 본다는 점이에요~",
  ];
  return (
    <Wrapper>
      <Link href={`/result?price=${Price}&foodType=${FoodType}`}>
        <Lists>
          <Title>
            결과를 보려면 <br />
            눌러주세요!
          </Title>
          <Content>{`<홍대 TMI> ${tmiList[Math.floor(Math.random() * 25)]}`}</Content>
        </Lists>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 2rem 3rem;
  background-color: rgb(170, 240, 209);
`;

const Title = styled.p`
  font-size: 2rem;
  text-align: center;
  margin: 2rem auto;
`;

const Content = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin: 2rem auto;
`;

const Lists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;
