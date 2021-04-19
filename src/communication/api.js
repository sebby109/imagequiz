let apiHost = "https://sebby109-imagequiz.herokuapp.com/";

let getPlaces = () => {
    return fetch(apiHost + '/places')
    .then(response => response.json());
}

let addPlace = (place) => {
        return fetch(apiHost + '/place', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(place)
        })
    }

let api = {
    getPlaces: getPlaces
    //addPlace: addPlace
};
// continue HOW TO CONNECT TO REST API...@15:33
export default api;