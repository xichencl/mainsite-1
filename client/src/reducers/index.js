import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import userReducer from './user_reducer';
// import communicationReducer from './communication_reducer';
// import customerReducer from './customer_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducer,
  chat: require('../components/chatbot/reducers.js')
});

export default rootReducer;

  // communication: communicationReducer,
  // customer: customerReducer,