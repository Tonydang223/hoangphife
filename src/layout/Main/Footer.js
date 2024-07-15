import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa";
import AnhBoCt from "../../assets/bocongthuong.png";

export default function Footer() {
  return (
    <div className="wrapFot">
      <ul>
        <li>
          <h3>Công ty thiết bị điện gia dụng hoàng phi</h3>
          <p>Mã số: 012345</p>
          <p>
            <span>
              <FaAddressBook />
            </span>
            <span>
              <span>Điạ chỉ:</span> 23 Hoàn Kiếm, Hà nội, Việt Nam
            </span>
          </p>
          <p>
            <span>
              <FaPhoneAlt />
            </span>
            <span>
              <span>Điện thoại:</span> (0963) 880 058 - (0904) 600 816
            </span>
          </p>
          <p>
            <span>
              <IoMail />
            </span>
            <span>
              <span>Email:</span> thietbidienhoangphi@gmail.com
            </span>
          </p>
          <p>
            <span>
              <BsFacebook />
            </span>
            <span>
              <span>FB: </span>
              <a target="__blank" href="https/">
                fb.com/thietbidienhoangphi
              </a>
            </span>
          </p>
        </li>
        <li>
          <h3>Về chúng tôi</h3>
          <ul>
            <li>
              <a href="hompage" alt="lll">Trang chủ</a>
            </li>
            <li>
              <a href="intro">Về chúng tôi</a>
            </li>
            <li>
              <a href="product">Sản phẩm</a>
            </li>
            <li>
              <a href="blog">Tin tức</a>
            </li>
            <li>
              <a href="contact">Liên hệ</a>
            </li>
          </ul>
        </li>
        <li>
          <h3>Bản đồ</h3>
          <iframe
            title="maphoangphi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8966662006533!2d105.7956415!3d20.996778900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ade86d2a3f7f%3A0x43e1f079b289fc01!2zMTI5IFAuIFbFqSBI4buvdSwgVHJ1bmcgVsSDbiwgVGhhbmggWHXDom4sIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1710325120633!5m2!1svi!2s"
            height="165"
            width={"100%"}
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </li>
      </ul>
      <ul className="info_end">
        <li>
          Copyright © 2013-2024 - Bản quyển của Công ty TNHH Thiết bị điện Hoàng
          Phi <br />
          Người đại diện: Nguyễn Văn A.
        </li>
        <li>
          <a>
            <img src={AnhBoCt} alt="anh logo chung nhan" />
          </a>
        </li>
      </ul>
    </div>
  );
}
