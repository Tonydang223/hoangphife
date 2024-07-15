import React from "react";
import { Modal, Carousel, Button, InputNumber, Table, Form, Input } from "antd";

export default function Details() {
  const [slides] = React.useState([
    "https://res.cloudinary.com/hdprivatecloud/image/upload/v1705575283/course/abga_xmpfsw.jpg",
    "https://res.cloudinary.com/hdprivatecloud/image/upload/v1702974634/posts/anhbg_an0lkt.jpg",
    "https://res.cloudinary.com/hdprivatecloud/image/upload/v1702435383/editors/1-Interesting-Facts-about-Big-Ben-04_800x534_edspcj.jpg",
    "https://res.cloudinary.com/hdprivatecloud/image/upload/v1705575283/course/abga_xmpfsw.jpg",
  ]);

  const [avtiveslide, setActiveSlide] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [isOpF, setIsOpF] = React.useState(false);
  const [count, setCount] = React.useState(1);

  const onChange = (value) => {
    setCount(value);
  };
  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mã sản phẩm",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Thương hiệu",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Số lượng đặt",
      key: "count",
      render: () => <p>{count}</p>,
    },
    {
      title: "Tổng đơn",
      key: "total",
      render: (e) => (
        <p>
          {Number(
            count > 0 ? Math.round(e.price * count) : e.price
          ).toLocaleString("en-US")}
        </p>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "Đèn ốp trần LED 3 CĐ - 40W - W500",
      code: "MVLK222",
      brand: "nEW oNE",
      price: 1600000,
    },
  ];

  const activeSlide = (e) => {
    setActiveSlide(e);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <>
      <div className="wrapDel">
        <div className="slideImg">
          <img
            src={slides[avtiveslide]}
            alt="sss"
            onClick={() => setOpen(true)}
          />
          <div className="acSli">
            {slides.map((e, k) => (
              <div
                className={avtiveslide === k ? "active" : ""}
                key={k}
                onClick={() => activeSlide(k)}
              >
                <img src={e} alt="sss" />
              </div>
            ))}
          </div>
        </div>
        <div className="info">
          <h1>Đèn ốp trần LED 3 CĐ - 40W - W500</h1>
          <h5>
            1.600.000 <span>VNĐ</span>
          </h5>
          <p>
            Giá tốt hơn khi mua số lượng nhiều (vui lòng thêm vào báo giá để
            nhận báo giá hoặc qua email: thietbidienhoangphi@gmail.com)
          </p>
          <div className="box-w">
            <div className="box-w-f">
              <p>
                <span>Mã sản phẩm</span>:
                <br />
                <span className="bl"> MVX098</span>
              </p>
              <p>
                <span>Thương hiệu</span>:
                <br />
                <span className="bl"> MVX098</span>
              </p>
            </div>
            <div className="box-w-f">
              <p>
                <span>Bảo hành</span>:
                <br />
                <span className="bl">12 tháng</span>
              </p>
              <p>
                <span>Loại</span>:
                <br />
                <span className="bl"> MVX098</span>
              </p>
            </div>
          </div>
        </div>
        <p className="out-p">Số lượng</p>
        <InputNumber min={1} defaultValue={1} onChange={onChange} />
        <Button onClick={() => setIsOpF(true)}>Liên Hệ Nhanh</Button>

        <h3>Thông số kĩ thuật</h3>
        <div className="desc">
          <p>Thông số kĩ thuật đây</p>
        </div>

        <Modal
          open={open}
          title="Sản phẩm 1"
          onCancel={() => setOpen(false)}
          footer={null}
          className="w-ad"
        >
          <Carousel arrows infinite={false} dots={false}>
            {slides.map((e, k) => (
              <img src={e} alt="sss" />
            ))}
          </Carousel>
        </Modal>
        <Modal
          open={isOpF}
          title="Sản phẩm 1"
          onCancel={() => setIsOpF(false)}
          footer={null}
          destroyOnClose={true}
          className="w-ad"
        >
          <Table columns={columns} dataSource={data} pagination={false} />
          <Form
            initialValues={{
              name: "",
              phone: "",
              email: "",
              content: "",
            }}
            layout="vertical"
            style={{ marginTop: "20px", width: "70%" }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Tên"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Nhập tên của bạn!",
                },
              ]}
            >
              <Input placeholder="Nguyen An" />
            </Form.Item>

            <Form.Item
              label="Số điện thoại"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập số điẹn thoại!",
                },
              ]}
            >
              <Input type="number" placeholder="0908789789" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập email!",
                },
              ]}
            >
              <Input placeholder="A@gmail.com" />
            </Form.Item>
            <Form.Item label="Nội dung ghi chú thêm" name="content">
              <Input.TextArea
                style={{ height: "150px" }}
                placeholder="Nội dung cần ghi chú"
              />
            </Form.Item>

            <Form.Item>
              <Button className="btn-modal" type="primary" htmlType="submit">
                Gửi báo giá
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
}
