import React from "react";

// 이미지
import study_title_icon from "../../assets/img/study/study_title_icon.svg";
import github_icon from "../../assets/img/study/github_icon.svg";
import tistory_icon from "../../assets/img/study/tistory_icon.svg";

interface Props {
  scrollStudyRef: React.ForwardedRef<HTMLDivElement | null>;
}

const Study = (props: Props) => {
  return (
    <div id="STUDY" ref={props.scrollStudyRef}>
      <div className="wrapper">
        <div className="study_title">
          <img src={study_title_icon} alt="Study 타이틀 이미지" />
          <h2>Study</h2>
        </div>

        <div className="study_info">
          <a
            className="github"
            href="https://github.com/Yun7420"
            target="_blank"
          >
            <div className="github_title">
              <h3>깃허브</h3>
              <p>레파지토리 활용하여 소스코드를 관리합니다.</p>
            </div>
            <div>
              <img src={github_icon} alt="깃허브 아이콘" />
            </div>
          </a>
          <a
            className="tistory"
            href="https://hsy742010.tistory.com/"
            target="_blank"
          >
            <div className="tistory_title">
              <h3>티스토리</h3>
              <p>포스팅을 활용하여 배운 내용을 기록합니다.</p>
            </div>
            <div>
              <img src={tistory_icon} alt="티스토리 아이콘" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Study;
