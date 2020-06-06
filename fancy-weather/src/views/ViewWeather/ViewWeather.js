export default class ViewWeatherModel {
    constructor(currentWeather, futureWeather, weatherIcon, lang) {
        this.currentWeather = currentWeather;
        this.futureWeather = futureWeather;
        this.weatherIcon = weatherIcon;
        this.lang = lang;
    }

    render() {
        document.getElementById("current-temperature").innerHTML = this.currentWeather.metricWalue;
        document.getElementById("main-icon").src = `../../src/img/icons/${this.weatherIcon}-s.png`;       
        document.getElementById("weather-text").innerHTML = this.currentWeather.weatherText;
        document.getElementById("real-feel").innerHTML = this.currentWeather.realFeel;
        document.getElementById("wind-speed").innerHTML = this.currentWeather.windSpeed;
        document.getElementById("wind-unit").innerHTML = this.currentWeather.windUnit;
        document.getElementById("humidity").innerHTML = this.currentWeather.humidity;                      

        const dateItem = {
            weekday: 'long'
          }; 
        for (let i = 0; i < this.futureWeather.length; i++) {
            const date = new Date(this.futureWeather[i].Day);        
            document.getElementById(`day-${i}`).innerHTML =  date.toLocaleString(this.lang, dateItem);
            document.getElementById(`day-${i}-temp`).innerHTML = this.futureWeather[i].DayEverege;
            document.getElementById(`day-${i}-icon`).src = `../../src/img/icons/${this.futureWeather[i].DayIcon}-s.png`;
        }        
    }
    
}