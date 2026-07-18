const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const category = document.querySelector("#category");

const newQuote = document.querySelector("#newQuote");
const copyQuote = document.querySelector("#copyQuote");
const shareQuote = document.querySelector("#shareQuote");

async function loadQuote(){

    const response = await fetch("/api/quotes/random");

    const data = await response.json();

    quote.innerText = `"${data.quote}"`;

    author.innerText = `— ${data.author}`;

    category.innerText = data.category;

}

newQuote.addEventListener("click",loadQuote);

copyQuote.addEventListener("click",()=>{

    navigator.clipboard.writeText(

        `${quote.innerText}\n${author.innerText}`

    );

    alert("Quote copied.");

});

shareQuote.addEventListener("click",()=>{

    const text=`${quote.innerText}\n${author.innerText}`;

    window.open(

`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`

    );

});

loadQuote();