// //reducers/todo.js

// import { 
//   SELECT_CHECKLIST, 
//   INVALIDATE_CHECKLIST,
//   REQUEST_TASKS,
//   RECEIVE_TASKS
// } from '../actions'

// function selectedChecklist(state = 'reactjs', action) {
//   switch (action.type) {
//     case SELECT_CHECKLIST: 
//       return action.checklist
//     default:
//       return state
//   }
// }

// // function tasks(
// //   state = {
// //     isFetching: false,
// //     didInvalidate: false,
// //     tasks: []
// //   }, 
// //   action
// // ) {
// //   switch (action.type) {
// //     case INVALIDATE_CHECKLIST: 
// //       return Object.assign({}, state, {
// //         didInvalidate: true
// //       })
// //     case REQUEST_TASKS: 
// //       return Object.assign({}, state, {
// //         isFetching: true,
// //         didInvalidate: false
// //       })
// //     case RECEIVE_TASKS: 
// //       return Object.assign({}, state, {
// //         isFetching: false,
// //         didInvalidate: false,
// //         tasks: action.posts
// //       })
// //     default:
// //       return state
// //   }
// // }

// function tasksByChecklistType(state = {}, action) {
//   switch (action.type) {
//     case INVALIDATE_CHECKLIST:
//     case RECEIVE_TASKS:
//     case REQUEST_TASKS:
//       return Object.assign({}, state, {
//         [action.checklist]: tasks(state[action.checklist], action)
//       })
//     default: 
//       return state
//   }
// }

// const checklistReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'LOAD_CHECKLIST_REQUEST':
//       return {
//         ...state, smallClaims: action.payload
//       }
//     case 'LOAD_CHECKLIST_FAILURE':
//       return state;
//     case 'LOAD_CHECKLIST_SUCCESS':
//       return state;
//     // case 'TOGGLE_TODO':
//     //   return state.map(todo =>
//     //     (todo.id === action.id) 
//     //       ? {...todo, completed: !todo.completed}
//     //       : todo
//     //   )
//     default:
//       return state
//   }
// }

// export default checklistReducer; 



// //initiate your starting state
// // let initial = {
// //   tasks: []
// // };
// // const checklistReducer = (state = [], action) => {
// //   switch (action.type) {
// //     case 'GET_ALL_TASKS':
// //       return { ...state, tasks: action.payload }// Object.assign({}, state, {tasks: action.tasks.objects});
// //     case 'CHANGE_STATUS':
// //       return state.map(task =>
// //         (task.id === action.id) 
// //           ? {...tasks, completed: !task.completed}
// //           : task
// //       )
// //     // case NEW_CHECKLIST:
// //     // 	return Object.assign({}, state, {tasks: })
// //     // case POST_TASK:
// //     //   let updatedTasks = [action.task].concat(state.tasks);
// //     //   return Object.assign({}, state, {tasks: updatedTasks});
// //     // case CHANGE_STATUS:
// //     //   let newArr = state.tasks.map((task) => {
// //     //     if(task.slug === action.task.slug) task.metafields[0].value = !task.metafields[0].value;
// //     //     return task;
// //     //   });
// //     //   return Object.assign({}, state, {tasks: newArr});

// //     default:
// //       return state;
// //   }
// // };
// // export default checklistReducer;

// // load checklist 
//       // const newChecklist = state.slice();
//       // newChecklist.push(action.payload)
//       // console.log('load checklist reducer', newChecklist)
//       // return { 
//       //   newChecklist 
//       // };
//       // console.log('reducer state', action.payload)