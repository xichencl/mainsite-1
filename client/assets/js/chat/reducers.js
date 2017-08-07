import { combineReducers } from 'redux';


module.exports = combineReducers({
  log: require('./reducers/chatlog.js'),
  input: require('./reducers/userInput.js')
});
