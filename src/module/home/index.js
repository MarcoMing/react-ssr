import React from "react";
import { connect } from 'react-redux';


import './home.scss';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    //console.log('getDerivedStateFromProps',nextProps);
    return null
  }

  getSnapshotBeforeUpdate(nextProps, prevState){
    //console.log('getSnapshotBeforeUpdate',nextProps);
  }


  componentDidMount(){
  }

  render() {
    const { dataSource } = this.props;
    return (
      <>
        <h1>
          Home path1122:
        </h1>
        <p style={{overflow: 'hidden'}}>
          result:
          { dataSource && JSON.stringify(dataSource) }
        </p>
        <div className="text">this is a text!</div>
        <span className="test">test</span>
      </>
    );
  }
}

function mapStateToProps(state){
  return {
    dataSource: state.home.dataSource
  }
}

export default connect(mapStateToProps,{})(Home);
