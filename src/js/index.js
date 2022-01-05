
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import NewsApiService from './api-servise';
import getRefs from "./get-refs";
import templateCart from '../templetes/cart.hbs';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import '../sass/main.scss';

const refs = getRefs();
const newsApiService = new NewsApiService();


refs.form.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', fetchCart);
 
    
 
function onSearch(e) {
    e.preventDefault();

    newsApiService.searchQuery = e.currentTarget.elements.searchQuery.value;
    refs.loadMoreBtn.classList.add('is-hidden'); 
    newsApiService.resetPage(); 
    clearCartContainer();
    fetchCart();
       
}
 function clearCartContainer() {
     refs.galleryEl.innerHTML = '';
     
 }
 function fetchCart() {
     newsApiService.fetchCart()
    .then(hits => {
        clearCartContainer()
        renderCart(hits);
        refs.loadMoreBtn.classList.remove('is-hidden'); 
    })  
 }
 function renderCart(hits) {
    refs.galleryEl.insertAdjacentHTML('beforeend', templateCart(hits));
    
 };


//pagination





new SimpleLightbox('.gallery a', {
    disableRightClick: true,
     scrollZoom: false,
     captionDelay: 250,
     captionsData: 'alt', 
 }); 
