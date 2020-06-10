import langEn from './langEn';
import langPl from './langPl';
import { app } from './index';

export default class ButtonsLang {
    constructor() {
        this
        this.pl = document.getElementById('butt-pl');
        this.en = document.getElementById('butt-en');
        this.langEn = langEn;
        this.langPl = langPl;        
        this.pl.addEventListener('click', this.translate.bind(this));
        this.en.addEventListener('click', this.translate.bind(this));
    }

    translate(event) {          
        const elementsToTranslate = document.querySelectorAll('[data-i18n]');        
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
const buttonsLang = new ButtonsLang();      