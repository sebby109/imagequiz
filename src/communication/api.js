let apiHost = "https://sebby109-imagequiz.herokuapp.com";

let getPlaces = () => {
    return fetch(apiHost + "/places")
    .then(response => response.json()).catch(e => alert(e));
}

let getQuizzes = () => {
    return fetch(apiHost + '/quizzes')
    .then(response => response.json())
    .catch(e => alert(e));
}

let getQuiz = (num) => {
    return fetch(apiHost + '/quiz/' + toString(num))
    .then(response => response.json())
    .catch(e => alert(e));
}

let api = {
    getPlaces: getPlaces,
    getQuizzes: getQuizzes,
    getQuiz: getQuiz
};

export default api;