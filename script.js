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
      <p><strong>${item.name}</strong> - ${item.price} ج.م</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(div);
  });

  totalPriceElement.textContent = "الإجمالي: " + total + " ج.م";
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
