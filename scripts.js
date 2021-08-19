let mens = document.querySelector(".navlink.mens");
let womens = document.querySelector(".navlink.womens");
let shoes = document.querySelector(".navlink.shoes");
let accessories = document.querySelector(".navlink.accessories");
let all = document.querySelector(".navlink.all");
let container = document.querySelector(".products");
let products = JSON.parse(localStorage.getItem("products_list"));

console.log(products);

function getProducts() {
  fetch("https://pacific-hollows-19982.herokuapp.com/view-products/")
    .then((response) => response.json())
    .then((data) => {
      let products_list = data.data;
      localStorage.setItem("products_list", JSON.stringify(products_list));

      container.innerHTML = "";
      products_list.forEach(
        (product) => (container.innerHTML += productCard(product))
      );
    });
}

function deleteProduct() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let updated_cart = cart.filter((item) => item[0].id != id);

  localStorage.setItem("cart", JSON.stringify(updated_cart));
}

function productCard(card) {
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
  <button onclick="addToCart(${card[0]})">Add To Cart</button>
</div>

    `;
  return displayedCard;
}

function addToCart(id) {
  let products = JSON.parse(localStorage.getItem("products_list"));
  // let product = products.filter((product) => console.log(product));
  let product = products.filter((product) => product[0] == id);
  let cart_items = JSON.parse(localStorage.getItem("cart"));

  if (cart_items == null) {
    cart_items = [];
  }

  cart_items.push(product);
  localStorage.setItem("cart", JSON.stringify(cart_items));
}

all.addEventListener("click", () => {
  container.innerHTML = "";
  products.forEach((card) => {
    container.innerHTML += productCard(card);
  });
});

womens.addEventListener("click", () => {
  container.innerHTML = "";
  let women = products.filter((card) => {
    return card[5] === "Women's";
  });
  container.innerHTML = "";
  women.forEach((card) => {
    container.innerHTML += productCard(card);
  });
});

mens.addEventListener("click", () => {
  container.innerHTML = "";
  let men = products.filter((card) => {
    return card[5] === "Men's";
  });
  container.innerHTML = "";
  men.forEach((card) => {
    container.innerHTML += productCard(card);
  });
});

accessories.addEventListener("click", () => {
  container.innerHTML = "";
  let accessories = products.filter((card) => {
    return card[5] === "Accessories";
  });
  container.innerHTML = "";
  accessories.forEach((card) => {
    container.innerHTML += productCard(card);
  });
});

shoes.addEventListener("click", () => {
  container.innerHTML = "";
  let shoes = products.filter((card) => {
    return card[5] === "shoes";
  });
  container.innerHTML = "";
  shoes.forEach((card) => {
    container.innerHTML += productCard(card);
  });
});

getProducts();
