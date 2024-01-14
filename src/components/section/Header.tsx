import React from "react";

// 데이터
import { navigation_List } from "../../assets/datas/project";

// 이미지
import logo_icon from "../../assets/img/header/logo_icon.svg";
import fullMenu_icon from "../../assets/img/header/fullMenu_icon.svg";

const Header = () => {
  return (
    <div id="Header">
      <div className="wrapper">
        <div className="header_info">
          <img className="logo" src={logo_icon} alt="로고 아이콘" />

          <div className="header_navigation">
            <ul>
              {navigation_List.map((item, index) => (
                <li key={index}>
                  <a href={"#" + item}>{item}</a>
                </li>
              ))}
            </ul>

            <button>
              <img src={fullMenu_icon} alt="전체메뉴 아이콘"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
