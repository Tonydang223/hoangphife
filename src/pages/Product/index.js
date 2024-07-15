import React from "react";
import "./product.scss";
import AnhNen from "../../assets/anhnenhome.jpeg";
import LeftMenuProduct from "../../components/_shared/LeftMenuProduct";
import { MdOutgoingMail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { GoDash } from "react-icons/go";

export default function Product() {
  const blogs = [
    {
      id: 1,
      img: "https://res.cloudinary.com/hdprivatecloud/image/upload/v1705575283/course/abga_xmpfsw.jpg",
      title: "Bài viết 1",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/hdprivatecloud/image/upload/v1705575283/course/abga_xmpfsw.jpg",
      title: "Bài viết 2",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/hdprivatecloud/image/upload/v1705575283/course/abga_xmpfsw.jpg",
      title: "Bài viết 3",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/hdprivatecloud/image/upload/v1705575283/course/abga_xmpfsw.jpg",
      title: "Bài viết 4",
    },
  ];
  return (
    <div className="wrapProduct">
      <div className="wrshort">
        <div>
          <img src={AnhNen} alt="anhnenproduct" />
          <div className="content_banner_home f-m">
            <h1>Sản Phẩm</h1>
            <p>
              <span> Trang Chủ</span>
              <span>
                <GoDash />
              </span>
              <span>Sản phẩm</span>
            </p>
          </div>
        </div>
      </div>
      <div className="main-l">
        <div>
          <LeftMenuProduct />
        </div>
        <div>
          <Outlet />
        </div>
        <div>
          <div className="blog_moreLeft1">
            <div className="blog_moreLeft_title">
              <h4>Hỗ trợ và giải đáp</h4>
            </div>
            <div className="blog_moreLeft_content">
              <img
                src={
                  "https://res.cloudinary.com/hdprivatecloud/image/upload/v1705575283/course/abga_xmpfsw.jpg"
                }
                alt="lop"
              />
              <ul>
                <li>
                  <span>
                    <FaPhoneVolume size={15} />
                  </span>
                  <span>(0963) - 880 058</span>
                </li>
                <li>
                  <span>
                    <MdOutgoingMail size={17} />
                  </span>{" "}
                  <span>thietbidienhoangphi@gmail.com</span>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="blog_moreLeft2">
            <div className="blog_moreLeft_title">
              <h4>Tin tức mới nhất</h4>
            </div>
            <div className="blog_moreLeft_content">
              {blogs.slice(0, 4).map((i) => (
                <div className="box_blogsm" key={i._id}>
                  <img src={i.img} alt="llll"/>
                  <h5>{i.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
