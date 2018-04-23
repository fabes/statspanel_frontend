import { AUTH_CONSTANTS } from '../constants/auth';

const initial_state = {
  current_user: {},
  valid_user_token: false,
}

const users = (state = initial_state, action) => {
  switch (action.type) {
    case AUTH_CONSTANTS.user_sign_in:
      return { ...state, current_user: action.data }
    case AUTH_CONSTANTS.user_sign_up:
      return { ...state, current_user: action.data }
    case AUTH_CONSTANTS.check_valid_token:
      return { ...state, valid_user_token: action.data }
    case AUTH_CONSTANTS.set_invalid_token:
      return { ...state, valid_user_token: action.data }
    case AUTH_CONSTANTS.reset_current_user:
      return { ...state, current_user: action.data }

    default:
      return state;
  }
}

export default users;