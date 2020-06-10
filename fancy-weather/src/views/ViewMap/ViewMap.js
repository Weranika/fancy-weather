export default class ViewMap {
    constructor(locationData) {
        this.locationData = locationData;           
    }

    render() { 
        const mapConyeiner = document.getElementById('map');
        mapConyeiner.innerHTML = '';
        const map = new ymaps.Map(mapConyeiner, {
            center: [this.locationData.latitude, this.locationData.longitude], 
            zoom: 10
          });       
    }
}