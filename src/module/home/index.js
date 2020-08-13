import React from "react";
import { connect } from 'react-redux';
import { Button } from 'antd';


import { actionCreators } from './redux';

import './home.scss';

class Home extends React.Component {

  constructor(props){
    super(props);
    //console.log('propsprops',props.staticContext);
    this.state = {

    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return null
  }

  getSnapshotBeforeUpdate(nextProps, prevState){
  }


  componentDidMount(){
  }

  render() {
    const { dataSource ,count} = this.props;
    return (
      <>
        <h1>
          count: { count }
        </h1>
        <div>
          <Button type="primary" onClick={()=>  this.props.increment()}>INCREMENT</Button>&nbsp;&nbsp;
          <Button type="primary" onClick={()=>  this.props.decrement()}>DECREMENT</Button>
        </div>

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

// const mapDispatchToProps = dispatch => {
//   return {
//     // dispatching plain actions
//     increment: () => dispatch({ type: 'INCREMENT' }),
//     decrement: () => dispatch({ type: 'DECREMENT' }),
//     reset: () => dispatch({ type: 'RESET' })
//   }
// }

function mapStateToProps(state){
  //console.log('statestate',state);
  return {
    count: state.home.count,
    dataSource: state.home.dataSource
  }
}

export default connect(mapStateToProps,actionCreators)(Home);
