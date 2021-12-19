import templateCart from '../templetes/cart.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import API from './api-servise';
import getRefs from "./get-refs";
//import SimpleLightbox from "simplelightbox";
//import "simplelightbox/dist/simple-lightbox.min.css";
import '../sass/main.scss';

const refs = getRefs();

function renderCart(cart) {
    refs.galleryEl.innerHTML = templateCart(cart);
    //let totalHits = 
    if (cart) {
        Notify.info(`Hooray! We found totalHits ${totalHits} images.`);
        return
      }

      if (cart = []) {
        Notify.failure("Sorry, there are no images matching your search query. Please try again.")
        return
      }
    
};

refs.form.addEventListener('submit', onSearch);

function onSearch(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const searchQuery = form.elements.searchQuery.value;

    API.fetchSearch(searchQuery)
    .then(renderCart)
    .catch(error => {
        console.log(error);
        Notify.failure("Sorry, there are no images matching your search query. Please try again.")})
    .finally(()=> form.reset())
    
}


