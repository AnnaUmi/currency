const currencyFrom = document.getElementById("currency-one");
const currencyTo = document.getElementById("currency-two");
const amountFrom = document.getElementById("amount-one");
const amountTo = document.getElementById("amount-two");
const rate = document.getElementById("rate");
const swap = document.getElementById("swap");

//Фетчит обмен валют и обновляет дои

//Обработчики событий
currencyFrom.addEventListener("change", calculate);
currencyTo.addEventListener("input", calculate);
amountFrom.addEventListener("change", calculate);
amountTo.addEventListener("input", calculate);

function calculate() {
  const currencyValueFrom = currencyFrom.value;
  const currencyValueTo = currencyTo.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyValueFrom}`)
    .then(res => res.json())
    .then(data => {
      //console.log("data", data);
      const rateValue = data.rates[currencyValueTo];
      //console.log("rate", rate);
      rate.innerText = `1 ${currencyValueFrom} = ${rateValue} ${currencyValueTo}`;
      amountTo.value = (amountFrom.value * rateValue).toFixed(2);
    });
}
swap.addEventListener("click", () => {
  const temp = currencyFrom.value;
  currencyFrom.value = currencyTo.value;
  currencyTo.value = temp;
  calculate();
});
