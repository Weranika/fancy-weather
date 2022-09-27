export default class LocationModel {
    constructor(lang, apiKeyWeather) {
        this.state = {
            urlIp: 'https://ipapi.co/json/',
            urlLocationKey: 'https://dataservice.accuweather.com/locations/v1/cities/ipaddress',    
            urlLocationData: 'https://dataservice.accuweather.com/locations/v1/',
            urlByName: 'https://dataservice.accuweather.com/locations/v1/cities/search' 
        };
        this.lang = lang;
        this.apiKeyWeather = apiKeyWeather;
    }

    async getipAdress() {
        const { urlIp } = this.state;
        const response = await fetch(urlIp);
        if (response.status !== 200) {  
           alert('Looks like there was a problem with server. Status Code: ' + 
              response.status);
            return;
        }
        const data = await response.json();
        return LocationModel.ipAdress(data);
    }

    static ipAdress(data) {
        return data.ip;
    }

    async getLocationByIp(ip) {        
        const url = `${this.state.urlLocationKey}?apikey=${this.apiKeyWeather}&q=${ip}&language=${this.lang}&details=true`;
        const response = await fetch(url);
        if (response.status !== 200) {  
            alert('Looks like there was a problem with server. Status Code: ' +  
               response.status);  
             return;  
        }
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
        if (response.status !== 200) {
            alert('Looks like there was a problem with server. Status Code: ' + 
               response.status);
             return;
        }
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

    async getLocationByCity(city) {        
        const url = `${this.state.urlByName}?apikey=${this.apiKeyWeather}&q=${city}&language=${this.lang}`;
        const response = await fetch(url); 
        console.log(response);
        
        if (response.status !== 200) {  
            alert('Looks like there was a problem with server. Status Code: ' +  
               response.status);  
             return;  
        }
        const data = await response.json();
        console.log(data);
        return LocationModel.getKeyByCity(data);
    }

    static getKeyByCity(data) {
        return {
            key: data[0].ParentCity.Key
        }
    }
}
