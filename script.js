// =====================================================
// SUNDAY STYLE MARKET
// PAYPAL CART + PRODUCT IMAGE OPTIONS
// NO STRIPE
// =====================================================


// =====================================================
// COPYRIGHT YEAR
// =====================================================

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// =====================================================
// PRODUCT COLOR IMAGE CHANGE
// =====================================================

document
  .querySelectorAll(".color-select")
  .forEach((select) => {

    select.addEventListener("change", function () {

      const productCard =
        this.closest(".product-card");

      if (!productCard) {
        return;
      }


      const productImage =
        productCard.querySelector(".product-photo");

      if (!productImage) {
        return;
      }


      const selectedOption =
        this.options[this.selectedIndex];

      const newImage =
        selectedOption.dataset.image;


      if (newImage) {
        productImage.src = newImage;
      }

    });

  });


// =====================================================
// PAYPAL CART
// =====================================================

function startPayPalCart() {

  // Make sure PayPal loaded correctly
  if (typeof cartPaypal === "undefined") {

    console.error("PayPal cart script did not load.");

    return;
  }


  // ===================================================
  // PAYPAL VIEW CART
  // ===================================================

  const viewCart =
    document.querySelector(
      'paypal-cart-button[data-id="pp-view-cart"]'
    );


  if (viewCart) {

    cartPaypal.Cart({
      id: "pp-view-cart"
    });

  }


  // ===================================================
  // PRODUCT 1 PAYPAL ADD TO CART
  // ===================================================

  const product1 =
    document.querySelector(
      'paypal-add-to-cart-button[data-id="D5SDSHKANLT7C"]'
    );


  if (product1) {

    cartPaypal.AddToCart({
      id: "D5SDSHKANLT7C"
    });

  }


// ===================================================
// PRODUCT 2 PAYPAL
// RED & GOLD GAME DAY EARRINGS
// ===================================================

cartPaypal.AddToCart({
  id: "R92AYB4HJM536"
});


  // ===================================================
  // 🔴 PRODUCT 3 PAYPAL
  // ADD PRODUCT 3 ID HERE LATER
  // ===================================================

  /*
  cartPaypal.AddToCart({
    id: "PUT_PRODUCT_3_PAYPAL_ID_HERE"
  });
  */


  // ===================================================
  // 🔴 PRODUCT 4 PAYPAL
  // ADD PRODUCT 4 ID HERE LATER
  // ===================================================

  /*
  cartPaypal.AddToCart({
    id: "PUT_PRODUCT_4_PAYPAL_ID_HERE"
  });
  */


  // ===================================================
  // 🔴 PRODUCT 5 PAYPAL
  // ADD PRODUCT 5 ID HERE LATER
  // ===================================================

  /*
  cartPaypal.AddToCart({
    id: "PUT_PRODUCT_5_PAYPAL_ID_HERE"
  });
  */


  // ===================================================
  // 🔴 PRODUCT 6 PAYPAL
  // ADD PRODUCT 6 ID HERE LATER
  // ===================================================

  /*
  cartPaypal.AddToCart({
    id: "PUT_PRODUCT_6_PAYPAL_ID_HERE"
  });
  */


  // ===================================================
  // 🔴 PRODUCT 7 PAYPAL
  // ADD PRODUCT 7 ID HERE LATER
  // ===================================================

  /*
  cartPaypal.AddToCart({
    id: "PUT_PRODUCT_7_PAYPAL_ID_HERE"
  });
  */


  // ===================================================
  // 🔴 PRODUCT 8 PAYPAL
  // ADD PRODUCT 8 ID HERE LATER
  // ===================================================

  /*
  cartPaypal.AddToCart({
    id: "PUT_PRODUCT_8_PAYPAL_ID_HERE"
  });
  */

}


// =====================================================
// START PAYPAL
// =====================================================

startPayPalCart();