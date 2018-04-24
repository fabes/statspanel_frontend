import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import users from './auth';
import projects from './projects';

const config = { 
	key: 'root', 
	storage, 
	//debug: true //to get useful logging
};

const reducers = combineReducers({
  users,
  projects,
})


export default persistReducer(config, reducers)