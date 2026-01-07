const cryptoWrapper = document.getElementById("crypto-wrapper");

const buildScreen = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1"
  );
  const coins = await response.json();
  console.log(coins);

  coins.forEach((coin) => {
    const card = document.createElement("div");
    card.classList.add("card");

    coins.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    const title = document.createElement("h2");
    title.innerText = coin.name;

    const symbol = document.createElement("h2");
    symbol.innerText = coin.symbol;

    const price = document.createElement("h4");
    price.textContent = `Value: $${coin.current_price}`;

    if (coin.current_price >= 100) {
      card.classList.add("expensive");
    }

    if (coin.current_price <= 100) {
      card.classList.add("cheap");
    }

    card.addEventListener("click", () => {
      console.log(coin.name);
    });

    card.append(title, symbol, price);
    cryptoWrapper.append(card);
  });
};

buildScreen();
