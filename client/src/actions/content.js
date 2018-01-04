import axios from 'axios';
import { FETCH_SITE_CONTENT } from './types'

const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'x8bmio1z72gj';
const API_TOKEN = '43bd55625a6f64960d215a703e1def27bcbbdf9a912732b32d153356b1fce40c';

export function fetchCategories() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=category`);
  console.log('action request')
  return {
    type: FETCH_SITE_CONTENT,
    payload: request
  };
}
