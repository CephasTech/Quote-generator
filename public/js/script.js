const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

async function getQuote() {
  const response = await fetch("/api/quote");
  const data = await response.json();

  quote.textContent = `"${data.quote}"`;
  author.textContent = `- ${data.author}`;
}

btn.addEventListener("click", getQuote);

getQuote();