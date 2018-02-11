import axios from 'axios';
import { FETCH_SITE_CONTENT } from './types'
import { FETCH_ASSET } from './types'

// export const FETCH_SITE_CONTENT = 'FETCH_SITE_CONTENT';
// export const FETCH_POST = 'FETCH_POST';
// export const FETCH_ASSET = 'FETCH_ASSET';


const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'x8bmio1z72gj';
const API_TOKEN = '43bd55625a6f64960d215a703e1def27bcbbdf9a912732b32d153356b1fce40c';

export function fetchCategories(content_type) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=${content_type}`);
  console.log('fetch categories action')
  return {
    type: FETCH_SITE_CONTENT,
    payload: request
  };
}

export function fetchAsset(id) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/assets/${id}?access_token=${API_TOKEN}`);
  console.log('fetch assets action');
  return {
    type: FETCH_ASSET,
    payload: request
  };
}

// {space_id}/{asset_id}/{token}/{name}

//  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/assets/${id}?access_token=${API_TOKEN}`);


// example image id 59Km2bLlde0SaGoK68GQWC

//when I come back grom luch: figre out how to pass props to other components from test-home OR how to 
// look up content using sys...? ??? or content_Type call/...