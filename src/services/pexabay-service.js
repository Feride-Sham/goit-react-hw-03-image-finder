import axios from "axios";

let myApiKey = `19826807-5678a17c69c5850135e2e3194`;
axios.defaults.baseURL = `https://pixabay.com/api/`;
axios.defaults.headers.common["Authorization"] = myApiKey;

const fetchImages = (query, page) => {
  let url = `?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${this.perPage}`;
  return axios.get(url);
};
