export default class LocationModel {
    constructor(lang, apiKeyWeather) {
        this.state = {
            urlIp: 'https://api.ipify.org/?format=json',
            urlLocationKey: 'http://dataservice.accuweather.com/locations/v1/cities/ipaddress',    
            urlLocationData: 'http://dataservice.accuweather.com/locations/v1/' 
        };
        this.lang = lang;
        this.apiKeyWeather = apiKeyWeather;
    }

    static ipAdress(data) {
        return data.ip;
    }

    async getipAdress() {
        const { urlIp } = this.state;
        const response = await fetch(urlIp);
        const data = await response.json();

        return LocationModel.ipAdress(data);
    }

    async getLocationByIp(ip) {        
        const url = `${this.state.urlLocationKey}?apikey=${this.apiKeyWeather}&q=${ip}&language=${this.lang}&details=true`;
        const response = await fetch(url);
        const data = await response.json();

        return LocationModel.getLocationKey(data);
    }

    static getLocationKey(data) {
        return {            
            key: data.Key
        }
    }

    async getLocationByKey(key) {        
        const url = `${this.state.urlLocationData}${key}?apikey=${this.apiKeyWeather}&language=${this.lang}`;
        const response = await fetch(url);
        const data = await response.json();

        return LocationModel.getLocationData(data);
    }

    static getLocationData(data) {
        return {
            city: data.LocalizedName,
            country: data.Country.LocalizedName,
            latitude: data.GeoPosition.Latitude,
            longitude: data.GeoPosition.Longitude
        }
    }
}   