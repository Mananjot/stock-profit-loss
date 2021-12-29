const initialSharePriceElement = document.querySelector("#initialSharePrice");
const noOfSharesElement = document.querySelector("#noOfShares");
const currentSharePriceElement = document.querySelector("#currentSharePrice");
const result = document.querySelector("#result-text");
const submitButton = document.querySelector("#submitBtn");

submitButton.addEventListener("click", () => {
  var initialSharePrice = parseFloat(initialSharePriceElement.value);
  var noOfShares = parseInt(noOfSharesElement.value);
  var currentSharePrice = parseFloat(currentSharePriceElement.value);

  var profit = (currentSharePrice - initialSharePrice) * noOfShares;
  var profitPercent =  profit / (initialSharePrice * noOfShares) * 100;
  
  console.log(result);
  console.log("BUttom Click");
  if (profit > 0) {
    result.textContent =
      "WhooHo!! You made the profit of " +
      profit +
      " and your profit percentage is " +
      profitPercent + "% 😀";
    result.style.color = "green";
    console.log(profit);
  } else if (profit < 0) {
    result.textContent =
      "Oh No. You are under loss of " +
      -profit +
      " and your loss percentage is " +
      -profitPercent + "% 😔";

    result.style.color = "red";
  } else {
    result.textContent = "You are at Par. No Profit No Loss 😊";
    result.style.color = "rgb(73, 87, 126)";
  }
});
