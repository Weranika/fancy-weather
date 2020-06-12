import { app } from './index';

export default class ButtonsLanguage {
    constructor() {        
        this.pl = document.getElementById('butt-pl');
        this.en = document.getElementById('butt-en');           
        this.pl.addEventListener('click', this.translate.bind(this));
        this.en.addEventListener('click', this.translate.bind(this));
    }

    translate(event) {                  
        if (event.currentTarget.id === "butt-pl") {            
            event.currentTarget.classList.add("active");
            this.en.classList.remove('active');
            this.lang = 'pl';
            app.setLang(this.lang);
            app.start();            
        }
        else {            
            event.currentTarget.classList.add("active");
            this.pl.classList.remove('active');
            this.lang = 'en';
            app.setLang(this.lang);
            app.start();        
        }        
    }
}
const buttonsLang = new ButtonsLanguage();      
