//redux async tutorial -- did not finish.

import fetch from 'cross-fetch';
import checklistData from '../data/checklist_smallClaims.js'

import { SELECT_CHECKLIST, REQUEST_TASKS, INVALIDATE_CHECKLIST, RECEIVE_TASKS } from './types';
import { API_URL, CLIENT_ROOT_URL, errorHandler } from './index';

/// redux example 
export function selectChecklist(checklist) {
  return {
    type: SELECT_CHECKLIST,
    checklist
  }
}

function requestTasks(checklist) {
  return {
    type: REQUEST_TASKS,
    tasks
  }
}

export function invalidateChecklist(subreddit) {
  return {
    type: INVALIDATE_CHECKLIST,
    checklist
  }
}

function receiveTasks(checklist, json) {
  return {
    type: RECEIVE_TASKS,
    checklist,
    tasks: json.data.children.map(child => child.data)
  }
}

// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchTasks('reactjs'))
export function fetchTasks(checklist) {
	// Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return function (dispatch) {
  	// First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestTasks(checklist))
    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(``)
  }
}