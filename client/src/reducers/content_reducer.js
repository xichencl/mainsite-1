// import { FETCH_PAGE_DATA, ERROR_RESPONSE } from '../actions/types';
import { FETCH_CATEGORIES } from '../actions/types';
import { FETCH_PARTIES } from '../actions/types';
import { FETCH_FAQS } from '../actions/types';
import { FETCH_CONTENT } from '../actions/types';
import { FETCH_RESOURCE_LINKS } from '../actions/types';
import { FETCH_STAGES } from '../actions/types';
import { FETCH_VIDEOS } from '../actions/types';

import { STORE_STAGE_ID } from '../actions/types';

const INITIAL_STATE = { 
  categories: [],
  parties: [],
  stages: [],
  resources: [],
  faqs: [],
  tabs: [], 
  videos: [],
  videoURLs: {},
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
  case FETCH_VIDEOS:
    const videoURLs = {};
    const videos = action.payload.data.includes.Asset;
    const length = videos.length;

    for (let i = 0; i < length; i++) {
      let video = videos[i];
      let file = video.fields.file;
      
      videoURLs[video.fields.title] = file.url;
    }

    return { ...state, videos, videoURLs };
  case FETCH_RESOURCE_LINKS:
    return { ...state, resources: action.payload.data.items };
  case STORE_STAGE_ID:
    return { ...state, stageId: action.payload };
  default:
    return state;
  }
}

