const cryptoWrapper = document.getElementById("crypto-wrapper");

const buildScreen = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=51&page=1"
  );
  const coins = await response.json();
  console.log(coins);

  coins.sort((a, b) => a.name.localeCompare(b.name));

  coins.forEach((coin) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.innerText = coin.name;

    const symbol = document.createElement("h2");
    symbol.innerText = coin.symbol;

    const price = document.createElement("h4");
    price.textContent = `Value: $${coin.current_price}`;

    const image = document.createElement("img");
    image.src = coin.image;

    if (coin.current_price >= 100) {
      card.classList.add("expensive");
    } else {
      card.classList.add("cheap");
    }

    card.addEventListener("click", () => {
      console.log(coin.name);
    });

    card.append(title, symbol, price, image);
    cryptoWrapper.append(card);
  });
};

buildScreen();
