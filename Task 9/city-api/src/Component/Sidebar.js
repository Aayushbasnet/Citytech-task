import React, {useState} from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    BankOutlined,
    UserOutlined,
    DashboardOutlined,
  } from '@ant-design/icons';
import {Link} from "react-router-dom";
import { Layout, Menu } from 'antd';
import './css/Sidebar.css'
import Dashboard from '../view/Dashboard';
import Tables from './Tables';

const { Header, Sider, Content } = Layout;

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
            <Link to="/dashboard">
                <Menu.Item key={'1'} icon={<DashboardOutlined />} label={'Dashboard'}>Dashboard</Menu.Item> 
            </Link>
            <Link to="/dashboard/country">
                <Menu.Item key={'2'} icon={<UserOutlined />} label={'Country'}>Country</Menu.Item> 
            </Link>
            <Link to="/dashboard/Organization">
                <Menu.Item key={'3'} icon={<BankOutlined />} label={'Organization'}>Organization</Menu.Item> 
            </Link>
        </Menu>  
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            display:'flex',
            flexDirection: 'row',
            justifyContent:'flex-start',
            alignItems:'flex-start'
          }}
        >
            <div>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: () => setCollapsed(!collapsed),
                })}
            </div>
            <p>ashdkf</p>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Dashboard/>
          <Tables/>
        </Content>
      </Layout>
    </Layout>
      
    </div>
  )
}
