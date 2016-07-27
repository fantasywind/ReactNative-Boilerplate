import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

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

function Profile() {
  return (
    <View style={styles.wrapper}>
      <Text>Profile Page</Text>
    </View>
  );
}

export default Profile;
