var deepcopy = require('deepcopy'); 

const defaultState = [
  {
    message:
      "Hello, I'm Courtney!  I'm here to help you find information and resources about your case. To begin, you may select a case type below, or tell me briefly what brought you here.",
    type: 'message',
    isBot: true
  },
  // {
    // message: 'Tell briefly what brought you here.',
    // type: 'message',
    // isBot: true
  // },
  // {
    // message: 'Or you can choose a case type below.',
    // type: 'message',
    // isBot: true
  // },
  {
    message: 'Small Claims',
    type: 'button',
    isBot: true
  },
  {
    message: 'Guardianship',
    type: 'button',
    isBot: true
  },
  {
    message: 'Family Law',
    type: 'button',
    isBot: true
  },
  {
    message: 'Eviction',
    type: 'button',
    isBot: true
  },
  {
    message: 'Domestic Violence',
    type: 'button',
    isBot: true
  },
  {
    message: 'Traffic',
    type: 'button',
    isBot: true
  }
];

module.exports = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHAT_ADD_MESSAGE': {
      const newChat = state.slice(); //create a new array containing the same elements as defaultState
      newChat.push(action.payload); //append to the end of the array

      return newChat;
    }
	case 'RESET_BOT':{
	  return deepcopy(defaultState);
	}
  }

  return state;
};
