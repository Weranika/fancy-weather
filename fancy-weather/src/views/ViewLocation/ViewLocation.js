export default class ViewLocationModel {
    constructor(locationInfo, lang) {
        this.locationInfo = locationInfo;
        this.lang = lang;
    }

    render() {
        const city = document.getElementById("city");
        city.innerHTML = this.locationInfo.city;

        const country = document.getElementById("country");
        country.innerHTML = this.locationInfo.country;

        const latitude = document.getElementById("latitude");
        latitude.innerHTML = this.locationInfo.latitude;

        const longitude = document.getElementById("longitude");
        longitude.innerHTML = this.locationInfo.longitude;

        let date = new Date();
        const time = {
            hour: 'numeric',
            minute: 'numeric'            
          };
          const dateItems = {
            weekday: 'short',           
            day: 'numeric',    
            month: 'long'
          };          
        const timeSet = document.getElementById("time");               
        timeSet.innerHTML =  date.toLocaleString(this.lang, time);
       
        const dateSet = document.getElementById("date");               
        dateSet.innerHTML =  date.toLocaleString(this.lang, dateItems);





    }

}