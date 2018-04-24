import { PROJECT_CONSTANTS } from '../constants/projects';

const initial_state = {
  list: {},
}

const projects = (state = initial_state, action) => {
  switch (action.type) {
    case PROJECT_CONSTANTS.fetch_list:
      return { ...state, list: action.data }

    default:
      return state;
  }
}

export default projects;