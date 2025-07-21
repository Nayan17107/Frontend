function greet(name, msg) {
    console.log(name);
    msg();
}

function N() {
    console.log("Hello How Are You!!!!");
}

greet("Nayan", N);
