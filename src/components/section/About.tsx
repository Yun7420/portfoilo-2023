import React from "react";

// 데이터
import { complete_List } from "../../assets/datas/project";

// 이미지
import about_title_icon from "../../assets/img/about/about_title_icon.svg";
import profile_img from "../../assets/img/about/profile_img.png";

interface Props {
  scrollRef: React.MutableRefObject<HTMLDivElement[]>;
}

const About = ({ scrollRef }: Props) => {
  return (
    <div
      id="ABOUT"
      ref={(element) => {
        if (element !== null) {
          scrollRef.current[0] = element;
        }
      }}
    >
      <div className="wrapper">
        <div className="about_title">
          <img src={about_title_icon} alt="About 타이틀 이미지" />
          <h2>About</h2>
        </div>

        <div className="about_info">
          <img src={profile_img} alt="프로필 이미지" />

          <div>
            <h2>
              <b>한상윤 (Han Sang Yun)</b>
            </h2>
            <p>
              빠르게 성장하는 웹개발 트랜드 속에서{" "}
              <b>“어제보다 더 나은 코드를 작성하자!”</b>라는 마음으로 다양한
              시도를 해보고 매일 고민하며 프론트엔드 개발자로 한걸음
              나아가기위해 꾸준하게 노력하고 있습니다.
            </p>
            <ul>
              {complete_List.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
