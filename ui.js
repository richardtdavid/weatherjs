class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.visibility = document.getElementById('w-visibility');
        this.windchill = document.getElementById('w-windchill');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather){
        this.location.textContent = weather.display_location.full;
        this.desc.textContent = weather.weather;
        this.string.textContent = weather.temperature_string;
        this.icon.setAttribute('src', weather.icon_url);
        this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`;
        this.feelsLike.textContent = `Feels Like: ${weather.feelslike_string}`;
        this.dewpoint.textContent = `Dewpoint: ${weather.dewpoint_string}`;
        this.visibility.textContent = `Visibility : ${weather.visibility_mi} Miles`;
        this.windchill.textContent = `Windchill : ${weather.windchill_string}`;
        this.wind.textContent = `Wind: ${weather.wind_string}`;
    }
}