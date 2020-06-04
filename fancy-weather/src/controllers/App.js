import LocationModel from "../models/LocationModel";
import WeatherModel from "../models/WeatherModel";

export default class App {
    constructor() {       
        this.apiKeyWeather = 'tlagAQvlr2CAxiswgZLb4UPe2JI26L84';
        this.lang = 'en';
    }

    async start() {        
        const model = new LocationModel(this.lang, this.apiKeyWeather);
        const ip = await model.getipAdress();          
        const locationInfo = await model.getLocationByIp(ip);        

        //console.log(await locationInfo);             
        // const view = new ViewModel(data);
        //view.show();
        
        const locationKey = locationInfo.key;
        const weatherModel = new WeatherModel(this.lang, this.apiKeyWeather, locationKey);
        const futureWeather = await weatherModel.getFutureWeatherByKey();
        const currentWeather = await weatherModel.getCurentWeatherByKey();
           
        // console.log(await futureWeather[0]);
        // console.log(await currentWeather);
        // const view = new ViewModel(data);
        //view.show();
    }
};