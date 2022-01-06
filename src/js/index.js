import { Notify } from 'notiflix/build/notiflix-notify-aio';
import NewsApiService from './api-servise';
import templateCart from '../templetes/cart.hbs';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import '../sass/main.scss';
import getRefs from "./get-refs";

const refs = getRefs();
const newsApiService = new NewsApiService();
const lightbox = new SimpleLightbox('.gallery a', {
    disableRightClick: true,
     scrollZoom: false,
     captionDelay: 250,
     captionsData: 'alt', 
 }); 


refs.form.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', fetchCart);
 
    
 
function onSearch(e) {
    e.preventDefault();

    newsApiService.searchQuery = e.currentTarget.elements.searchQuery.value; 
    newsApiService.resetPage(); 
    clearCartContainer();
    fetchCart();
    refs.loadMoreBtn.classList.add('is-hidden');  
}

 function clearCartContainer() {
     refs.galleryEl.innerHTML = '';
     
 }
 function fetchCart() {
    
    
     newsApiService.fetchCart()
    .then(hits => {
        clearCartContainer()
        renderCart(hits);
        if (hits) {
            refs.loadMoreBtn.classList.remove('is-hidden'); 
            return;
        };
        if (!hits) {
            refs.loadMoreBtn.classList.add('is-hidden'); 
            return;
        }
        
    })  
 }
 function renderCart(hits) {
    refs.galleryEl.insertAdjacentHTML('beforeend', templateCart(hits));
    lightbox.refresh();
    
 };


 
