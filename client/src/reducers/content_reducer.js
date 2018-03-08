// import { FETCH_PAGE_DATA, ERROR_RESPONSE } from '../actions/types';
import { FETCH_CATEGORIES } from '../actions/types';
import { FETCH_PARTIES } from '../actions/types';
import { FETCH_FAQS } from '../actions/types';
import { FETCH_CONTENT } from '../actions/types';
import { FETCH_RESOURCE_LINKS } from '../actions/types';
import { FETCH_STAGES } from '../actions/types';

import { STORE_STAGE_ID } from '../actions/types';

const INITIAL_STATE = { 
  categories: [],
  parties: [],
  stages: [],
  resources: [],
  faqs: [],
  tabs: [], 
  stageId: [],
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_CATEGORIES:
    return { ...state, categories: action.payload.data.items };
  case FETCH_PARTIES:
    return { ...state, parties: action.payload.data.items };
  case FETCH_FAQS:
    return { ...state, faqs: action.payload.data.items };
  case FETCH_CONTENT:
    return { ...state, tabs: action.payload.data.items };
  case FETCH_STAGES:
    return { ...state, stages: action.payload.data.items };
  case FETCH_RESOURCE_LINKS:
    return { ...state, resources: action.payload.data.items };
  case STORE_STAGE_ID:
    return { ...state, stageId: action.payload };
  default:
    return state;
  }
}

