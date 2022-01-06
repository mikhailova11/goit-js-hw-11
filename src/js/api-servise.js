import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from "axios";
import getRefs from "./get-refs";
const refs = getRefs();

export default class NewsApiService {
    constructor(){
        this.searchQuery = '';
        this.page = 1;
    }

    async fetchCart() {
        const API_KEY =  '24874837-d0558540b09f2ee4305703a66';
        const BASE_URL = 'https://pixabay.com/api/';
        try {
            const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`);
            const hits = response.data;

            refs.totalQuantityOfImages += hits.hits.length; 
            refs.totalHits = hits.totalHits;

            if (this.page === 1 & hits.total !== 0) {
                Notify.success(`Hooray! We found ${refs.totalHits} images.`);   
            }
            if (refs.totalQuantityOfImages > refs.totalHits && hits.total !==0) {
                Notify.failure("We're sorry, but you've reached the end of search results.")
                refs.totalQuantityOfImages = 0;
        
                return;
            }
                
            if (hits.hits.length === 0) {
                Notify.failure('Sorry, there are no images matching your search query. Please try again.');
                refs.totalQuantityOfImages = 0;

                return;
            }
            

            this.incrementPage();


            return hits;
        } catch (error) {
            Notify.failure `${error}`;
        }

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

