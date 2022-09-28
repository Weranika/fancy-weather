import LocationModel from "../models/LocationModel";
import WeatherModel from "../models/WeatherModel";
import ViewLocation from "../views/ViewLocation";
import ViewWeather from "../views/ViewWeather";
import ViewMap from "../views/ViewMap";
import ButtonsTemp from "../scripts/ButtonsTemp";
import ButtonsLanguage from "../scripts/ButtonsLanguage";
import ButtonSearch from "../scripts/ButtonSearch";
import ViewBackgr from "../views/ViewBackground";

export default class App {
    constructor(lang = 'en', temperature = 'true', city) {       
        this.apiKeyWeather = 'rWbX9EGcJwL0CJbKGCh2zQqOksA9ETj0'; //1st apik tlagAQvlr2CAxiswgZLb4UPe2JI26L84  3d rWbX9EGcJwL0CJbKGCh2zQqOksA9ETj0
        //2nd   TXaSpFqw5hyd8SforaGzlbvPqbQNRppX
        this.lang = lang;
        this.temperature = temperature;
        this.city = city;
        
    }

    setLang(lang) {
        this.lang = lang;
    }

    setTemp(temperature) {
        this.temperature = temperature;
    }

    setCity(city) {
        this.city = city;
    }

    async start() {  
        if (this.city === undefined) { 
            this.model = new LocationModel(this.lang, this.apiKeyWeather);  //location model 
            const ip = await this.model.getipAdress();                     
            const locationInfo = await this.model.getLocationByIp(ip);
            this.locationKey = locationInfo.key;
            this.create();            
        } else {
            this.model = new LocationModel(this.lang, this.apiKeyWeather);  //location model
            const keyByCity = await this.model.getLocationByCity(this.city);
            this.locationKey = await  keyByCity.key;
            this.create();
        }
    }
    async create() {
        const locationData = await this.model.getLocationByKey(this.locationKey);   //data of location
        const viewLocation = new ViewLocation(locationData, this.lang, this.city); //view of location 
                
        const weatherModel = new WeatherModel(this.lang, this.apiKeyWeather, this.locationKey, this.temperature);//weather model
        const futureWeather = await weatherModel.getFutureWeatherByKey(); //data of weather for 3 days
        const currentWeather = await weatherModel.getCurentWeatherByKey();  //data of current weather
        const weatherIcon = currentWeather.weatherIcon;  
        const viewWeather = new ViewWeather(currentWeather, futureWeather, weatherIcon, this.lang, this.temperature); //view of weather  

        const viewMap = new ViewMap(locationData, this.lang);//map model
        const buttonsTemp = new ButtonsTemp(); 
        const buttonsLanguage = new ButtonsLanguage();
        const buttonSearch = new ButtonSearch();
        const viewBackgr = new ViewBackgr();
        
        viewLocation.render();        
        viewWeather.render();
        viewMap.render();
    };        
}
