let total = 0;

function addToCart(product, price) {
  const list = document.getElementById("cart-list");
  const item = document.createElement("li");
  item.textContent = product + " - Rs " + price;
  list.appendChild(item);

  total += price;
  document.getElementById("total").innerText = total;
}
