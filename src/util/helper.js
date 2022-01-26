// Get a random integer up to max number
export const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
};

// Shuffle Array
export const shuffle = array => {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

export const decodeHTML = function (html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
};
