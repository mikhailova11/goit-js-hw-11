export default class NewsApiService {
    constructor(){
        this.searchQuery = '';
        this.page = 1;
    }

    fetchCart() {
        const API_KEY =  '24874837-d0558540b09f2ee4305703a66';
        const BASE_URL = 'https://pixabay.com/api/';

        return fetch(`${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`)
        .then(response => response.json())
        .then(({hits}) => {
            this.incrementPage();
            return hits;
        })
    }
    
    incrementPage(){
        this.page += 1;
    }
    resetPage(){
        this.page = 1;
    }
    get query(){
        return this.searchQuery;
    }
    set query(newQuery){
        this.searchQuary = newQuery;
    }
}

