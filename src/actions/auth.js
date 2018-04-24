import { AUTH_CONSTANTS } from '../constants/auth';
import { app_config } from '../config';
import history from '../utils/history';

const perform_sign_in = (user_input) => ({
  type: AUTH_CONSTANTS.user_sign_in,
  data: user_input,
});

const check_valid_token = (token) => ({
  type: AUTH_CONSTANTS.check_valid_token,
  data: token,
})

const make_invalid_token = () => ({
  type: AUTH_CONSTANTS.set_invalid_token,
  data: false,
})

const clear_current_user = () => ({
  type: AUTH_CONSTANTS.reset_current_user,
  data: {},
})

export const sign_in = (user_input) => {
  return (dispatch, getState) => {
    const body_data = JSON.stringify(user_input);
    let req_data = app_config.request_head('POST', body_data, getState());

    fetch(app_config.base_api_url + 'users/sign_in', req_data)
      .then(response => response.json())
      .then(data => {
        if (data.token !== '') {
          localStorage.setItem('auth_token', data.token);
          dispatch(perform_sign_in(data));
          dispatch(check_valid_token(true));

          history.push('/dashboard');
        }
      })
      .catch(e => {
        console.log('error =', e);
      })
  }
}

export const sign_up = (user_input) => {
  return (dispatch, getState) => {
    const body_data = JSON.stringify(user_input);
    let req_data = app_config.request_head('POST', body_data, getState());

    fetch(app_config.base_api_url + 'users', req_data)
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          history.push('/sign-in');
        }
      })
      .catch(e => {
        console.log('error =', e);
      })
  }
}

export const has_valid_token = () => {
  return (dispatch, getState) => {
    let req_data = app_config.request_head('GET', {}, getState());

    fetch(app_config.base_api_url + 'has-valid-token', req_data)
      .then(response => response.json())
      .then(data => {
        if (data.has_valid_token) {
          dispatch(check_valid_token(data.has_valid_token));
        }
      })
      .catch(e => {
        console.log('error =', e);
      })
  }
}

export const set_invalid_token = () => {
  return (dispatch, getState) => {
    dispatch(make_invalid_token(false));
    dispatch(clear_current_user());
  }
}