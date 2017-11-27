//reducers/todo.js
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'LOAD_CHECKLIST':
      // const newChecklist = state.slice();
      // newChecklist.push(action.payload)
      // console.log('load checklist reducer', newChecklist)
      // return { 
      //   newChecklist 
      // };
      console.log('reducer state', action.payload)
      return {
        ...state, checklist: action.payload
      }
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos 
