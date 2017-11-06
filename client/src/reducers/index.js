import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import userReducer from './user_reducer';
import chatlog from './chatlog';
import chatUserInput from './chatUserInput';
import botStatusReducer from './botStatusReducer';
// import { routerStateReducer }      from 'redux-router';
// import { themeReducer }            from 'redux-theme';

// import communicationReducer from './communication_reducer';
// import customerReducer from './customer_reducer';
const chatReducer = combineReducers({
	log:chatlog, 
	input:chatUserInput,
	theme:botStatusReducer.themeReducer,
  botVisibility:botStatusReducer.visibilityReducer,
  ai: botStatusReducer.aiReducer,
	// router:routerStateReducer
});

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducer,
  chat: chatReducer,
});

export default rootReducer;

  // communication: communicationReducer,
  // customer: customerReducer,