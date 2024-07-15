import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";
import { Popover } from "antd";
import { FaChevronUp } from "react-icons/fa6";
import { FbIc, ZaloIc } from "../../utils/dataOut";
import { TbMessageCircle2Filled } from "react-icons/tb";

export default function Main() {
  const content = (
    <div className="wrapIcsC">
      <a href="#kkk" alt="lll">
        <div>
          <img src={FbIc} alt="fbic" />
        </div>
        <div>
          <p className="til">Facebook:</p>
          <p>fb/thietbidienhoangphi.com</p>
        </div>
      </a>
      <a href="#kkk" alt="lll">
        <div>
          <img src={ZaloIc} alt="zlic" />
        </div>
        <div>
          <p className="til">Zalo:</p>
          <div className="fl">
            <p>0908 789 789</p>
            <p>Nhắn tin</p>
          </div>
        </div>
      </a>
    </div>
  );
  return (
    <div className="wrapMain">
      <Header />
      <Outlet />
      <Footer />
      <Popover content={content} trigger="click" placement="bottomLeft">
        <div className="ic-socials">
          <div className="icwrap">
            <div>
              <TbMessageCircle2Filled />
              <div className="wave"></div>
            </div>
          </div>
        </div>
      </Popover>

      <div
        className="ic-scroll"
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        <div className="icwrap">
          <div>
            <FaChevronUp />
          </div>
        </div>
      </div>
    </div>
  );
}
