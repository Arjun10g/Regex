const sentences = [
    "The quick brown fox jumps over the lazy dog", 
    "Hello, world!",
    "This is a sentence with 123 numbers",
    "The date is January 1, 2021",
    "Email address: example@gmail.com",
    "Phone number: 555-555-5555",
    "IP address: 192.168.1.1",
    "URL: https://www.example.com",
    "Hex color code: #FFFFFF",
    "John Smith 123 Main St, Anytown USA 12345",
    "The temperature is 72 degrees Fahrenheit",
    "The ISBN number is 978-3-16-148410-0",
    "This is a sentence with multiple spaces",
    "The color of the sky is blue",
    "The total cost is $100.99",
    "I was born on 05/14/2000",
    "The time is 12:30 PM",
    "The date is January 1st, 2021",
    "The movie is rated PG-13",
    "The car's license plate number is ABC-123",
    "This sentence contains the word 'is'",
    "My phone number is +1-555-555-5555",
    "The model number is XYZ-123-45"

  ];

  
const questions = [
    "How to match all the vowels in this sentence", 
    "How to match the exclamation mark at the end of the sentence",
    "How to extract the numbers from this sentence",
    "How to match the date in this sentence",
    "How to extract the email address from this sentence",
    "How to extract the phone number from this sentence",
    "How to match the IP address in this sentence",
    "How to extract the URL from this sentence",
    "How to match the hex color code in this sentence",
    "How to extract the street address from this sentence",
    "How to extract the temperature from this sentence",
    "How to extract the ISBN number from this sentence",
    "How to match all the spaces in this sentence",
    "How to extract the color from this sentence",
    "How to extract the total cost from this sentence",
    "How to match the date of birth in this sentence",
    "How to match the time in this sentence",
    "How to match the date in this sentence",
    "How to extract the movie rating from this sentence",
    "How to extract the license plate number from this sentence",
    "How to match the word 'is' in this sentence",
    "How to extract the phone number from this sentence",
    "How to extract the model number from this sentence"
];

let socket = document.querySelector('.socket');
let cont = document.querySelector('.cont');

setTimeout(() => {
    socket.style.display = 'none';
    cont.style.display = 'grid';
    gsap.fromTo(cont, {opacity: 0}, {opacity: 1, duration: 2.5, ease: "power2.out"});
}, 3500);

let sent = document.querySelector('.sent')
let quest = document.querySelector('.quest')
let btn = document.querySelector('.quest ~ button')
let cbox = document.querySelector('#checkbox')
let current = 0;

sent.textContent = `Sentence: "${sentences[current]}"`
quest.textContent = `Question: ${questions[current]}`

btn.addEventListener('click', () => {
    current++
    if (current >= sentences.length - 1) {
        current = 1
    }
    sent.textContent = `Sentence: "${sentences[current]}"`
    quest.textContent = `Question: ${questions[current]}`
});



let input = document.querySelector(".enter");
let regex;
input.addEventListener("input", function() {
    let inputString = sentences[current];
    if (cbox.checked === false) {
        regex = new RegExp(`${input.value}`); // Create regular expression with string argument 
    } else {
        regex = new RegExp(`${input.value}`, "g"); // Create regular expression with string argument 
    }
    let highlightedString = inputString.replace(regex, function(match) {
        return `<span class="highlight">${match}</span>`;
    });
    sent.innerHTML = highlightedString;
});

console.log(regex)