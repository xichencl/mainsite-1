//initiate your starting state
let initial = {
  tasks: []
};
const checklistReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_TASKS:
      return Object.assign({}, state, {tasks: action.tasks.objects});
    case NEW_CHECKLIST:
    	return Object.assign({}, state, {tasks: })
    case POST_TASK:
      let updatedTasks = [action.task].concat(state.tasks);
      return Object.assign({}, state, {tasks: updatedTasks});
    case CHANGE_STATUS:
      let newArr = state.tasks.map((task) => {
        if(task.slug === action.task.slug) task.metafields[0].value = !task.metafields[0].value;
        return task;
      });
      return Object.assign({}, state, {tasks: newArr});

    default:
      return state;
  }
};
export default checklistReducer;