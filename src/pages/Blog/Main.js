import React from "react";
import "./blog.scss";
import { Pagination } from "antd";
import { IoBookmark } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import { useNavigate } from "react-router-dom"

export default function MainBlog() {
  const [current, setCurrent] = React.useState(3);
  const onChange = (page) => {
    setCurrent(page);
  };
  const navigate = useNavigate();
  const blogs = [
    {
      id: 1,
      img: "https://res.cloudinary.com/hdprivatecloud/image/upload/v1705575283/course/abga_xmpfsw.jpg",
      title: "Bài viết 1",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. `,
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/hdprivatecloud/image/upload/v1705575283/course/abga_xmpfsw.jpg",
      title: "Bài viết 2",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. `,
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/hdprivatecloud/image/upload/v1705575283/course/abga_xmpfsw.jpg",
      title: "Bài viết 3",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. `,
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/hdprivatecloud/image/upload/v1705575283/course/abga_xmpfsw.jpg",
      title: "Bài viết 4",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. `,
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/hdprivatecloud/image/upload/v1705575283/course/abga_xmpfsw.jpg",
      title: "Bài viết 5",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. `,
    },
  ];
  return (
    <>
      <h3>Thông tin và kiến thức</h3>
      <div className="blogins">
        <div className="rol-b">
          <img src={blogs[0].img} alt="anhnenproduct" />
          <ul className="tags">
            <li>
              <div>
                <IoBookmark />
                <p>Tin công nghệ</p>
              </div>
            </li>
            <li>
              <div>
                <BsClock />
                <p>19/03/2024</p>
              </div>
            </li>
          </ul>
          <h1 onClick={() => navigate(`/blog/detail/1`)}>{blogs[0].title}</h1>
          <p>{blogs[0].content}</p>
        </div>
        <div className="wrap-rol-smb">
          {blogs.slice(1, 4).map((i, k) => (
            <div className="rol-sm" key={k} onClick={() => navigate(`/blog/detail/1`)}>
              <div>
                <h4>{i.title}</h4>
                <ul className="tags">
                  <li>
                    <div>
                      <IoBookmark />
                      <p>Tin công nghệ</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <BsClock />
                      <p>19/03/2024</p>
                    </div>
                  </li>
                </ul>
                <p>{i.content}</p>
              </div>
              <div>
                <img src={i.img} alt="anhnenproduct" />
              </div>
            </div>
          ))}
        </div>
        <div className="pagaWrap">
          <Pagination current={current} onChange={onChange} total={50} />
        </div>
      </div>
    </>
  );
}
