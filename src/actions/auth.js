import { AUTH_CONSTANTS } from '../constants/auth';
import { app_config } from '../config';
import history from '../utils/history';

const perform_sign_in = (user_input) => ({
  type: AUTH_CONSTANTS.user_sign_in,
  user_input,  
})

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
        if (data !== '') {
          localStorage.setItem('auth_token', data.token);
          dispatch(perform_sign_in(data));
          history.push('/dashboard');
        }
      })
      .catch(e => {
        console.log('error =', e);
      })
  }
}