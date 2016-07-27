import { replace } from 'react-router-redux';

export const LOGIN_SUCCESS = Symbol('LOGIN_SUCCESS');
export const LOGOUT = Symbol('LOGOUT');

export function toMainPage() {
  return replace('/');
}

export function toLoginPage() {
  return replace('/login');
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function login(account, password) {
  return {
    type: LOGIN_SUCCESS,
    account,
    password,
  };
}
