import fetch from "node-fetch";

const API_KEY = `331e69c9`;
const API_URL = "http://www.omdbapi.com/";


export const getMovies = (title) => {
  let REQUST_URL = API_URL;
  REQUST_URL += `?s=${title}`;
  REQUST_URL += `&apikey=${API_KEY}`;
  return fetch(`${REQUST_URL}`).then(res => res.json()).then(json => json.Search);
}
