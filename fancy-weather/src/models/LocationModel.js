export default class LocationModel {
    constructor(lang, apiKeyWeather) {
        this.state = {
            urlIp: 'https://api.ipify.org/?format=json',
            urlWether: 'http://dataservice.accuweather.com/locations/v1/cities/ipaddress',            
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
        
        const url = `${this.state.urlWether}?apikey=${this.apiKeyWeather}&q=${ip}&language=${this.lang}`;
        const response = await fetch(url);
        const data = await response.json();

        return LocationModel.getLocationInfo(data);
    }

    static getLocationInfo(data) {
        return {
            city: data.LocalizedName,
            country: data.Country.LocalizedName,
            latitude: data.GeoPosition.Latitude,
            longitude: data.GeoPosition.Longitude,
            key: data.Key
        }
    }
}   