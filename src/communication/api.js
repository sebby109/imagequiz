let apiHost = "https://sebby109-imagequiz.herokuapp.com";

let getPlaces = () => {
    return fetch(apiHost + "/places")
    .then(response => response.json()).catch(e => alert(e));
}

let getCurrent = () => {
    return fetch(apiHost + "/currents")
    .then(response => response.json()).catch(e => alert(e));
}

let getQuizzes = () => {
    return fetch(apiHost + '/quizzes')
    .then(response => response.json())
    .catch(e => alert(e));
}

let getQuiz = (i) => {
    return fetch(apiHost + '/quiz/' + i)
    .then(response => response.json())
    .catch(e => console.log(e));
}

let getAnswer = () => {
    return fetch(apiHost + '/answer')
    .then(response => response.json())
    .catch(e => alert("failed at get answer in api"));
}

let getScore = () => {
    return fetch(apiHost + '/score')
    .then(response => response.json())
    .catch(e => alert("failed at get score api"));
}

let addScore = (num) => {
    return fetch(apiHost + '/add/' + "1")
    .catch(e => alert("failed at add score in api"));
}

let addCurrent = (curr) => {
    return fetch(apiHost + '/current', {
        method: 'post',
        headers: {'Content-Type': 'application/json'
        },
        body: JSON.stringify(curr)
    })
}

let addAnswer = (curr) => {
    return fetch(apiHost + '/addAnswer/' + curr).catch(e => alert("add answer error."))
}

let api = {
    getPlaces: getPlaces,
    getQuizzes: getQuizzes,
    getQuiz: getQuiz,
    getAnswer: getAnswer,
    getScore: getScore,
    getCurrent: getCurrent,
    addScore: addScore,
    addCurrent: addCurrent,
    addAnswer: addAnswer
};

export default api;