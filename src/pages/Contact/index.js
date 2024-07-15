import React from "react";
import "./contact.scss";
import { PiAddressBookLight } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { Button, Form, Input } from "antd";
import AnhNen from "../../assets/anhnenhome.jpeg";
import { GoDash } from "react-icons/go";

export default function Contact() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <div className="wrapContact">
      <div className="wrshort">
        <div>
          <img src={AnhNen} alt="anhnenproduct" />
          <div className="content_banner_home f-m">
            <h1>Liên Hệ</h1>
            <p>
              <span> Trang Chủ</span>
              <span>
                <GoDash />
              </span>
              <span>Liên hệ</span>
            </p>
          </div>
        </div>
      </div>
      <div className="wrapFormUn">
        <div className="box-contact">
          <div>
            <div className="box-contact-ci">
              <PiAddressBookLight />
            </div>
            <h5>Địa chỉ</h5>
            <p>23 Hoàn Kiếm, Hà nội, Việt Nam</p>
          </div>
          <div>
            <div className="box-contact-ci">
              <FiPhone />
            </div>
            <h5>Điện thoại</h5>
            <p>(0963) - 880 058</p>
          </div>
          <div>
            <div className="box-contact-ci">
              <HiOutlineMail />
            </div>
            <h5>Email</h5>
            <p>thietbidienhoangphi@gmail.com</p>
          </div>
        </div>
        <div className="box-form">
          <Form
            initialValues={{
              email: "",
              name: "",
              content: "",
            }}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Tên"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập tên!",
                },
              ]}
            >
              <Input placeholder="Nguyen Van A" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập email",
                },
              ]}
            >
              <Input placeholder="a@gmail.com" />
            </Form.Item>

            <Form.Item label="Nội dung" name="content">
              <Input.TextArea placeholder="Nội dung..." showCount />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="btnSub">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <div>
            <iframe
              title="maphoangphi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8966662006533!2d105.7956415!3d20.996778900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ade86d2a3f7f%3A0x43e1f079b289fc01!2zMTI5IFAuIFbFqSBI4buvdSwgVHJ1bmcgVsSDbiwgVGhhbmggWHXDom4sIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1710325120633!5m2!1svi!2s"
              height="165"
              width={"100%"}
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
