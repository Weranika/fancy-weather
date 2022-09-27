export default class WeatherModel {
    constructor(lang, apiKeyWeather, locationKey, temperature) {
        this.urlWether = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.urlFutureWether = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/';        
        this.lang = lang;
        this.apiKeyWeather = apiKeyWeather;
        this.locationKey = locationKey;
        this.temperature = temperature;
    }

    async getCurentWeatherByKey(key) {        
        const url = `${this.urlWether}${this.locationKey}?apikey=${this.apiKeyWeather}&language=${this.lang}&details=true`;
        const response = await fetch(url);
        if (response.status !== 200) {  
            alert('Looks like there was a problem with server. Status Code: ' +  
               response.status);  
             return;  
        }
        const data = await response.json();
        return WeatherModel.getWeather(data);
    }

    static getWeather(data) {  
        return {
            weatherText: (data[0].WeatherText).toUpperCase(),
            weatherIcon: data[0].WeatherIcon,
            dayTime: data[0].IsDayTime,
            metricWalue: Math.round(data[0].Temperature.Metric.Value),
            metricImperial: Math.round(data[0].Temperature.Imperial.Value),
            realFeel: Math.round(data[0].RealFeelTemperature.Metric.Value),
            realFeelImperial: Math.round(data[0].RealFeelTemperature.Imperial.Value),
            humidity: data[0].RelativeHumidity,
            windSpeed: data[0].Wind.Speed.Metric.Value,
            windUnit: data[0].Wind.Speed.Metric.Unit
        }
    }

    async getFutureWeatherByKey(key) {        
        const url = `${this.urlFutureWether}${this.locationKey}?apikey=${this.apiKeyWeather}&language=${this.lang}&metric=${this.temperature}`;
        const response = await fetch(url);
        if (response.status !== 200) {  
            alert('Looks like there was a problem with server. Status Code: ' +  
               response.status);  
             return;  
        }
        const data = await response.json();
        return WeatherModel.getFutureWeather(data);
    }

    static getFutureWeather(data) {  
        let arr =[];      
        for (let i = 1; i < 4; i++) {
            arr.push({
                DayTempMax: data.DailyForecasts[i].Temperature.Maximum.Value,
                DayTempMin: data.DailyForecasts[i].Temperature.Minimum.Value,
                DayEverege: Math.round((data.DailyForecasts[i].Temperature.Maximum.Value + data.DailyForecasts[i].Temperature.Minimum.Value) / 2),
                Day: data.DailyForecasts[i].Date,
                DayIcon: data.DailyForecasts[i].Day.Icon,
            });
        };
        return arr;
    }
}
   