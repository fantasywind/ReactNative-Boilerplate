import React, {
  PropTypes as T,
  Component,
} from 'react';
import {
  StyleSheet,
  Navigator,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../actions/Auth.js';

import Landing from '../containers/Landing.js';
import Profile from '../components/Profile.js';
import LogoutButton from '../containers/LogoutButton.js';
import PrevButton from '../containers/PrevButton.js';

const styles = StyleSheet.create({
  wrapper: {

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navigatorBar: {
    backgroundColor: 'transparent',
    borderBottomColor: '#08c',
    borderBottomWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  pageTitle: {
    fontSize: 16,
    marginTop: 8,
  },
});

export const LANDING_ROUTE = Symbol('LANDING_ROUTE');
export const PROFILE_ROUTE = Symbol('PROFILE_ROUTE');

class MainBoard extends Component {
  componentWillMount() {
    if (!this.props.isLogined) {
      this.props.toLoginPage();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isLogined && this.props.isLogined) {
      nextProps.toLoginPage();
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ type: LANDING_ROUTE }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => (
                <PrevButton navState={navState} navigator={navigator} />
              ),
              RightButton: () => (
                <LogoutButton />
              ),
              Title: () => <Text style={styles.pageTitle}>Navigation Bar</Text>,
            }}
            style={styles.navigatorBar} />
        }
        renderScene={(route, navigator) => {
          switch (route.type) {
            case PROFILE_ROUTE:
              return <Profile navigator={navigator} />;

            case LANDING_ROUTE:
            default:
              return <Landing navigator={navigator} />;
          }
        }}
        style={styles.wrapper} />
    );
  }
}

MainBoard.propTypes = {
  children: T.node,
  isLogined: T.bool,
  toLoginPage: T.func,
};

export default connect(
  state => ({
    isLogined: state.Auth.isLogined,
  }),
  dispatch => bindActionCreators(AuthActions, dispatch),
)(MainBoard);
