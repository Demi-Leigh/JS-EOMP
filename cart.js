function cart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let container = document.querySelector(".product-list");

  container.innerHTML = "";
  cart.forEach((item) => {
    let product = item[0];
    container.innerHTML += renderCart(product);
  });
}

function renderCart(card) {
  let displayedCard = `
    <div class="product">
  
    <img
      src="./images/diesel_hoodie-removebg-preview.png"
      class="product-img"
    />
    <h2 class="product-head">${card[2]}</h2>
    <p class="text">${card[3]}</p>
    <p class="text">${card[4]}</p>
    <p class="text">${card[5]}</p>
    <button onclick="remove(${card[0]})">Remove From Cart</button>
  </div>
  
      `;
  return displayedCard;
}

cart();

function remove(id) {
  let cartItems = JSON.parse(localStorage.getItem("cart"));
  let updatedCart = cartItems.filter((item) => item[0][0] != id);
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  cart();
}
