class SearchBar extends HTMLElement {
     
        constructor() {
            super();
            this.shadowDOM = this.attachShadow({mode: "open"});
        }
      
        connectedCallback(){
            this.render();
        }
       
        set clickEvent(event) {
            this._clickEvent = event;
            this.render();
        }
      
        get value() {
            return this.shadowDOM.querySelector("#searchElement").value;
        }
      
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .main-navigation .menu-toggle, .main-navigation .menu, .main-navigation {
            display: inline-block;
            vertical-align: middle; }
        .main-navigation > input {
                background-color: #f0f0f0;
                border: none;
                border-left: 1px solid #eeeeef;
                border-radius: 0;
                font-family: inherit;
                font-weight: 300;
                width: 0;
                visibility: hidden;
                opacity: 0;
                -webkit-transition: .3s ease;
        }
        .main-navigation > input.active {
                    width: 200px;
                    visibility: visible;
                    opacity: 1;
                    padding: 10px; }
        .main-navigation > button {
                        background-color: transparent;
                        border: none;
                        border-left: 1px solid #eeeeef;
                        border-radius: 0;
                        border-top-right-radius: 5px;
                        border-bottom-right-radius: 5px;
                        margin-left: -5px;
                        color: inherit;
                        box-shadow: none;
                        outline: none;
                        -webkit-transition: .3s ease;
                                transition: .3s ease; }
        .main-navigation > button.active {
                          background-color: #f0f0f0; }
        
        </stye>
        <div class="main-navigation">
        <form action="#" class="search-bar">
            <input type="text" placeholder="Search..." class="active" type="search">
            <button id="searchButtonElement" type="submit"><i class="fa fa-search"></i></button>
        </form>
    </div> 
        `;
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
 }

 customElements.define("search-bar", SearchBar);


