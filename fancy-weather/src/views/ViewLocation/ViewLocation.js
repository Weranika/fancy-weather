export default class ViewLocation {
    constructor(locationInfo, lang, city) {
        this.locationInfo = locationInfo;
        this.lang = lang;
        this.city = city;
    }

    render() {
        document.getElementById("city").innerHTML = this.locationInfo.city;
        document.getElementById("country").innerHTML = this.locationInfo.country;
        
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
        document.getElementById("time").innerHTML =  date.toLocaleString(this.lang, time);       
        document.getElementById("date").innerHTML =  date.toLocaleString(this.lang, dateItems);
    }

    searchCity() {
      const buttonSearch = document.getElementById('button-search');            
      buttonSearch.addEventListener('click', this.searchListener);
    }
    
    searchListener() {
      if (this.city == null) {
        alert("Please fill searh field");
      }
      else {

      }
    }

}