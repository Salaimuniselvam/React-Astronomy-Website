import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Layout, Menu } from "antd";
import { ReadOutlined, CheckCircleOutlined } from "@ant-design/icons";
import App from "../App";
import Lesson1 from "./lessons/Lesson1";
import Lesson2 from "./lessons/Lesson2";
import Lesson3 from "./lessons/Lesson3";
import Lesson4 from "./lessons/Lesson4";
import Lesson5 from "./lessons/Lesson5";
import Lesson6 from "./lessons/Lesson6";
import Lesson7 from "./lessons/Lesson7";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class MainPage extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Layout style={{ minHeight: "100vh" }}>
            <Header>
              <Menu theme="dark" mode="horizontal" style={{ float: "right" }}>
                <Menu.Item key="1">
                  Home
                  <Link to="/lesson1" />
                </Menu.Item>
                <Menu.Item key="2">
                  Signout
                  <Link to="/" />
                </Menu.Item>
              </Menu>
            </Header>
            <Layout>
              <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
              >
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  <Menu.Item key="1">Astronomy</Menu.Item>
                  <SubMenu key="sub1" icon={<ReadOutlined />} title="Lessons">
                    <Menu.Item key="2">
                      <CheckCircleOutlined /> <span>A Pale Blue Dot</span>{" "}
                      <Link to="/lesson1" />
                    </Menu.Item>
                    <Menu.Item key="3">
                      <CheckCircleOutlined />{" "}
                      <span>The Shores of Cosmic Ocean</span>{" "}
                      <Link to="/lesson2" />
                    </Menu.Item>
                    <Menu.Item key="4">
                      <CheckCircleOutlined /> <span>Cosmos</span>{" "}
                      <Link to="/lesson3" />
                    </Menu.Item>
                    <Menu.Item key="5">
                      <CheckCircleOutlined /> <span>Heaven and Hell</span>{" "}
                      <Link to="/lesson4" />
                    </Menu.Item>
                    <Menu.Item key="6">
                      <CheckCircleOutlined />{" "}
                      <span>Blue's For a Red Planet</span>{" "}
                      <Link to="/lesson5" />
                    </Menu.Item>
                    <Menu.Item key="7">
                      <CheckCircleOutlined /> <span>Travelers'Tales</span>{" "}
                      <Link to="/lesson6" />
                    </Menu.Item>
                    <Menu.Item key="8">
                      <CheckCircleOutlined /> <span>The BackBone Of Night</span>{" "}
                      <Link to="/lesson7" />
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout>
                <Content className="content">
                  <Switch>
                    <Route exact path="/lesson1">
                      <Lesson1 />
                    </Route>
                    <Route exact path="/lesson2">
                      <Lesson2 />
                    </Route>
                    <Route exact path="/lesson3">
                      <Lesson3 />
                    </Route>
                    <Route exact path="/lesson4">
                      <Lesson4 />
                    </Route>
                    <Route exact path="/lesson5">
                      <Lesson5 />
                    </Route>
                    <Route exact path="/lesson6">
                      <Lesson6 />
                    </Route>
                    <Route exact path="/lesson7">
                      <Lesson7 />
                    </Route>
                  </Switch>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Switch>
      </Router>
    );
  }
}
export default MainPage;
