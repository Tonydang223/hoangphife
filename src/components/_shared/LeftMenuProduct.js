import React from "react";
import { SiLiberadotchat } from "react-icons/si";
import "./index.scss";

export default function LeftMenuProduct() {
  return (
    <ul className="wraplmp">
      <li>
        <div>
          <h3>
            <a href=":">Thiết bị đường dây</a>
          </h3>
        </div>

        <ul>
          <li>
            <span>
              <SiLiberadotchat />
            </span>
            <span>Cách điện thuỷ tinh</span>
          </li>
          <li>
            <span>
              <SiLiberadotchat />
            </span>
            <span>Cách điện Polymer</span>
          </li>
          <li>
            <span>
              <SiLiberadotchat />
            </span>
            <span>Cách điện gốm</span>
          </li>
        </ul>
      </li>
      <li>
        <div>
          <h3>
            <a href=":">Phụ kiện đường dây</a>
          </h3>
        </div>

        <ul>
          <li>
            <span>
              <SiLiberadotchat />
            </span>
            <span>Cao thế</span>
          </li>
          <li>
            <span>
              <SiLiberadotchat />
            </span>
            <span>Trung thế</span>
          </li>
          <li>
            <span>
              <SiLiberadotchat />
            </span>
            <span>Hạ thế</span>
          </li>
        </ul>
      </li>
      <li>
        <div>
          <h3>
            <a href=":">Thiết bị viễn thông</a>
          </h3>
        </div>

        <ul>
          <li>
            <span>
              <SiLiberadotchat />
            </span>
            <span>Cáp quang OPGW-ADSS</span>
          </li>
          <li>
            <span>
              <SiLiberadotchat />
            </span>
            <span>Phụ kiện cáp quang</span>
          </li>
        </ul>
      </li>
      <li>
        <div>
          <h3>
            <a href=":">Thiết bị trạm biến áp</a>
          </h3>
        </div>

        <ul>
          <li>
            <span>
              <SiLiberadotchat />
            </span>
            <span>Thiết bị đóng cắt</span>
          </li>
          <li>
            <span>
              <SiLiberadotchat />
            </span>
            <span>Thiết bị bảo vệ</span>
          </li>
          <li>
            <span>
              <SiLiberadotchat />
            </span>
            <span>Máy biến thế, biến dòng</span>
          </li>
        </ul>
      </li>
      <li>
        <div>
          <h3>
            <a href=":">Thiết bị sản xuất</a>
          </h3>
        </div>

        <ul>
          <li>
            <span>
              <SiLiberadotchat />
            </span>
            <span>Tấp ốm vòng, tấm ốp treo</span>
          </li>
          <li>
            <span>
              <SiLiberadotchat />
            </span>
            <span>Khoá đai và đai thép</span>
          </li>
          <li>
            <span>
              <SiLiberadotchat />
            </span>
            <span>Kẹp treo cáp và kẹp bổ trợ</span>
          </li>
          <li>
            <span>
              <SiLiberadotchat />
            </span>
            <span>Kẹp nối cáp</span>
          </li>
          <li>
            <span>
              <SiLiberadotchat />
            </span>
            <span>Kẹp néo cáp</span>
          </li>
        </ul>
      </li>
    </ul>
  );
}
