class MovieList extends HTMLElement {
     
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML= `
        <style>
        * {
            margin: 0 -15px; }
        .movie {
            width: 25%;
            padding: 0 15px;
            float: left;
            margin-bottom: 30px; }
        @media screen and (min-width: 991px) {
        .movie:nth-child(4n+1) {
            clear: both; } }
        @media screen and (max-width: 990px) {
        .movie {
            width: 50%; }
        .movie:nth-child(4n+1) {
            clear: none; }
        .movie:nth-child(2n+1) {
            clear: both; } }
        @media screen and (max-width: 480px) {
        .movie {
            width: 100%;
            clear: both; } }
        .movie .movie-poster {
            border-radius: 5px;
            overflow: hidden;
            margin-bottom: 20px;
            border: 1px solid transparent; }
        .movie .movie-poster > img {
            display: block;
            width: 100%;
            max-width: 100%;
            height: auto;
            -webkit-transition: .3s ease;
            transition: .3s ease; }
        .movie:hover img {
            -webkit-transform: scale(1.2);
            -ms-transform: scale(1.2);
            transform: scale(1.2); }
        .movie .movie-title {
            font-size: 24px;
            font-size: 1.6em;
            font-weight: 300;
            margin-bottom: 20px; }
        .movie .movie-title > a {
            color: #84878d;
            -webkit-transition: .3s ease;
            transition: .3s ease; }
        .movie .movie-title > a:hover {
            color: #ffaa3c; }
        
            </style>

            <figure class="movie-poster"><img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${this._movie.poster_path}" alt="#"></figure>
			<div class="movie-title"><a>${this._movie.original_title}t</a></div>
			<p>${this._movie.overview}</p>
        `;
        }
    }

 customElements.define("movie-list", MovieList);
