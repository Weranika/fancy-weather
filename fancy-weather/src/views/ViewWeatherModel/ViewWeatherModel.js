export default class ViewWeatherModel {
    constructor(currentWeather, futureWeather) {
        this.currentWeather = currentWeather;
        this.futureWeather = futureWeather;
    }

    render() {
        const temperature = document.getElementById("current-temperature");
        temperature.innerHTML = this.currentWeather.metricWalue;

        const mainIcon = document.getElementById("main-icon");
        mainIcon.innerHTML = this.currentWeather.weatherIcon;

        const weatherText = document.getElementById("weather-text");
        weatherText.innerHTML = this.currentWeather.weatherText;

        const realFeel = document.getElementById("real-feel");
        realFeel.innerHTML = this.currentWeather.realFeel;

        const windSpeed = document.getElementById("wind-speed");
        windSpeed.innerHTML = this.currentWeather.windSpeed;

        const windUnit = document.getElementById("wind-unit");
        windUnit.innerHTML = this.currentWeather.windUnit;

        const humidity = document.getElementById("humidity");
        humidity.innerHTML = this.currentWeather.humidity;
    }

}