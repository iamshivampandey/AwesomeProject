import axios from 'axios';

export function httpGet(url) {
  return axios.get(url);
}

export function httpGetWithConfig(url, config) {
  return axios.get(url, config);
}

export function httpPostWithConfig(url, payload, config) {
  return axios.post(url, payload, config);
}

export function httpPost(url, payload) {
  return axios.post(url, payload);
}

export function httpPut(url, payload) {
  return axios.put(url, payload);
}

export function httpDelete(url, data) {
  return axios.delete(url, {data});
}
