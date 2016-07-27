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
  return (
    <TouchableWithoutFeedback
      onPress={() => props.logout()}>
      <View>
        <Text style={styles.button}>登出</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

LogoutButton.propTypes = {
  logout: T.func,
};

export default connect(
  () => ({

  }),
  dispatch => bindActionCreators(AuthActions, dispatch),
)(LogoutButton);
