import React from "react";
import "./product.scss";
import { List, Button, Popover, Input, Dropdown, Space } from "antd";
import { FaChevronDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"
const { Search } = Input;


export default function MainProduct() {
    const [searchFilter, setSearchFilter] = React.useState("");
    console.log("🚀 ~ Product ~ searchFilter:", searchFilter)
  
    const onSearchData = (data) => {
      setSearchFilter(data);
    };
  
    const onChangeSearch = (e) => {
      if (e.target.value === "") setSearchFilter("");
    };
    const navigate = useNavigate();
  
    const dataP = [
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
      {
        id: 11,
        url: "https://www.thietbidiendgp.vn/media/products/350/cb07-2.jpg",
        title: "Cảm biến nhiệt độ, độ ẩm CB07.TE.BLE LED00043099",
        price: "300.000",
      },
    ];

  return (
    <>
      <div className="wrapinp">
        <div class="wrapinp1">
          <Search
            placeholder="Tìm kiếm sản phẩm..."
            onSearch={onSearchData}
            enterButton
            onChange={onChangeSearch}
          />
        </div>
        <div class="wrapinp2">
          <Dropdown
            menu={{
              items: [
                {
                  label: "Giá từ cao đến thấp",
                  key: "1",
                },
                {
                  label: "Giá từ thấp đến cao",
                  key: "2",
                },
              ],
            }}
            placement="bottomRight"
          >
            <Button>
              <Space>
                Mặc định
                <FaChevronDown />
              </Space>
            </Button>
          </Dropdown>
        </div>
      </div>
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
            <div className="card_product" onClick={() => navigate('/product/detail/1')}>
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
    </>
  );
}
