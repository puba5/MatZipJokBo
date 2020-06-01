# MatZipZoa Front Page

- React를 이용한 프론트 페이지
- Zeit을 이용하여 배포

## 실행 방법

```
npm install
npm run dev
```

- npm install : 필요한 모든 패키지를 설치합니다. 처음 1번만 실행하면 됩니다.
- npm run dev : react 어플리케이션을 브라우저에서 실행합니다.

## 서비스 주소

```
https://mat-zip-zoa-front.puba5.now.sh

현재는 모바일 웹만 사용한다고 생각하고 제작
```

## 폴더 경로

```
.
├── README.md
├── components
│   ├── before_result.js
│   ├── bingoTable
│   │   ├── table.js
│   │   ├── td.js
│   │   └── tr.js
│   ├── question_foodtype.js
│   └── question_price.js
├── data
│   ├── matzipData
│   │   └── hongikUniv.json
│   └── tmiData
│       └── hongikTMI.json
├── docs
├── next.config.js
├── now.json
├── package-lock.json
├── package.json
├── pages
│   ├── _app.js
│   ├── _document.js
│   ├── bingo.js
│   ├── index.js
│   ├── question.js
│   └── result.js
└── server
    └── index.js
```

## 현재까지 구현된 서비스

### 1. 맛집 추천

```
https://mat-zip-zoa-front.puba5.now.sh/question

page 기능을 이용하여 메인페이지-index, 설문-question, 결과페이지-result를 나눔
설문 결과에 따라 url 쿼리 분류를 하여 결과를 보여줌
현재는 js 코드 내에 데이터를 저장하지만, 추후 axios를 이용하여 web api를 이용하여 데이터를 받을 예정
이를 대비하여 로딩 중에는 다른 메세지를 출력하도록 구현
```

### 2. 맛집 빙고

```
https://mat-zip-zoa-front.puba5.now.sh/bingo

useReducer을 이용하여 빙고의 데이터를 관리
현재 bingo table의 최하위 컴포넌트인 td.js에서 클릭을 할 경우 bingo.js의 state 데이터 값을 변경시키고, 그에 따라 컴포넌트이 배경 색 변경
```
