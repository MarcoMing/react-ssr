

import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header } = Layout;


function Navbar (props) {

  const { pathname } = props;

  const modules = [{
    name: '首页',
    url: '/'
  }, {
    name: '登录',
    url: '/login',
  }, {
    name: '个人中心',
    url: '/user',
  }]

  return (
    <Header>
      <div className="company-logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[pathname || '/']}>
        {modules.map(({ name, url }) => (
          <Menu.Item key={url}>
            <NavLink to={`${url}`}>
              {name}
            </NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  )
}

function mapStateToProps(state){
  //console.log('state11',state);
  return {
    pathname: state.location.pathname
  }
}

export default connect(mapStateToProps,{})(Navbar);
