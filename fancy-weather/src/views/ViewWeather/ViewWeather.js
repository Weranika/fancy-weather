import langEn from '../../scripts/lang/langEn.js';
import langPl from '../../scripts/lang/langPl.js';

export default class ViewWeather {
    constructor(currentWeather, futureWeather, weatherIcon, lang, temperature) {
        this.currentWeather = currentWeather;
        this.futureWeather = futureWeather;
        this.weatherIcon = weatherIcon;
        this.lang = lang;
        this.temperature = temperature;

        if (this.lang === 'en') {
            this.dictionary = langEn;
        } else {
            this.dictionary = langPl;
        }             
    }

    render() {
        if (this.temperature === 'true') {
            document.getElementById("current-temperature").innerHTML = this.currentWeather.metricWalue;        
        } else {
            document.getElementById("current-temperature").innerHTML = this.currentWeather.metricImperial;
        }        
        const weatherDescription = document.getElementById("weather-description");
        const tempForTreeDays = document.getElementById('next-temperature');        
        weatherDescription.innerHTML = '';
        tempForTreeDays.innerHTML = '';

        const iconToday = document.createElement('div');  
        const iconTodayImg = document.createElement('img');   
        iconTodayImg.src = `./src/img/icons/${this.weatherIcon}-s.png`;
        iconTodayImg.title="weather image";
        iconTodayImg.classList.add("icon");  
        iconToday.appendChild(iconTodayImg);
        
        const weatherText= document.createElement('div');  
        weatherText.innerHTML = this.currentWeather.weatherText;

        const weatherStatusFeel= document.createElement('div');  
        weatherStatusFeel.classList.add("weather-status");

        const realFeelText= document.createElement('div');  
        realFeelText.setAttribute('data-i18n', 'feels');
        realFeelText.classList.add("text-margin");        
        realFeelText.innerHTML = this.dictionary.feels;       
        weatherStatusFeel.appendChild(realFeelText);

        const realFeel= document.createElement('div');  
        if (this.temperature === 'true') {
            realFeel.innerHTML = this.currentWeather.realFeel + '&#730;';        
        } else {
            realFeel.innerHTML = this.currentWeather.realFeelImperial + '&#730;'; 
        }                
        weatherStatusFeel.appendChild(realFeel);

        const weatherStatusWind= document.createElement('div');  
        weatherStatusWind.classList.add("weather-status");

        const windText= document.createElement('div');  
        windText.setAttribute('data-i18n', 'wind');
        windText.classList.add("text-margin");
        windText.innerHTML = this.dictionary.wind;       
        weatherStatusWind.appendChild(windText);

        const wind= document.createElement('div');  
        wind.innerHTML = this.currentWeather.windSpeed;   
        weatherStatusWind.appendChild(wind);

        const windUnit= document.createElement('div');  
        windUnit.innerHTML = this.currentWeather.windUnit;
        weatherStatusWind.appendChild(windUnit);
        
        const weatherStatusHumidity= document.createElement('div');  
        weatherStatusHumidity.classList.add("weather-status");

        const humidityText= document.createElement('div');  
        humidityText.setAttribute('data-i18n', 'wind');
        humidityText.innerHTML = this.dictionary.humidity;      
        humidityText.classList.add("text-margin");
        weatherStatusHumidity.appendChild(humidityText);

        const humidity= document.createElement('div');  
        humidity.innerHTML = this.currentWeather.humidity + '%'; 
        weatherStatusHumidity.appendChild(humidity);

        weatherDescription.appendChild(iconToday);
        weatherDescription.appendChild(weatherText);
        weatherDescription.appendChild(weatherStatusFeel);
        weatherDescription.appendChild(weatherStatusWind);
        weatherDescription.appendChild(weatherStatusHumidity);            

        const dateItem = {
            weekday: 'long'
          }; 
        for (let i = 0; i < this.futureWeather.length; i++) {
            const date = new Date(this.futureWeather[i].Day);        
            const dailyTemp = document.createElement('div');
            dailyTemp.classList.add("col-md-4", "daily-temp");
            tempForTreeDays.appendChild(dailyTemp);
            
            const h3 = document.createElement('h3');
            h3.innerHTML =  date.toLocaleString(this.lang, dateItem);
            dailyTemp.appendChild(h3);
            
            const day = document.createElement('div');
            day.classList.add("day");
            dailyTemp.appendChild(day);

            const dayTemp = document.createElement('div');
            dayTemp.classList.add("day-temp");
            dayTemp.innerHTML = this.futureWeather[i].DayEverege + '&#730;';
            day.appendChild(dayTemp);  

            const dayIcon = document.createElement('div');  
            const dayIconImg = document.createElement('img');   
            dayIconImg.src = `./src/img/icons/${this.futureWeather[i].DayIcon}-s.png`;
            dayIconImg.title="weather image";
            dayIconImg.classList.add("day-icon");   
            dayIcon.appendChild(dayIconImg);             
            day.appendChild(dayIcon);            
        }                
    }
}