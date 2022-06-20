

// write a function that takes a string and 
// number called n, and repeats the string
// n times with a space in the middle of each time.

function repeatNTimesWithSpace(string, n){
    return (string + ' ').repeat(n);
};


// library  => Library

function capitalizeFirstLetter(string){
    return string[0].toUpperCase() + string.slice(1);
};

module.exports = {repeatNTimesWithSpace, capitalizeFirstLetter};