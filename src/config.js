export const app_config = {
  base_api_url: 'http://localhost:3000/api/v1/',
  request_head: (req_method, req_body, state) => {
    const auth_token = state.users.current_user.token;
    const data = {
      method: req_method === undefined ? 'GET' : req_method,
      body: req_body,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Auth-Token' : auth_token,
      }
    }
    return data;
  }
}