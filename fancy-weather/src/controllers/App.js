import LocationModel from "../models/LocationModel";
import WeatherModel from "../models/WeatherModel";
import ViewLocation from "../views/ViewLocation";
import ViewWeather from "../views/ViewWeather";
import ViewMap from "../views/ViewMap";

export default class App {
    constructor() {       
        this.apiKeyWeather = 'rWbX9EGcJwL0CJbKGCh2zQqOksA9ETj0'; //2nd apik tlagAQvlr2CAxiswgZLb4UPe2JI26L84  3d 12341234rWbX9EGcJwL0CJbKGCh2zQqOksA9ETj0
        this.lang = 'pl'; //TXaSpFqw5hyd8SforaGzlbvPqbQNRppX
    }

    async start() {        
        const model = new LocationModel(this.lang, this.apiKeyWeather);  //location model
        const ip = await model.getipAdress();          
        const locationInfo = await model.getLocationByIp(ip);
        const locationKey = locationInfo.key;
        const locationData = await model.getLocationByKey(locationKey);   //data of location
        const viewLocation = new ViewLocation(locationData, this.lang); //view of location        
        
        const weatherModel = new WeatherModel(this.lang, this.apiKeyWeather, locationKey);//weather model
        const futureWeather = await weatherModel.getFutureWeatherByKey(); //data of weather for 3 days
        const currentWeather = await weatherModel.getCurentWeatherByKey();  //data of current weather
        const weatherIcon = currentWeather.weatherIcon;  
        const viewWeather = new ViewWeather(currentWeather, futureWeather, weatherIcon, this.lang); //view of weather  

        const viewMap = new ViewMap(locationData);//map model




        //console.log(await locationInfo);          
        //console.log(await futureWeather);
        // console.log(await currentWeather);
        
        viewLocation.render();
        viewWeather.render();   
        viewMap.render();   
    }
};