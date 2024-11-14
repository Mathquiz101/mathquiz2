// Array of greetings to randomly select from
const greetings = [
    "Hello, Visitor!",
    "Welcome to the Page!",
    "Good Day!",
    "Howdy!",
    "Greetings!",
    "Hi there!",
    "Hey! How’s it going?",
];

// Function to change the greeting text
function changeGreeting() {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    document.getElementById("greeting").textContent = randomGreeting;
}
