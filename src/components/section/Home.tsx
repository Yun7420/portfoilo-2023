import React from "react";
import { useState, useEffect } from "react";

// 데이터
import { home_Text } from "../../assets/datas/project";

// 이미지
import mouse_icon from "../../assets/img/home/mouse_icon.svg";

const Home = () => {
  const [text, setText] = useState<string>("");
  const [textCount, setTextCount] = useState<number>(0);

  // 텍스트 타이핑
  const text_Typing = () => {
    return setInterval(() => {
      setText(text + home_Text[textCount]);
      setTextCount(textCount + 1);
    }, 200);
  };

  useEffect(() => {
    const text_Interval = text_Typing();

    // 텍스트 글자 갯수가 초과하면 초기화
    if (textCount > home_Text.length) {
      setText("");
      setTextCount(0);
    }

    // setInterval 초기화
    return () => {
      clearInterval(text_Interval);
    };
  }, [text]);

  return (
    <div id="HOME">
      <div className="home_info">
        <h1>WEB PORTFOLIO</h1>
        <p>{text}</p>
      </div>
      
      <img src={mouse_icon} alt="마우스 아이콘" />
    </div>
  );
};

export default Home;
