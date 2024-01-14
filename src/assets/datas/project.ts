// Skill 이미지
import html_icon from "../img/skill/html_icon.svg";
import css_icon from "../img/skill/css_icon.svg";
import js_icon from "../img/skill/js_icon.svg";
import ts_icon from "../img/skill/ts_icon.svg";
import react_icon from "../img/skill/react_icon.svg";
import redux_icon from "../img/skill/redux_icon.svg";
import query_icon from "../img/skill/query_icon.svg";
import axios_icon from "../img/skill/axios_icon.svg";
import sass_icon from "../img/skill/sass_icon.svg";
import tailwind_icon from "../img/skill/tailwind_icon.svg";
import bootstrap_icon from "../img/skill/bootstrap_icon.svg";
import git_icon from "../img/skill/git_icon.svg";
import github_icon from "../img/skill/github_icon.svg";
import node_icon from "../img/skill/node_icon.svg";
import mongo_icon from "../img/skill/mongo_icon.svg";
import postman_icon from "../img/skill/postman_icon.svg";

// Project 이미지
import todolist_img from "../img/project/todolist_img.png";
import rockscissorspaper_img from "../img/project/rockscissorspaper_img.png";
import disney_img from "../img/project/disney_img.png";
import portfolio_img from "../img/project/portfolio_img.png";
import weather_img from "../img/project/weather_img.png";

// Header Components Data
export let navigation_List: string[] = [
  "HOME",
  "ABOUT",
  "SKILL",
  "PROJECT",
  "STUDY",
];

// Home Components Data
export let home_Text: string = "꿈을 향해 올라가는 프론트엔드 개발자 한상윤입니다.";

// About Components Data
export let complete_List: string[] = [
  "2024 프론트엔드 개발(웹코딩) 과정 수료",
  "2023 웹 디자인 시그니처 전문가 과정 수료",
  "2022 그래픽디자인과 반응형 과정 수료",
  "2022 쇼핑몰구축및 웹디자인 과정 수료",
];

// Skill Components Data
export let skill_List: { src: string; alt: string; name: string }[] = [
  {
    src: html_icon,
    alt: "HTML 아이콘",
    name: "HTML",
  },
  {
    src: css_icon,
    alt: "CSS 아이콘",
    name: "CSS",
  },
  {
    src: js_icon,
    alt: "JS 아이콘",
    name: "JS",
  },
  {
    src: ts_icon,
    alt: "TS 아이콘",
    name: "TS",
  },
  {
    src: react_icon,
    alt: "REACT 아이콘",
    name: "REACT",
  },
  {
    src: redux_icon,
    alt: "REDUX 아이콘",
    name: "REDUX",
  },
  {
    src: query_icon,
    alt: "QUERY 아이콘",
    name: "QUERY",
  },
  {
    src: axios_icon,
    alt: "AXIOS 아이콘",
    name: "AXIOS",
  },
  {
    src: sass_icon,
    alt: "SASS 아이콘",
    name: "SASS",
  },
  {
    src: tailwind_icon,
    alt: "TAILWIND 아이콘",
    name: "TAILWIND",
  },
  {
    src: bootstrap_icon,
    alt: "BOOTSTRAP 아이콘",
    name: "BOOTSTRAP",
  },
  {
    src: git_icon,
    alt: "GIT 아이콘",
    name: "GIT",
  },
  {
    src: github_icon,
    alt: "GITHUB 아이콘",
    name: "GITHUB",
  },
  {
    src: node_icon,
    alt: "NODE 아이콘",
    name: "NODE",
  },
  {
    src: mongo_icon,
    alt: "MONGO 아이콘",
    name: "MONGO",
  },
  {
    src: postman_icon,
    alt: "POSTMAN 아이콘",
    name: "POSTMAN",
  },
];

// Project Components Data
export let project_List: {
  [key: string]: string;
}[] = [
  {
    category: "Main",
    src: weather_img,
    alt: "Weather 이미지",
    title: "Weather",
    text: "Weather Api를 활용하여 만든 날씨 프로젝트입니다. 현재 위치, 도시이름을 통해서 날씨를 확인할 수 있으며 차트와 날씨 예상을 통해서 자세한 날씨 정보를 확인할 수 있습니다.",
    program: "Js, React, Scss",
    siteLink: "https://yun7420.github.io/weather-2023/",
    codeLink: "https://github.com/Yun7420/weather-2023",
  },
  {
    category: "Main",
    src: portfolio_img,
    alt: "Portfolio 이미지",
    title: "Portfolio",
    text: "Disney 사이트를 클론코딩한 프로젝트입니다. 사용자는 원하는 상영 프로그램의 간단한 내용, 공개일, 장르, 관람등급, 출연진 등을 확일 할 수 있습니다.",
    program: "Js, Ts, React, Scss",
    siteLink: "https://disney-clone-2023.netlify.app/",
    codeLink: "https://github.com/Yun7420/disney-clone-project",
  },
  {
    category: "Main",
    src: disney_img,
    alt: "Disney Clone 이미지",
    title: "Disney Clone",
    text: "Disney 사이트를 클론코딩한 프로젝트입니다. 사용자는 원하는 상영 프로그램의 간단한 내용, 공개일, 장르, 관람등급, 출연진 등을 확일 할 수 있습니다.",
    program: "Html, Css, Js",
    siteLink: "https://disney-clone-2023.netlify.app/",
    codeLink: "https://github.com/Yun7420/disney-clone-project",
  },
  {
    category: "Sub",
    src: rockscissorspaper_img,
    alt: "RockScissorsPaper 이미지",
    title: "RockScissorsPaper",
    text: "가위바위보 게임 미니 프로젝트입니다. 사용자가 아이템을 선택하면 컴퓨터는 무작위로 아이템을 선택합니다. 선택한 아이템을 기준으로 승패와 점수를 확인할 수 있으며 언제든 결과를 Reset할 수 있습니다.",
    program: "Js, Ts, React, Css",
    siteLink: "https://yun7420.github.io/rockscissorspaper-2023/",
    codeLink: "https://github.com/Yun7420/rockscissorspaper-2023",
  },
  {
    category: "Sub",
    src: todolist_img,
    alt: "ToDoList 이미지",
    title: "ToDoList",
    text: "할일목록관리 미니 프로젝트입니다. 사용자는 오늘의 날짜를 확인하고, 할일을 등록, 수정, 삭제 할 수 있으며, 할일들을 필터하며 관리할 수 있습니다.",
    program: "Js, React, Styled Components",
    siteLink: "https://yun7420.github.io/todo_list-2023/",
    codeLink: "https://github.com/Yun7420/todo_list-2023",
  },
];
