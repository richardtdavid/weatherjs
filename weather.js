class Weather{
    constructor(city, state){
        this.apiKey = 'insert api key here';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from api 
    async getWeather(){
        const reponse = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json
        `);

        const reponseData = await reponse.json();

        return reponseData.current_observation;
    }

    // Change weather location 
    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}