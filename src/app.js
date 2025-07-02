import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const suits = [
    { name: "heart", symbol: "♥" },
    { name: "spade", symbol: "♠" },
    { name: "diamond", symbol: "♦" },
    { name: "club", symbol: "♣" }
  ];

  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const card = document.getElementById("card");
  const topSuit = card.querySelector(".top-suit");
  const bottomSuit = card.querySelector(".bottom-suit");
  const number = card.querySelector(".number");

  card.className = `card ${randomSuit.name}`;

  topSuit.innerText = randomSuit.symbol;
  bottomSuit.innerText = randomSuit.symbol;
  number.innerText = randomValue;
};
