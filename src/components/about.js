import adaCharacters from "../images/ada-characters.png";

const quotes = [
    {
        quote: "I saw a bright world. I cannot go back to a time when I did not know such a thing existed.",
        author: "Kyouka Izumi"
    },
    {
        quote: "A good book is always good, no matter how many times you've already read it.",
        author: "Osamu Dazai"
    },
    {
        quote: "The night is a good time. It's a time that belongs to the Port Mafia.",
        author: "Osamu Dazai"
    },
    {
        quote: "A logical, optimal solution exists in any wartime situation, no matter how difficult the challenge. You must not forget that, especially in times of confusion when you might feel inclined to recklessness.",
        author: "Ōgai Mori"
    },
    {
        quote: "Do you think if you put your life on the line fighting for others, someone will stamp a form certifying you deserve to live?",
        author: "Ryuunosuke Akutagawa"
    },
    {
        quote: "You'll let me choose? Whenever you say that, I never actually have another choice.",
        author: "Chuuya Nakahara"
    }
]

const quoteContainer = document.createElement("div");

const quote = document.createElement("blockquote");
const quotePara = document.createElement("p");

const authorPara = document.createElement("p");

const quoteIconContainer = document.createElement("div");

const aboutDescription = document.createElement("div");

const aboutPara = document.createElement("p");

const imageContainer = document.createElement("div");
const image = document.createElement("img");

quote.appendChild(quotePara);

quoteIconContainer.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="quote-icon">
        <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
    </svg>
`;

quoteContainer.appendChild(quote);
quoteContainer.appendChild(authorPara);
quoteContainer.appendChild(quoteIconContainer);
quoteContainer.className = "quote";

aboutPara.innerHTML = `
    <span>&lt;</span>Port Mafia Café<span>></span> was born out of a love for <span>&lt;</span>Bungo Stray Dogs<span>></span> and the desire to create a space where fans could immerse themselves in its world while enjoying amazing food. <br> Founded by <span>&lt;</span>Swagatam Pati<span>></span>, a devoted anime enthusiast and culinary expert, the café is a testament to the power of combining passion with creativity.
`;

aboutDescription.appendChild(aboutPara);
aboutDescription.className = "about-description";

image.src = adaCharacters;
image.alt = "armed detective agency characters from BSD";
image.width = "700";

imageContainer.appendChild(image);
imageContainer.className = "image-container";

export default function createAboutDOM(contentNode) {
    while (contentNode.firstChild) {
        contentNode.removeChild(contentNode.firstChild);
    }

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    authorPara.innerHTML = `
        <span>—</span> ${randomQuote.author}
    `;
    quotePara.textContent = `${randomQuote.quote}`;

    contentNode.appendChild(quoteContainer);
    contentNode.appendChild(aboutDescription);
    contentNode.appendChild(imageContainer);
}