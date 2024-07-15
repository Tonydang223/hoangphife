import React from "react";
import { Button, List, Popover, Form, Input } from "antd";
import Slider from "react-slick";
import AnhNen from "../../assets/anhnenhome.jpeg";
import "./home.scss";
import LeftMenuProduct from "../../components/_shared/LeftMenuProduct";
import { MdOutgoingMail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import {
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
} from "../../utils/dataOut";
import { IoIosMail } from "react-icons/io";

export default function HomePage() {
  const settings = {
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slideDatas = [
    {
      id: 1,
      img: () => <img src={AnhNen} alt="Ảnh banner trần hoàng hải" />,
      title: "Chất lượng hàng đầu",
      content: "Mang đến niềm tin tuyệt đối cho khách hàng",
      content_btn: "Liên Hệ",
    },
    {
      id: 2,
      img: () => <img src={AnhNen} alt="Ảnh banner trần hoàng hải" />,
      title: "Chất lượng hàng đầu",
      content: "Mang đến niềm tin tuyệt đối cho khách hàng",
      content_btn: "Xem Thêm",
    },
  ];
  const dataP = [
    {
      id: 0,
      url: "https://www.thietbidiendgp.vn/media/products/350/cb07-2.jpg",
      title: "Cảm biến nhiệt độ, độ ẩm CB07.TE.BLE LED00043099",
      price: "300.000",
    },
    {
      id: 1,
      url: "https://www.thietbidiendgp.vn/media/products/350/cb07-2.jpg",
      title: "Cảm biến nhiệt độ, độ ẩm CB07.TE.BLE LED00043099",
      price: "300.000",
    },
    {
      id: 2,
      url: "https://www.thietbidiendgp.vn/media/products/350/cb07-2.jpg",
      title: "Cảm biến nhiệt độ, độ ẩm CB07.TE.BLE LED00043099",
      price: "300.000",
    },
    {
      id: 3,
      url: "https://www.thietbidiendgp.vn/media/products/350/cb07-2.jpg",
      title: "Cảm biến nhiệt độ, độ ẩm CB07.TE.BLE LED00043099",
      price: "300.000",
    },
    {
      id: 4,
      url: "https://www.thietbidiendgp.vn/media/products/350/cb07-2.jpg",
      title: "Cảm biến nhiệt độ, độ ẩm CB07.TE.BLE LED00043099",
      price: "300.000",
    },
    {
      id: 5,
      url: "https://www.thietbidiendgp.vn/media/products/350/cb07-2.jpg",
      title: "Cảm biến nhiệt độ, độ ẩm CB07.TE.BLE LED00043099",
      price: "300.000",
    },
    {
      id: 6,
      url: "https://www.thietbidiendgp.vn/media/products/350/cb07-2.jpg",
      title: "Cảm biến nhiệt độ, độ ẩm CB07.TE.BLE LED00043099",
      price: "300.000",
    },
    {
      id: 7,
      url: "https://www.thietbidiendgp.vn/media/products/350/cb07-2.jpg",
      title: "Cảm biến nhiệt độ, độ ẩm CB07.TE.BLE LED00043099",
      price: "300.000",
    },
    {
      id: 8,
      url: "https://www.thietbidiendgp.vn/media/products/350/cb07-2.jpg",
      title: "Cảm biến nhiệt độ, độ ẩm CB07.TE.BLE LED00043099",
      price: "300.000",
    },
    {
      id: 9,
      url: "https://www.thietbidiendgp.vn/media/products/350/cb07-2.jpg",
      title: "Cảm biến nhiệt độ, độ ẩm CB07.TE.BLE LED00043099",
      price: "300.000",
    },
    {
      id: 10,
      url: "https://www.thietbidiendgp.vn/media/products/350/cb07-2.jpg",
      title: "Cảm biến nhiệt độ, độ ẩm CB07.TE.BLE LED00043099",
      price: "300.000",
    },
  ];

  const onFinish = (values) => {
    console.log("Success:", values);
  };

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
    <div className="wrap_home">
      <Slider {...settings}>
        {slideDatas.map((s) => (
          <div className="wrapbanner" key={0}>
            {s.img()}
            <div className="content_banner_home">
              <h1>{s.title}</h1>
              <p>{s.content}</p>
              <Button>{s.content_btn}</Button>
            </div>
          </div>
        ))}
      </Slider>
      <div className="main-l">
        <div>
          <LeftMenuProduct />
        </div>
        <div>
          <h3>Sản phẩm nổi bật</h3>
          <div className="listp">
            <List
              itemLayout="horizontal"
              grid={{ gutter: 9, xl: 3, xxl: 3, lg: 3, md: 2, sm: 2, xs: 1 }}
              size="large"
              pagination={{
                pageSize: 9,
                position: "bottom",
                align: "start",
                // defaultCurrent: 3,
                hideOnSinglePage: true,
                showQuickJumper: false,
                showSizeChanger: false,
                responsive: true,
                itemRender: (_, type, originalElement) => {
                  if (type === "prev") {
                    return <a>{"<<"} Trước</a>;
                  }
                  if (type === "next") {
                    return <a>Sau {">>"}</a>;
                  }
                  return originalElement;
                },
              }}
              dataSource={dataP}
              renderItem={(item) => (
                <div className="card_product" >
                  {/* {item.discount > 0 && <label>{item.discount}%</label>} */}
                  <div>
                    <img src={item.url} />
                  </div>
                  <div className="card_product_content">
                    <Popover content={item.title} trigger="hover">
                      <p>{item.title}</p>
                    </Popover>
                    <p>
                      <span>VNĐ</span>
                      {Number(item.price).toLocaleString("en-US")}
                    </p>
                  </div>
                  <div className="card_product_btn">
                    <Button
                      className="btn_card_product"
                      onClick={(event) => {
                        event.stopPropagation();
                        // window.open("https://www.youtube.com/watch?v=BNYaSeT2rUE", "_blank");
                      }}
                    >
                      Liên hệ
                    </Button>
                  </div>
                </div>
              )}
            />
          </div>
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
                  <img src={i.img} />
                  <h5>{i.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="explain">
        <div>
          <img
            src="https://res.cloudinary.com/hdprivatecloud/image/upload/v1705575283/course/abga_xmpfsw.jpg"
            alt="kopl"
          />
          <div className="wrap_explain_c">
            <div className="explain_c">
              <h3>Gửi mail để hỗ trợ thông tin</h3>
              <p>Các thắc mắc sẽ được giải quyết tại đây</p>
              <div className="explain_c_form">
                <Form onFinish={onFinish} autoComplete="off">
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Hãy nhập tên hoặc email!",
                      },
                    ]}
                  >
                    <Input placeholder="Địa chỉ email" prefix={<IoIosMail size={17} color="#fff"/>} suffix={<p>Gửi</p>} />
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partner">
        <h4>
          “ Đối tác tiêu biểu, đã hợp tác với chúng tối trong thời gian dài.”
        </h4>
        <div class="wrapPartner">
          <div className="row">
            <div>
              <img src={Logo1} alt="log1" />
            </div>
            <div>
              <img src={Logo2} alt="log2" />
            </div>
            <div>
              <img src={Logo3} alt="log3" />
            </div>
            <div>
              <img src={Logo4} alt="log4" />
            </div>
          </div>

          <div className="row">
            <div>
              <img src={Logo5} alt="log5" />
            </div>
            <div>
              <img src={Logo6} alt="log6" />
            </div>
            <div>
              <img src={Logo7} alt="log7" />
            </div>
            <div>
              <img src={Logo8} alt="log8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
