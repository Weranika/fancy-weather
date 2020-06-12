import { app } from "./index";

export default class ButtonSearch {
    constructor() {
        const buttonSearch = document.getElementById('button-search');   
        this.inputSearch = document.getElementById('search');         
        buttonSearch.addEventListener('click', this.searchByCity.bind(this));
    }

    searchByCity(event) {
        this.city = this.inputSearch.value;
        app.setCity(this.city);
        app.start();              
    }        
}