import React from "react";
import { IoBookmark } from "react-icons/io5";

export default function Details() {
  return (
    <div className="wrapBlogDel">
      <div className="ct-inf">
        <div className="tabhead">
          <IoBookmark />
          <p>Tin Công Nghệ</p>
        </div>
        <div className="in">
          <p>Trần Đại Nghĩa</p>
          <p>3 Tháng Sáu, 2024</p>
        </div>
      </div>

      <h1>Bài viết 1</h1>

      <div className="desc">
        <div>
          <img
            src="https://res.cloudinary.com/hdprivatecloud/image/upload/v1705575283/course/abga_xmpfsw.jpg"
            alt="lkpop"
          />
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <ul>
            <li>including versions of Lorem Ipsum.</li>
            <li>including versions of Lorem Ipsum.</li>
            <li>including versions of Lorem Ipsum.</li>
        </ul>
      </div>
    </div>
  );
}
