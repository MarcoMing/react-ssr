import React from "react";
import { connect } from 'react-redux';
import { Button } from 'antd';
import { actionCreators } from './redux';
import './home.scss';

import npmImgs from './images/npm.png';
//console.log('npmImgs',npmImgs);

class Home extends React.PureComponent {

  constructor(props){
    super(props);
    console.log('constructor');
    this.state = {
      test: 1
    }
  }

  //componentWillMount、componentWillReceiveProps
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    return null
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  componentDidMount(){
    console.log('componentDidMount');
    //this.props.getUser()
  }

  render() {
    console.log('render');
    const { dataSource ,count, user} = this.props;
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
        <p style={{overflow: 'hidden'}}>
          result:
          { user && JSON.stringify(user) }
        </p>
        <div className="text">this is a text!</div>
        <span className="test" style={{display: 'block',fontSize: 18}}>test</span>

        <img src={npmImgs} onClick={()=> this.props.getUser()}/>

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
    dataSource: state.home.dataSource,
    user: state.home.user
  }
}

export default connect(mapStateToProps,actionCreators)(Home);
