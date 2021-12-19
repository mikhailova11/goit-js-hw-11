export default {fetchSearch};

const API_KEY =  '24874837-d0558540b09f2ee4305703a66';
const url = 'https://pixabay.com/api/';
const parameters = '&image_type=photo&orientation=horizontal&safesearch=true';
const perPage = '&per_page=40';
const page = '&page=1';


function fetchSearch(search) {
    return fetch(`${url}?key=${API_KEY}&q=${search}${parameters}${perPage}${page}`).then(response => response.json());
};