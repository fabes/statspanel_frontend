import { AUTH_CONSTANTS } from '../constants/auth';

const initial_state = {
  current_user: {}
}

const users = (state = initial_state, action) => {
  switch (action.type) {
    case AUTH_CONSTANTS.user_sign_in:
      return { ...state, current_user: action.data }
    default:
      return state;  
  }
}

export default users;