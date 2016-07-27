import React, {
  Component,
  PropTypes as T,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../actions/Auth.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    color: '#4a4a4a',
  },
  form: {
    alignSelf: 'stretch',
    marginHorizontal: 48,
    marginVertical: 24,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#d2d2d2',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  group: {
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  label: {
    fontSize: 14,
    color: '#4a4a4a',
  },
  input: {
    borderColor: '#d2d2d2',
    flex: 1,
    marginHorizontal: 12,
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
    paddingLeft: 2,
    fontWeight: '500',
  },
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account: '',
      password: '',
    };
  }

  componentWillMount() {
    if (this.props.isLogined) {
      this.props.toMainPage();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLogined && !this.props.isLogined) {
      nextProps.toMainPage();
    }
  }

  login() {
    const {
      account,
      password,
    } = this.state;

    const {
      login,
    } = this.props;

    if (account && password) {
      login();
    } else {
      Alert.alert('欄位不完全', '請填寫帳號與密碼欄位登入系統！');
    }
  }

  render() {
    const {
      account,
      password,
    } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.form}>
          <View style={styles.group}>
            <Text style={styles.label}>帳號</Text>
            <TextInput
              onChangeText={(text) => this.setState({ account: text })}
              value={account}
              style={styles.input}
              placeholder="username@rytass.com" />
          </View>
          <View style={styles.group}>
            <Text style={styles.label}>密碼</Text>
            <TextInput
              onChangeText={(text) => this.setState({ password: text })}
              value={password}
              style={styles.input}
              placeholder="complex text" />
          </View>
          <TouchableHighlight
            activeOpacity={0.8}
            style={styles.buttonWrap}
            underlayColor={styles.buttonWrapActived}
            onPress={() => this.login()}>
            <Text style={styles.button}>登入系統</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

LoginPage.propTypes = {
  login: T.func,
  toMainPage: T.func,
  isLogined: T.bool,
};

export default connect(
  state => ({
    isLogined: state.Auth.isLogined,
  }),
  dispatch => bindActionCreators(AuthActions, dispatch),
)(LoginPage);
