import LocationModel from "../models/LocationModel";
import WeatherModel from "../models/WeatherModel";
import ViewLocation from "../views/ViewLocation";
import ViewWeather from "../views/ViewWeather";
import ViewMap from "../views/ViewMap";
import ButtonsTemp from "../scripts/ButtonsTemp";
import ButtonsLang from '../scripts/ButtonsLang';

export default class App {
    constructor(lang = 'en', ) {       
        this.apiKeyWeather = 'rWbX9EGcJwL0CJbKGCh2zQqOksA9ETj0'; //1st apik tlagAQvlr2CAxiswgZLb4UPe2JI26L84  3d rWbX9EGcJwL0CJbKGCh2zQqOksA9ETj0
        //2nd TXaSpFqw5hyd8SforaGzlbvPqbQNRppX
        this.lang = lang;
        
        // const input = document.getElementById('search');        
        // this.city = input.value;
    }

    setLang(lang) {
        this.lang = lang;   
    }

    async start() {
        const model = new LocationModel(this.lang, this.apiKeyWeather);  //location model
        const ip = await model.getipAdress();          
        const locationInfo = await model.getLocationByIp(ip);
        const locationKey = locationInfo.key;
        const locationData = await model.getLocationByKey(locationKey);   //data of location
        const viewLocation = new ViewLocation(locationData, this.lang, this.city); //view of location 
                
        const weatherModel = new WeatherModel(this.lang, this.apiKeyWeather, locationKey);//weather model
        const futureWeather = await weatherModel.getFutureWeatherByKey(); //data of weather for 3 days
        const currentWeather = await weatherModel.getCurentWeatherByKey();  //data of current weather
        const weatherIcon = currentWeather.weatherIcon;  
        const viewWeather = new ViewWeather(currentWeather, futureWeather, weatherIcon, this.lang); //view of weather  

        const viewMap = new ViewMap(locationData);//map model
        const buttonsTemp = new ButtonsTemp(currentWeather, futureWeather);
       
        
        //const locationByCity = await model.getCity(this.city);   
        
        viewLocation.render();        
        viewWeather.render();
        viewMap.render();
    }

    refresh() {

    }

};