export default class ButtonsTemp {
    constructor(currentWeather, futureWeather) {
        this.currentWeather = currentWeather;
        this.futureWeather = futureWeather;
        this.cels = document.getElementById('temp-cels');        
        this.far = document.getElementById('temp-far');          
        this.cels.addEventListener('click', this.temperatureToggle.bind(this));
        this.far.addEventListener('click', this.temperatureToggle.bind(this));       
    }

    temperatureToggle(event) {  
        if (event.currentTarget.id === "temp-cels") {     
            document.getElementById("current-temperature").innerHTML = this.currentWeather.metricWalue;
            for (let i = 0; i < this.futureWeather.length; i++) { 
                document.getElementsByClassName("day-temp")[i].innerHTML = this.futureWeather[i].DayEverege;
            };
            event.currentTarget.classList.add("active");
            this.far.classList.remove('active');
            }        
        else {     
            document.getElementById("current-temperature").innerHTML = Math.round((this.currentWeather.metricWalue * (9/5) + 32));
            for (let i = 0; i < this.futureWeather.length; i++) {
                document.getElementsByClassName("day-temp")[i].innerHTML = Math.round((this.futureWeather[i].DayEverege * (9/5) + 32));
            };
            event.currentTarget.classList.add("active");
            this.cels.classList.remove('active');           
        }
    }   
}

