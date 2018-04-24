import { PROJECT_CONSTANTS } from '../constants/projects';
import { app_config } from '../config';

const fetch_all_projects = (projects) => ({
  type: PROJECT_CONSTANTS.fetch_list,
  data: projects,
});

export const fetch_projects_list = () => {
  return (dispatch, getState) => {
    const state = getState();
    const auth_token = state.users.current_user.token;
    let fetch_data = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Auth-Token' : auth_token,
      }
    }

    fetch(`${app_config.base_api_url}projects`, fetch_data)
      .then(res => res.json())
      .then(data => {
        dispatch(fetch_all_projects(data.data))
      })
      .catch(e => {
        console.log('error', e);
      })
  }
}

export const create_new_project = (project) => {
  return (dispatch, getState) => {
    const state = getState();
    const auth_token = state.users.current_user.token;
    let req_data = {
      method: 'POST',
      body: JSON.stringify(project),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Auth-Token' : auth_token,
      }
    }

    fetch(`${app_config.base_api_url}projects`, req_data)
      .then(res => res.json())
      .then(data => {
        dispatch(fetch_all_projects(data.data))
      })
      .catch(e => {
        console.log('error', e);
      })
  }
}