import React, { useState, useEffect } from "react";
// import classnames from "classnames";
import { debounce } from "lodash";
import axios from "axios";

const CEOS_API_URL = process.env.CEOS_HOST_KEY;
const DEBOUNCE_DELAY = 500;

export default function FindFamilyName() {
  const [isLoading, setIsLoading] = useState(false);
  const [listData, setListData] = useState(null);
  const [inputData, setInputData] = useState("");
  const [eventTarget, setState] = useState("Unknown");

  const handleChange = (event) => {
    debouncedHandleChange(event.target);
  };

  const debouncedHandleChange = debounce((target) => {
    setState(target.value);
    console.log(target.value);
    console.log(eventTarget);

    fetchData();
  }, DEBOUNCE_DELAY);

  // input의 변화를 처리할 함수
  const handleInputDataChange = (e) => {
    // 왜 여기서 inputData를 바꾸면 debounce delay 처리가 제대로 되지 않을까?? - useState 문제인 것 같다
    // setInputData(e.target.value);
    debounceDelay(e.target);
  };

  // event를 debounceDelay를 주어 과부하를 막는다
  const debounceDelay = debounce((target) => {
    // console.log("inputData", inputData);
    // console.log("target", target.value);

    setInputData(target.value);
    fetchData(target.value);
  }, DEBOUNCE_DELAY);

  // axios를 이용하여 데이터를 가져온다
  const fetchData = async (nameData) => {
    setIsLoading(true);
    // inputData가 제대로 반영되지 않는다. 문제를 어떻게 해결해야할까??
    console.log("axios내 데이터", inputData);
    try {
      const dataList = await axios.get(CEOS_API_URL + "/candidates/");
      setIsLoading(false);
      setListData(
        dataList.data
          .filter((candidate) => candidate.name[0] == nameData[0])
          .map((candidate, i) => (
            <li key={i} className="list-of-candidates">
              {candidate.name}
            </li>
          ))
      );
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="wrapper">
      <div>
        <input type="text" placeholder="Type something" onChange={handleChange} />
        <br />
        Event Target: {eventTarget}
      </div>
      <div>같은 성씨 찾아드립니다</div>
      <div>이름 : {inputData}</div>
      <div className="control">
        <input type="text" className="input" onChange={handleInputDataChange} />
      </div>
      <div className="list is-hoverable" />
      {isLoading && <div>로딩중입니다.</div>}
      {!isLoading && <div className="list">{listData}</div>}
    </div>
  );
}
