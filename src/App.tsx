import React, { useEffect } from "react";
import { useState, useRef } from "react";

// 캄포넌트
import Header from "./components/section/Header";
import Home from "./components/section/Home";
import About from "./components/section/About";
import Skill from "./components/section/Skill";
import Project from "./components/section/Project";
import Study from "./components/section/Study";
import Footer from "./components/section/Footer";
import FullMenu from "./components/section/FullMenu";

function App() {
  // 전체메뉴 State
  const [fullMenustate, setFullMenuState] = useState<boolean>(false);

  let viewPortHeight = window.innerHeight;

  // 스크롤 Ref ... 여러개를 하나로 관리 방법 찾기
  const scrollRef = useRef<HTMLDivElement[] | []>([]);

  const scrollAboutRef = useRef<HTMLDivElement | null>(null);
  const scrollSkillRef = useRef<HTMLDivElement | null>(null);
  const scrollProjectRef = useRef<HTMLDivElement | null>(null);
  const scrollStudyRef = useRef<HTMLDivElement | null>(null);

  console.log(viewPortHeight) 
  console.log(scrollAboutRef.current?.getBoundingClientRect().y)

  // viewPortHeight * 0.9 > scrollAboutRef.current?.getBoundingClientRect().y 
  // scrollAboutRef.current.classList.add("active") 클래스 추가

  return (
    <div className="App">
      <Header setFullMenuState={setFullMenuState} />
      <Home />
      <About scrollAboutRef={scrollAboutRef} />
      <Skill scrollSkillRef={scrollSkillRef} />
      <Project scrollProjectRef={scrollProjectRef} />
      <Study scrollStudyRef={scrollStudyRef} />
      <Footer />
      <FullMenu fullMenustate={fullMenustate} setFullMenuState={setFullMenuState} />
    </div>
  );
}

export default App;
