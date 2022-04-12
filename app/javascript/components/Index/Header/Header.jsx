import React from "react";
import { Layout, Menu } from "antd";
// import { AntDesignOutlined } from "@ant-design/icons";

const { Header } = Layout;

export default () => (
  <Header className="site-layout-background" style={{ padding: 0 }}>
    {/* <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        icon={<AntDesignOutlined />}
    /> */}
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">About Us</Menu.Item>
      <Menu.Item key="2">PROJECTS</Menu.Item>
      <Menu.Item key="3">ASSESSMENT</Menu.Item>
    </Menu>
  </Header>        
);