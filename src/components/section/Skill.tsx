import React from "react";

// 데이터
import { skill_List } from "../../assets/datas/project";

// 이미지
import skill_title_icon from "../../assets/img/skill/skill_title_icon.svg";

const Skill = () => {
  return (
    <div id="SKILL">
      <div className="wrapper">
        <div className="skill_title">
          <img src={skill_title_icon} alt="Skill 타이틀 이미지" />
          <h2>Skill</h2>
        </div>

        <div className="skill_info">
          <ul>
            {skill_List.map((item, index) => (
              <li key={index}>
                <div>
                  <img src={item.src} alt={item.alt}/>
                </div>
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
