import axios from "axios";

let myApiKey = `19826807-5678a17c69c5850135e2e3194`;
const baseURL = `https://pixabay.com/api/`;
const perPage = 12;
// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

const fetchImages = ({ query = "", currentPage = 1 }) => {
  const url = `${baseURL}?q=${query}&page=${currentPage}&key=${myApiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;
  return axios.get(url).then(({ data }) => {
    return data.hits;
  });
};

export default fetchImages;
