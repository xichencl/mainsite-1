import axios from 'axios';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

import { GET_ALL_TASKS, POST_TASK, CHANGE_STATUS, DELETE_TASK } from './types';

export const getTasks = (tasks) => ({type: GET_ALL_TASKS, tasks});
export const newChecklist = (tasks) => ({type: NEW_CHECKLIST, tasks});
export const addTask = (task) => ({type: POST_TASK, task});
export const changeStatus = (task) => ({type: CHANGE_STATUS, task});

import API_URL from './index' // database server URL

/////////////// ACTION DISPATCHER FUNCTIONS///////////////////
export const getAllTasks = () => dispatch => {
  axios.get(`${API_URL}/tasks`) // this is the link to the db user->checklist
    .then((response) => {
      return response.data;
    })
    .then((tasks) => {
      dispatch(getTasks(tasks))
    })
    .catch((err) => {
      console.error.bind(err);
    })
};

// export const postNewTask = (task) => dispatch => {
//   dispatch(addTask({title: task, metafields: [{value: false}], slug: formatSlug(task)}));
//   axios.post(`https://api.cosmicjs.com/v1/your-bucket-slug-name/add-object`, {type_slug: "tasks", title: task, content: "New Task",
//     metafields: [
//       {
//         title: "Is Complete",
//         key: "is_complete",
//         value: false,
//         type: "text"
//       }
//     ]})
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((err) => {
//       console.error.bind(err);
//     })
// };

// create new checklist
export const newChecklist = () => dispatch => {
	axios.get('./checklist_smallClaims.json')
		.then((response) => {
			return response.data;
		})
		.catch(err) => {
			console.error.bind(err);
		}
}

// toggle visibility
export const putChangeStatus = (task, bool) => (dispatch) => {
  dispatch(changeStatus(task));
  axios.put(`${API_URL}/tasks`, {
    metafields: [
      {
        title: "Is Complete",
        key: "is_complete",
        value: !bool,
        type: "text"
      }
    ]})
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.error.bind(err);
    })
};
