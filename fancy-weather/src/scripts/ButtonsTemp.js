import { app } from "./index";

export default class ButtonsTemp {
    constructor() {
        this.cels = document.getElementById('temp-cels');        
        this.far = document.getElementById('temp-far');          
        this.cels.addEventListener('click', this.temperatureToggle.bind(this));
        this.far.addEventListener('click', this.temperatureToggle.bind(this));       
    }

    temperatureToggle(event) {      
        if (event.currentTarget.id === "temp-cels") {  
            event.currentTarget.classList.add("active");
            this.far.classList.remove('active');
            this.temperature = 'true';
            app.setTemp(this.temperature);
            app.start();
            }        
        else { 
            event.currentTarget.classList.add("active");
            this.cels.classList.remove('active');
            this.temperature = 'false';
            app.setTemp(this.temperature);
            app.start();  
        }
    }   
}
