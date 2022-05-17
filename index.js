function receivesAFunction(cb) {
    console.log(cb());
}

receivesAFunction(function() { return "This is a callback function!"});

function returnsANamedFunction() {
    const fn = function named() {};
    return fn;
}

function returnsAnAnonymousFunction() {
    return function() {};
}