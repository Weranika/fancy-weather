import langEn from '../../scripts/lang/langEn.js';
import langPl from '../../scripts/lang/langPl.js';

export default class ViewMap {
    constructor(locationData, lang) {
        this.locationData = locationData;         
        this.lang = lang;
        if (this.lang === 'en') {
            this.dictionary = langEn;
        } else {
            this.dictionary = langPl;
        }                       
    }

    render() { 
        const mapConyeiner = document.getElementById('map');
        mapConyeiner.innerHTML = '';
        const map = new ymaps.Map(mapConyeiner, {
            center: [this.locationData.latitude, this.locationData.longitude], 
            zoom: 10
        }); 

        const locationCont = document.getElementById("location-cont");  
        locationCont.innerHTML = '';
        const locationContLat = document.createElement('div');          
        locationContLat.classList.add('location');  

        const latitude = document.createElement('div');          
        latitude.setAttribute('data-i18n', 'latitude');             
        latitude.innerHTML = this.dictionary.latitude;       
        locationContLat.appendChild(latitude);

        const latitudeData = document.createElement('div');  
        latitudeData.innerHTML = this.locationData.latitude;
        locationContLat.appendChild(latitudeData);

        const locationContLong = document.createElement('div');          
        locationContLong.classList.add('location');  

        const longitude = document.createElement('div');          
        longitude.setAttribute('data-i18n', 'longitude');        
        longitude.innerHTML = this.dictionary.longitude;       
        locationContLong.appendChild(longitude);

        const longitudeData = document.createElement('div');  
        longitudeData.innerHTML = this.locationData.longitude;
        locationContLong.appendChild(longitudeData);
       
        locationCont.appendChild(locationContLat);
        locationCont.appendChild(locationContLong);
    }
}