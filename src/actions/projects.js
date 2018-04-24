import { PROJECT_CONSTANTS } from '../constants/projects';
import { app_config } from '../config';

const fetch_all_projects = (projects) => ({
  type: PROJECT_CONSTANTS.fetch_list,
  data: projects,
});

export const fetch_projects_list = () => {
  return (dispatch, getState) => {
    let req_data = app_config.request_head('GET', {}, getState());

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

export const create_new_project = (project) => {
  return (dispatch, getState) => {
    const body_data = JSON.stringify(project);
    let req_data = app_config.request_head('POST', body_data, getState());

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