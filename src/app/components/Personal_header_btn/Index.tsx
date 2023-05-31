"use client";
import "./index.css";

export const Personal_header_btn: React.FC = () => {
  return (
    <div className="Personal_header_btn">
      <img src="" alt="user img" />
      <div className="main">
        <div className="dropdown">
          <div>user_name</div>
          <div className="arrow-icon">&#9662;</div>
          <div className="dropdown-content">
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
            <a href="#">Option 3</a>
          </div>
        </div>
        <div className="userEmail">userEmail@gmail.com</div>
      </div>
    </div>
  );
};
