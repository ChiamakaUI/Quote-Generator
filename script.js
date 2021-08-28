function getQuotes() {
  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => displayQuotes(data))
    .catch(console.error());
}

function displayQuotes(res) {
  let index = Math.floor(Math.random() * res.length);
  
  let quote = res[index];

  document.getElementById("quote").innerHTML = quote.text;
  document.getElementById("author").innerHTML = quote.author;
}
