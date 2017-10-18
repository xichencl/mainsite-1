import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import userReducer from './user_reducer';
import chatlog from './chatlog';
import chatUserInput from './chatUserInput';
// import communicationReducer from './communication_reducer';
// import customerReducer from './customer_reducer';
const chatReducer = combineReducers({
	log:chatlog, 
	input:chatUserInput
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