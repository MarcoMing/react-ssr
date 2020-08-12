

import React from "react";

class User extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log('didMount');
  }

  render() {
    console.log('render');
    const { path } = this.props;
    return (
      <>
        <h1>
          user: {path}
        </h1>
      </>
    );
  }
}
export default User;
