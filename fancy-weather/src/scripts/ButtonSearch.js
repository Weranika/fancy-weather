import { app } from "./index";

export default class ButtonSearch {
    constructor() {
        const buttonSearch = document.getElementById('button-search');
        buttonSearch.addEventListener('click', this.searchByCity.bind(this));

        const input = document.getElementById('search');
        this.inputSearch = input;
        input.addEventListener('keyup', event => {
            if( event.code === 'Enter' ) {
                console.log('input');
                this.searchByCity();
            }
        });
    }

    searchByCity(event) {
        this.city = this.inputSearch.value;
        console.log(this.city);
        app.setCity(this.city);
        app.start();
    }
}