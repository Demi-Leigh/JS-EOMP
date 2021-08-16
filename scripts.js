let mens = document.querySelector(".navlink.mens");
let womens = document.querySelector(".navlink.womens");
let shoes = document.querySelector(".navlink.shoes");
let accessories = document.querySelector(".navlink.accessories");
let all = document.querySelector(".navlink.all");
let container = document.querySelector(".products");

let products = [
  {
    imgUrl:
      "https://o.remove.bg/downloads/65f7187c-697c-4194-932c-84be4174845f/original-removebg-preview.png",
    imgAlt: "p-1",
    Name: "Factorie Women's Skinny",
    Price: "R449",
    Description: "High Rise Skinny -90's Blue",
    Category: "Women's",
  },
  {
    imgUrl:
      "https://o.remove.bg/downloads/a90e861d-c2fa-47be-942a-6d2262214ca0/original-removebg-preview.png",
    imgAlt: "p-1",
    Name: "Factorie Slouchy Jean",
    Price: "R500",
    Description: "90's Blue Jean",
    Category: "Women's",
  },
  {
    imgUrl:
      "https://o.remove.bg/downloads/8a733fef-864a-465f-840a-b259b42fa17b/17017259_34077347_600-removebg-preview.png",
    imgAlt: "p-1",
    Name: "Diesel T-shirt - Love Forever",
    Price: "R1024",
    Description: "Women's Cotton T-shirt",
    Category: "Women's",
  },
  {
    imgUrl:
      "https://o.remove.bg/downloads/97640f92-ca06-4e7c-94b9-d0a7b309c3cb/414214-0000-412414-1-530x-removebg-preview.png",
    imgAlt: "p-1",
    Name: "Diesel Loopback Hoodie",
    Price: "R2,499",
    Description: "Logo hoodie in loopback cotton",
    Category: "Men's",
  },
  {
    imgUrl:
      "https://o.remove.bg/downloads/6d2cedc9-b2d4-4bcb-ab3a-ca631a5c68e8/diesel-t-diego-printed-logo-cotton-navy-t-shirt-p10671-53765_image-removebg-preview.png",
    imgAlt: "p-1",
    Name: "Diesel Diego Tee",
    Price: "R999",
    Description: "Short Sleeve Tee Navy",
    Category: "Men's",
  },
  {
    imgUrl:
      "https://o.remove.bg/downloads/e8af1d54-9ac6-487c-b9f1-d4f37516ade2/diesel-thavar-xp-jeans-grey-removebg-preview.png",
    imgAlt: "p-1",
    Name: "Diesel Jeans Men's",
    Price: "R299",
    Description: "Slim Fit Jeans",
    Category: "Men's",
  },
  {
    imgUrl:
      "https://o.remove.bg/downloads/a4ad9729-6a09-4180-9e82-a45782eb570d/617i8cStrOL._AC_UY500_-removebg-preview.png",
    imgAlt: "p-1",
    Name: "Rose Flower Infinity Pendant",
    Price: "R3,475",
    Description: "925 Sterling Silver Necklace",
    Category: "Accessories",
  },
  {
    imgUrl:
      "https://o.remove.bg/downloads/f7e6c237-9589-4007-a98e-2364b6e09a60/best-mens-watches-2019-e1565040231745-removebg-preview.png",
    imgAlt: "p-1",
    Name: "Nordgreen Classic Watch",
    Price: "R2,784",
    Description: "Black Dial Brown Vegan Leather Watch",
    Category: "Accessories",
  },
  {
    imgUrl:
      "https://o.remove.bg/downloads/430f4300-ebb3-4489-9757-7d1cd4dfcde6/veldskoen-grey-sole-safari-genuine-leather-shoe1024x1024-womans_200021_1600x-removebg-preview.png",
    imgAlt: "image",
    Name: "Veldskoen",
    Price: "R1400",
    Description: "Urban Natural Sole",
    Category: "shoes",
  },

  {
    imgUrl:
      "https://o.remove.bg/downloads/2a18c4c4-2735-44c9-b3de-7bf92e5436d9/9e71607b88302504b8b46fb5e3547796-removebg-preview.png",
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
