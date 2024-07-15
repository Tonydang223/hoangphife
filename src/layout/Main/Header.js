import React from "react";

import "./main.scss";
import Banner from "../../assets/bannerz.jpeg";
import { Input, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
const { Search } = Input;

export default function Header() {
  const [current, setCurrent] = React.useState("/");
  const navigate = useNavigate();
  const location = useLocation();

  const onClick = (e) => {
    setCurrent(e.key);
    navigate(`${e.key}`);
  };

  React.useEffect(() => {
    setCurrent(`/${location.pathname.split("/")[1]}`);
  }, [location.pathname]);

  const items = [
    {
      label: "Trang Chủ",
      key: "/",
    },
    {
      label: "Giới Thiệu",
      key: "/intro",
    },
    {
      label: "Sản phẩm",
      key: "/product",
    },
    // {
    //   label: "Dự án",
    //   key: "project",
    //   children: [
    //     {
    //       label: "Dự án đang triển khai",
    //       key: "project_1",
    //     },
    //     {
    //       label: "Dự án đã triển khai",
    //       key: "project_2",
    //     },
    //   ],
    // },
    {
      label: "Tin tức",
      key: "/blog",
    },
    {
      label: "Liên hệ",
      key: "/contact",
    },
  ];
  return (
    <div className="wrapHeader">
      <div className="tabline">
        <ul>
          <li>
            <a>Hoạt động công ty</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Video Clip</a>
          </li>
          <li>
            <a>Liên Hệ</a>
          </li>
        </ul>
      </div>
      <div className="banner">
        <img src={Banner} alt="Ảnh banner hoang phi" />

        <div className="banner_inf">
          <Search
            placeholder="Tìm kiếm sản phẩm ở đây...."
            onSearch={(e) => console.log(e)}
            enterButton
          />
        </div>
      </div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
}
