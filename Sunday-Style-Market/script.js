const cart = [];
const cartCount = document.getElementById("cartCount");
const cartButton = document.getElementById("cartButton");
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const checkoutButton = document.getElementById("checkoutButton");

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".add-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".product-card");
    const item = {
      name: card.dataset.name,
      price: Number(card.dataset.price)
    };

    cart.push(item);
    updateCart();
    openCart();
  });
});

function updateCart() {
  cartCount.textContent = cart.length;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    cartTotal.textContent = "$0.00";
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item, index) => `
        <div class="cart-item">
          <div>
            <strong>${item.name}</strong>
            <p>$${item.price.toFixed(2)}</p>
          </div>
          <button onclick="removeItem(${index})">Remove</button>
        </div>
      `
    )
    .join("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function openCart() {
  cartPanel.classList.add("open");
  overlay.classList.add("show");
}

function closeCartPanel() {
  cartPanel.classList.remove("open");
  overlay.classList.remove("show");
}

cartButton.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartPanel);
overlay.addEventListener("click", closeCartPanel);

checkoutButton.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  alert("Checkout will be connected after we finish the store and payment setup.");
});
