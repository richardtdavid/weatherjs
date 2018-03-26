// Init Storage
const storage = new Storage();
// Get storaged location data
const weatherLocation = storage.getLocationData();
// Init Weather class
const weather = new Weather(weatherLocation.city,weatherLocation.state);
// Int UI Class
const ui = new UI();
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    // Change Location
    weather.changeLocation(city,state);
    // Set location in Local storage
    storage.setLocationData(city,state);

    // Get and display weather
    getWeather();

    // Close modal using jQuery 
    $('#locModal').modal('hide');
});

// Get Weather function
function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));

}
