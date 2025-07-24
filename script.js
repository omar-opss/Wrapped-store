const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalPriceElement.textContent = "";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <p><strong>${item.name}</strong> - EGP ${item.price}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(div);
  });

  totalPrice.innerText = "Total: EGP " + total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function clearCart() {
  localStorage.removeItem("cart");
  cart = [];
  renderCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("السلة فاضية.");
    return;
  }

  alert("تمت عملية الشراء! شكراً لثقتك في Wrapped 💚");
  clearCart();
}

renderCart();
function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} تمت إضافته إلى السلة 🛒`);
}
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");

let total = 0;

cartItems.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "cart-item";
  div.innerHTML = `
    <p><strong>${item.name}</strong> - EGP ${item.price}</p> 
    <button onclick="removeItem(${index})">Remove</button>
  `;
  cartContainer.appendChild(div);
  total += item.price;
});

totalPriceEl.innerText = "Total: EGP " + total;

function removeItem(index) {
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  location.reload();
}

function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}

function checkout() {
  alert("This is a test checkout. (Fake payment)");
}
<script src="script.js"></script>
