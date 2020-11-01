console.log("Testing quotes.js");
const quotes = [
    {
        quote: `"Another day, another box of stolen pens."`,
        author: "Homer Simpson"
    },
    {
        quote: `"I would kill everyone in this room for a drop of sweet beer"`,
        author: "Homer Simpson"
    },
    {
        quote: `"I don’t mind if you pee in the shower, but only if you’re taking a shower."`,
        author: "Marge Simpson"
    },
    {
        quote: `"Oh, loneliness and cheeseburgers are a dangerous mix."`,
        author: "Comic Book Guy"
    },
    {
        quote: `"What do you mean I can’t take off my sweater? I’m HOT!"`,
        author: "Drunk Mr. Rogers"
    },
    {
        quote: `"You must love this country more than I love a cold beer on a hot Christmas morning."`,
        author: "Homer Simpson"
    },
    {
        quote: `"You don’t win friends with salad."`,
        author: "Homer Simpson"
    },
    {
        quote: `"I can’t promise I’ll try, but I’ll try to try."`,
        author: "Bart Simpson"
    },
    {
        quote: `"To alcohol! The cause of, and solution to, all of life’s problems."`,
        author: "Homer Simpson"
    }

]
const homerButton = document.getElementById('homer-face');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');

homerButton.addEventListener('click', randomQuote);

function randomQuote() {
    let quoteIndex = Math.floor(Math.random()*quotes.length);

    quoteText.textContent = quotes[quoteIndex].quote;
    quoteAuthor.textContent = quotes[quoteIndex].author;

}