let apiHost = "https://sebby109-imagequiz.herokuapp.com";

let getPlaces = () => {
    return fetch(apiHost + "/places")
    .then(response => response.json());
}

let api = {
    getPlaces: getPlaces
};

export default api;