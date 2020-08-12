import React from "react";
import { Provider } from 'react-redux'
import { routes } from 'src/routes'
import { Route,Switch  } from 'react-router-dom'
import { withRouter } from "react-router";

import { updateLocation } from 'src/store/location';

import Layout from './layout';
import './App.scss';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    //console.log('getDerivedStateFromProps',nextProps);
    const { location } = nextProps.history;
    updateLocation(nextProps.store)(location);
    return null
  }


  render(){
    const { match, location, history,store } = this.props;
    return (
      <Provider store={store}>
        <Layout>
          {
            <Switch>
              {routes.map(({ path, exact, component: C, ...rest }) => (
                <Route
                  key={path}
                  path={path}
                  exact={exact}
                  render={(props) => (
                    <C {...props} {...rest} />
                  )}
                />
              ))}
            </Switch>
          }
        </Layout>
      </Provider>
    )
  }
}

export default withRouter(App);
