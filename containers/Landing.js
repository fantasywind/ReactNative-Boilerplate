import React, {
  PropTypes as T,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { PROFILE_ROUTE } from './MainBoard.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../actions/Auth.js';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonWrap: {
    marginHorizontal: 24,
    borderColor: '#0374ac',
    backgroundColor: '#08c',
    borderRadius: 2,
    marginTop: 24,
  },
  buttonWrapActived: {
    backgroundColor: '#0374ac',
  },
  button: {
    paddingVertical: 12,
    textAlign: 'center',
    color: '#fff',
    letterSpacing: 2,
    fontWeight: '500',
    paddingHorizontal: 32,
  },
});

function Landing(props) {
  return (
    <View style={styles.wrapper}>
      <Text>Main View</Text>
      <TouchableHighlight
        activeOpacity={0.8}
        style={styles.buttonWrap}
        underlayColor={styles.buttonWrapActived}
        onPress={() => props.navigator.push({ type: PROFILE_ROUTE })}>
        <Text style={styles.button}>Profile</Text>
      </TouchableHighlight>
    </View>
  );
}

Landing.propTypes = {
  toLoginPage: T.func,
  navigator: T.object,
};

export default connect(
  state => ({
    isLogined: state.Auth.isLogined,
  }),
  dispatch => bindActionCreators(AuthActions, dispatch),
)(Landing);
