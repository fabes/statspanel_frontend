import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import users from './auth';

const config = { 
	key: 'root', 
	storage, 
	//debug: true //to get useful logging
};

const reducers = combineReducers({
	users,
})


export default persistReducer(config, reducers)