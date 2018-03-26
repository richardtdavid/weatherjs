class Storage{
    constructor(){
        this.city;
        this.state;
        this.defaultCity = 'Miami';
        this.defaultState = 'FL';
    }

    getLocationData(){
        // Check to see if city is null
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity;
        }else{
            this.city = localStorage.getItem('city');
        }
        // Check to see if state is null
        if(localStorage.getItem('state') === null){
            this.state = this.defaultState;

        }else{
            this.state = localStorage.getItem('state');
        }

        return {
            city: this.city,
            state: this.state
        }

    }

    setLocationData(city, state){
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
    }   
}