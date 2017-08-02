const defaultState = [
  {
    message: 'Hello, I\'m Courtney!  How can I help you?',
    type: 'text',
    isBot: true,
  },
  {
    message: 'Small Claims',
    type: 'button',
    isBot: true,
  }
];

module.exports = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHAT_ADD_MESSAGE': {
      const newChat = state.slice();
      newChat.push(action.payload);

      return newChat;
    }
  }

  return state;
};