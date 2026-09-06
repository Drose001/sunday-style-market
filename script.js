const cart = [];

const cartCount = document.getElementById("cartCount");
const cartButton = document.getElementById("cartButton");
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const checkoutButton = document.getElementById("checkoutButton");

document.getElementById("year").textContent =
  new Date().getFullYear();


// =========================
// CHANGE PRODUCT IMAGE
// WHEN COLOR CHANGES
// =========================

document.querySelectorAll(".color-select").forEach((select) => {

  select.addEventListener("change", () => {

    const card = select.closest(".product-card");

    const image =
      card.querySelector(".product-option-image");

    const selectedOption =
      select.options[select.selectedIndex];

    const newImage =
      selectedOption.dataset.image;

    if (image && newImage) {
      image.src = newImage;
    }

  });

});

// =========================
// ADD TO CART
// =========================

document.querySelectorAll(".add-cart").forEach((button) => {

  button.addEventListener("click", () => {

    const card = button.closest(".product-card");

    const image = card.querySelector(".product-photo");

    const name = card.dataset.name;
    const price = Number(card.dataset.price);

    const existingItem = cart.find(
      (item) => item.name === name
    );

    if (existingItem) {

      existingItem.quantity += 1;

    } else {

      cart.push({
        name: name,
        price: price,
        image: image ? image.src : "",
        quantity: 1
      });

    }

    updateCart();
    openCart();

  });

});


// =========================
// UPDATE CART
// =========================

function updateCart() {

  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  cartCount.textContent = totalQuantity;


  if (cart.length === 0) {

    cartItems.innerHTML = `
      <p class="empty-cart">
        Your cart is empty.
      </p>
    `;

    cartTotal.textContent = "$0.00";

    return;

  }


  cartItems.innerHTML = cart
    .map(
      (item, index) => `

        <div class="cart-item">

          <div class="cart-item-left">

            ${
              item.image
                ? `
                  <img
                    src="${item.image}"
                    alt="${item.name}"
                    class="cart-item-image"
                  />
                `
                : ""
            }

            <div class="cart-item-details">

              <strong>
                ${item.name}
              </strong>

              <p>
                $${item.price.toFixed(2)} each
              </p>


              <div class="quantity-controls">

                <button
                  class="quantity-btn"
                  onclick="decreaseQuantity(${index})"
                >
                  −
                </button>

                <span class="quantity-number">
                  ${item.quantity}
                </span>

                <button
                  class="quantity-btn"
                  onclick="increaseQuantity(${index})"
                >
                  +
                </button>

              </div>

              <p class="item-subtotal">
                $${(item.price * item.quantity).toFixed(2)}
              </p>

            </div>

          </div>


          <button
            class="remove-item"
            onclick="removeItem(${index})"
          >
            Remove
          </button>

        </div>

      `
    )
    .join("");


  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  cartTotal.textContent =
    `$${total.toFixed(2)}`;

}


// =========================
// INCREASE QUANTITY
// =========================

function increaseQuantity(index) {

  cart[index].quantity += 1;

  updateCart();

}


// =========================
// DECREASE QUANTITY
// =========================

function decreaseQuantity(index) {

  if (cart[index].quantity > 1) {

    cart[index].quantity -= 1;

  } else {

    cart.splice(index, 1);

  }

  updateCart();

}


// =========================
// REMOVE ITEM
// =========================

function removeItem(index) {

  cart.splice(index, 1);

  updateCart();

}


// =========================
// OPEN CART
// =========================

function openCart() {

  cartPanel.classList.add("open");

  overlay.classList.add("show");

}


// =========================
// CLOSE CART
// =========================

function closeCartPanel() {

  cartPanel.classList.remove("open");

  overlay.classList.remove("show");

}


cartButton.addEventListener(
  "click",
  openCart
);

closeCart.addEventListener(
  "click",
  closeCartPanel
);

overlay.addEventListener(
  "click",
  closeCartPanel
);


// =========================
// CHECKOUT
// =========================

checkoutButton.addEventListener(
  "click",
  () => {

    if (cart.length === 0) {

      alert("Your cart is empty.");

      return;

    }

    alert(
      "Checkout will be connected after we finish the store and payment setup."
    );

  }
);