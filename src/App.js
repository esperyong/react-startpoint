import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import * as actionCreators from './actions/actionCreators';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return {
    hello: state.getIn(["hello"]),
  }
};

const Home = (props) => {
  const { dispatch } = props;
  const actions = bindActionCreators(actionCreators, dispatch);
  return (
  <div>
    <div>
      <h2>Home</h2>
      <h2>Hello: {props.hello}</h2>
    </div>
    <div>
      <button onClick={(e)=>{actions.asynHello('World');}}>hello</button>
    </div>
  </div>
  );
}


const HomeContainer = connect(mapStateToProps)(Home);

const About = () =>
  <div>
    <h2>About</h2>
  </div>;

const Topic = ({ match }) =>
  <div>
    <h3>
      {match.params.topicId}
    </h3>
  </div>;

const Topics = ({ match }) =>
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>;

const BasicExample = () =>
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={HomeContainer} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  </Provider>;
export default BasicExample;