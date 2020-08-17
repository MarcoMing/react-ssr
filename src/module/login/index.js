import React from "react";

import { connect } from 'react-redux';

class Login extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  render() {

    const { path } = this.props;
    //console.log('path',path);
    return (
      <>
        <h1>
          Login: {path}
        </h1>
      </>
    );
  }
}

function mapStateToProps(state){
  console.log('login state',state);
  return {
  }
}

export default connect(mapStateToProps,{})(Login);
