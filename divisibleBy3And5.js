function division (a) {
    if (a/3){
        return 'Fizz';
    }
    if (a/5){
        return 'Buzz';
    }
    if (a/3 && a/5){
        return 'FizzBuzz';
    }
    else {
        return a;
    }
}

module.exports = division;