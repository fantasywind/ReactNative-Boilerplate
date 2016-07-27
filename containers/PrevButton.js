import React, {
  PropTypes as T,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../actions/Auth.js';

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    color: '#4a4a4a',
    marginTop: 8,
  },
});

function LogoutButton(props) {
  if (props.navigator.getCurrentRoutes().length <= 1) {
    return null;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => props.navigator.pop()}>
      <View>
        <Text style={styles.button}>返回</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

LogoutButton.propTypes = {
  navState: T.object,
  navigator: T.object,
};

export default connect(
  () => ({

  }),
  dispatch => bindActionCreators(AuthActions, dispatch),
)(LogoutButton);
