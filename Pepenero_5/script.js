let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartEl = document.getElementById("cart");
  const totalEl = document.getElementById("total");

  cartEl.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name + " - £" + item.price;
    cartEl.appendChild(li);
    total += item.price;
  });

  totalEl.textContent = "Total: £" + total.toFixed(2);
}

function checkout() {
  alert("Order placed! (Demo only)");
  cart = [];
  updateCart();
}

function toggleMenu() {
  document.querySelector("nav").classList.toggle("active");
}
