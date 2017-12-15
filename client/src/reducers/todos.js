import checklistTemplate from '../../data/checklist_smallClaims';

const todo = (state, action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return {
      id: action.id,
      text: action.text,
      completed: false
    }
  case 'TOGGLE_TODO':
    if (state.id !== action.id) {
      return state
    }
    return Object.assign({}, state, {
      completed: !state.completed
    })
  case 'ACCORDION_TODO':
    if(state.id != action.id) {
      return state
    }
    return Object.assign({}, state, {
      expanded: !state.completed
    })
  default:
    return state
  }
}

const todos = (state = checklistTemplate, action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return [
      ...state,
      todo(undefined, Object.assign(action, {
        id: state.length
      }))
    ]
  case 'TOGGLE_TODO':
    return state.map(t =>
      todo(t, action)
    )
  case 'ACCORDION_TODO':
    return state.map(t =>
      todo(t, action)
    )
  // case 'GET_TODO_DATA_RECEIVED':
  //   return action.data;
  
  case 'LOAD_TODOS':
    // console.log("UPDATE_TODO action payload: ", action.payload);
    // console.log("Old State: ", state);
    if (state.length > 0){
      console.log("loading updated todos");
      let newState = state.slice();
      newState = newState.map((t, i) => ({
        // console.log("old todo": todo);
        ...t,
        completed : action.payload[i].completed
      })
      );
      console.log("New State: ", newState);
      return newState;
    }else{
      console.log("loading template");
      return action.data;
    }


  default:
    return state
  }

}

export default todos