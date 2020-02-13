function calc() {
  fetch("items.json")
    .then(res => res.json())
    .then(data => console.log(data));
}
calc();
