let mens = document.querySelector(".navlink.mens");
let womens = document.querySelector(".navlink.womens");
let shoes = document.querySelector(".navlink.shoes");
let accessories = document.querySelector(".navlink.accessories");
let all = document.querySelector(".navlink.all");
let container = document.querySelector(".products");

let products = [
  {
    imgUrl: "./images/original-removebg-preview.png",
    imgAlt: "p-1",
    Name: "Factorie Women's Skinny",
    Price: "R449",
    Description: "High Rise Skinny -90's Blue",
    Category: "Women's",
  },
  {
    imgUrl: "./images/original1-removebg-preview.png",
    imgAlt: "p-1",
    Name: "Factorie Slouchy Jean",
    Price: "R500",
    Description: "90's Blue Jean",
    Category: "Women's",
  },
  {
    imgUrl: "./images/A04694_0BEAF_9XX_F-removebg-preview.png",
    imgAlt: "p-1",
    Name: "Diesel T-shirt - Love Forever",
    Price: "R1024",
    Description: "Women's Cotton T-shirt",
    Category: "Women's",
  },
  {
    imgUrl: "./images/diesel_hoodie-removebg-preview.png",
    imgAlt: "p-1",
    Name: "Factorie Slouchy Jean",
    Price: "R2,499",
    Description: "Logo hoodie in loopback cotton",
    Category: "Men's",
  },
  {
    imgUrl: "./images/diesel-t-diego-removebg-preview.png",
    imgAlt: "p-1",
    Name: "Diesel Diego Tee",
    Price: "R999",
    Description: "Short Sleeve Tee Navy",
    Category: "Men's",
  },
  {
    imgUrl: "./images/slim-fit-removebg-preview.png",
    imgAlt: "p-1",
    Name: "Diesel Jeans Men's",
    Price: "R299",
    Description: "Slim Fit Jeans",
    Category: "Men's",
  },
  {
    imgUrl: "./images/vhwxay1450849208450-removebg-preview.png",
    imgAlt: "p-1",
    Name: "Grey Sweater",
    Price: "R200",
    Description: "Grey Woolen Sweater",
    Category: "Accessories",
  },
  {
    imgUrl: "./images/f993865122838097cf85d34bdcd0ee1d.jpg",
    imgAlt: "p-1",
    Name: "Grey Sweater",
    Price: "R200",
    Description: "Grey Woolen Sweater",
    Category: "Accessories",
  },
  {
    imgUrl: "./images/Untitled-removebg-preview.png",
    imgAlt: "image",
    Name: "Veldskoen",
    Price: "R1400",
    Description: "Urban Natural Sole",
    Category: "shoes",
  },

  {
    imgUrl: "./images/removebg-preview.png",
    imgAlt: "image",
    Name: "Peep Toe Mary Jane",
    Price: "R1400",
    Description: "Leatherette Stiletto Heel",
    Category: "shoes",
  },
];


function productCard(card) {
  let displayedCard = `
  <div class="product">
  <img
    src="${card.imgUrl}"
    class="product-img"
    alt="${card.imgAlt}"
  />
  <h2 class="product-head">${card.Name}</h2>
  <p class="text">${card.Price}</p>
  <p class="text">${card.Description}</p>
  <p class="text">${card.Category}</p>
  <button>Add To Cart</button>
</div>

    `;
  return displayedCard;
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
    return card.Category === "Women's";
  });
  container.innerHTML = "";
  women.forEach((card) => {
    container.innerHTML += productCard(card);
  });
});

mens.addEventListener("click", () => {
  container.innerHTML = "";
  let men = products.filter((card) => {
    return card.Category === "Men's";
  });
  container.innerHTML = "";
  men.forEach((card) => {
    container.innerHTML += productCard(card);
  });
});

accessories.addEventListener("click", () => {
  container.innerHTML = "";
  let accessories = products.filter((card) => {
    return card.Category === "Accessories";
  });
  container.innerHTML = "";
  accessories.forEach((card) => {
    container.innerHTML += productCard(card);
  });
});

shoes.addEventListener("click", () => {
  container.innerHTML = "";
  let shoes = products.filter((card) => {
    return card.Category === "shoes";
  });
  container.innerHTML = "";
  shoes.forEach((card) => {
    container.innerHTML += productCard(card);
  });
});

products.forEach((card) => {
  container.innerHTML += productCard(card);
});
