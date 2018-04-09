import { AUTH_CONSTANTS } from '../constants/auth';

const perform_sign_in = (user_input) => ({
  type: AUTH_CONSTANTS.user_sign_in,
  user_input,  
})

export const sign_in = (user_input) => {
  // use fetch
}