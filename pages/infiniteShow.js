import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FoodCard from "../components/infiniteFood/food_card";

const matziplist = [
  {
    id: 1,
    name: "국시와가래떡",
    foodtype: "한식",
    price: "6000",
    link: "https://store.naver.com/restaurants/detail?id=38274964",
  },
  {
    id: 2,
    name: "김피라",
    foodtype: "한식",
    price: "8000",
    link:
      "https://store.naver.com/restaurants/detail?entry=plt&id=32708593&query=%EA%B9%80%ED%94%BC%EB%9D%BC%20%ED%99%8D%EB%8C%80%EC%A0%90",
  },
  {
    id: 3,
    name: "또보겠지떡볶이",
    foodtype: "한식",
    price: "10000",
    link: "https://store.naver.com/restaurants/detail?id=38556073",
  },
  {
    id: 4,
    name: "청기와",
    foodtype: "한식",
    price: "12000",
    link: "https://store.naver.com/restaurants/detail?id=36171073",
  },
  {
    id: 5,
    name: "청해루",
    foodtype: "중식",
    price: "6000",
    link:
      "https://store.naver.com/restaurants/detail?entry=plt&id=13153369&query=%EC%B2%AD%ED%95%B4%EB%A3%A8",
  },
  {
    id: 6,
    name: "진만두",
    foodtype: "중식",
    price: "8000",
    link:
      "https://store.naver.com/restaurants/detail?entry=plt&id=37288686&query=%EC%A7%84%EB%A7%8C%EB%91%90",
  },
  {
    id: 7,
    name: "초마",
    foodtype: "중식",
    price: "10000",
    link:
      "https://store.naver.com/restaurants/detail?entry=plt&id=13575406&query=%EC%B4%88%EB%A7%88",
  },
  {
    id: 8,
    name: "맛이차이나",
    foodtype: "중식",
    price: "12000",
    link:
      "https://store.naver.com/restaurants/detail?entry=plt&id=31777479&query=%EB%A7%9B%EC%9D%B4%EC%B0%A8%EC%9D%B4%EB%82%98",
  },
  {
    id: 9,
    name: "삭튀김",
    foodtype: "일식",
    price: "6000",
    link: "https://store.naver.com/restaurants/detail?id=35069414",
  },
  {
    id: 10,
    name: "카미야",
    foodtype: "일식",
    price: "8000",
    link:
      "https://store.naver.com/restaurants/detail?entry=plt&id=19535343&query=%EC%B9%B4%EB%AF%B8%EC%95%BC",
  },
  {
    id: 11,
    name: "무라",
    foodtype: "일식",
    price: "10000",
    link: "https://store.naver.com/restaurants/detail?id=11707315",
  },
  {
    id: 12,
    name: "박용석스시",
    foodtype: "일식",
    price: "12000",
    link: "https://store.naver.com/restaurants/detail?id=31532886",
  },

  {
    id: 13,
    name: "식스티즈버거",
    foodtype: "그외나라",
    price: "6000",
    link: "https://store.naver.com/restaurants/detail?id=1853322194",
  },

  {
    id: 14,
    name: "닭꼬얌",
    foodtype: "그외나라",
    price: "8000",
    link:
      "https://store.naver.com/restaurants/detail?entry=plt&id=37521193&query=%EB%8B%AD%EA%BC%AC%EC%96%8C",
  },
  {
    id: 15,
    name: "윤씨밀방",
    foodtype: "그외나라",
    price: "10000",
    link:
      "https://store.naver.com/restaurants/detail?entry=plt&id=13341197&query=%EC%9C%A4%EC%94%A8%EB%B0%80%EB%B0%A9",
  },
  {
    id: 16,
    name: "더피자보이스서교",
    foodtype: "그외나라",
    price: "12000",
    link:
      "https://store.naver.com/restaurants/detail?entry=plt&id=37624477&query=%EB%8D%94%ED%94%BC%EC%9E%90%EB%B3%B4%EC%9D%B4%EC%A6%88",
  },
];

export default function InfiniteShow() {
  let matzipCnt = 5;

  const [matzip, setMatzip] = useState(matziplist.slice(0, matzipCnt));

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll, true);
  }, []);
  const infiniteScroll = () => {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      matzipCnt += 3;
      if (matzipCnt > matziplist.length) {
        matzipCnt = matziplist.length;
      }
      setMatzip(matziplist.slice(0, matzipCnt));
    }
  };
  return (
    <Wrapper>
      {matzip.map((store, index) => {
        return <FoodCard {...store} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 5rem;
  padding: 3rem;
`;
