export default function getRefs() {
    return {
        form: document.querySelector('.search-form'),
        searchInput: document.querySelector('[type="text"]'),
        searchBtn: document.querySelector('[type="submit"]'),
        galleryEl: document.querySelector('.gallery'),
        loadMoreBtn: document.querySelector('.load-more'),
    };
    
}