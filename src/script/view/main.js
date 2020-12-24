import '../component/movie-item.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
 
const main = () => {
   const searchElement = document.querySelector("search-bar");
   const movieItemElement = document.querySelector("movie-item");
 
   const onButtonSearchClicked = async () => {
       try {
           const result = await DataSource.searchClub(searchElement.value);
           renderResult(result);
       } catch (message) {
           fallbackResult(message)
       }
   };
 
   const renderResult = results => {
       clubItemElement.movies = results;
   };
 
   const fallbackResult = message => {
       movieItemElement.renderError(message);
   };
   searchElement.clickEvent = onButtonSearchClicked;
};
 
export default main;