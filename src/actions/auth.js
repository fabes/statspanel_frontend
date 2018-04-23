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

// const perform_sign_up = (user_input) => ({
//   type: AUTH_CONSTANTS.user_sign_up,
//   user_input,  
// })

export const sign_in = (user_input) => {
  return (dispatch, getState) => {
    let post_data = {
      method: 'POST',
      body: JSON.stringify(user_input),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }

    fetch(app_config.base_api_url + 'users/sign_in', post_data)
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
    let post_data = {
      method: 'POST',
      body: JSON.stringify(user_input),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }

    fetch(app_config.base_api_url + 'users', post_data)
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
    const token = localStorage.getItem('auth_token');

    let header_data = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Auth-Token': token,
      }
    }

    fetch(app_config.base_api_url + 'has-valid-token', header_data)
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