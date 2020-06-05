import LocationModel from "../models/LocationModel";
import WeatherModel from "../models/WeatherModel";
import ViewLocationModel from "../views/ViewLocationModel";
import ViewWeatherModel from "../views/ViewWeatherModel";

export default class App {
    constructor() {       
        this.apiKeyWeather = 'tlagAQvlr2CAxiswgZLb4UPe2JI26L84';
        this.lang = 'pl';
    }

    async start() {        
        const model = new LocationModel(this.lang, this.apiKeyWeather);  //location model
        const ip = await model.getipAdress();          
        const locationInfo = await model.getLocationByIp(ip);
        const locationKey = locationInfo.key;
        const locationData = await model.getLocationByKey(locationKey);   //data of location
        const viewLocation = new ViewLocationModel(locationData, this.lang); //view of location        
        
        const weatherModel = new WeatherModel(this.lang, this.apiKeyWeather, locationKey);//weather model
        const futureWeather = await weatherModel.getFutureWeatherByKey(); //data of weather for 3 days
        const currentWeather = await weatherModel.getCurentWeatherByKey();  //data of current weather
        const viewWeather = new ViewWeatherModel(currentWeather, futureWeather); //view of weather        



        //console.log(await locationInfo);          
        // console.log(await futureWeather[0]);
        // console.log(await currentWeather);
        // const view = new ViewModel(data);
        viewLocation.render();
        viewWeather.render();        
    }
};