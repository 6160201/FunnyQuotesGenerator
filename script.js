const quotes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I used to play piano by ear, but now I use my hands and fingers.",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.textContent = quotes[randomIndex];
}
