function error(message) {
    throw new Error(message);
}
let output = error('New Error');
console.log('Hello world');
