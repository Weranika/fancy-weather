export default class ViewMap {
    constructor(locationData) {
        this.locationData = locationData;           
    }

    render() {        
        const map = new ymaps.Map(document.getElementById('map'), {
            center: [this.locationData.latitude, this.locationData.longitude], 
            zoom: 10
          });       
    }
}