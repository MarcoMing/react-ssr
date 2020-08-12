
import React from "react";

import { Layout as AntdLayout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = AntdLayout;


import Navbar from './Navbar';

class Layout extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  render() {

    return (
       <AntdLayout className="layout">
         <Navbar />
         <Content style={{ padding: '0 50px' }}>
           <Breadcrumb style={{ margin: '16px 0' }}>
             <Breadcrumb.Item>/</Breadcrumb.Item>
           </Breadcrumb>
           <div className="site-layout-content">
            { this.props.children }
           </div>
         </Content>
         <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </AntdLayout>
    );
  }
}

export default Layout;
