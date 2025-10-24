import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

const data = {
  products: [
    {
      id: 1,
      title: "همبرگر مخصوص",
      price: 10000,
    },
    {
      id: 2,
      title: "همبرگر معمولی",
      price: 8000,
    },
    {
      id: 3,
      title: " همبرگر مخصوص قارچ و پنیر",
      price: 20000,
    },
    {
      id: 4,
      title: "همبرگر معمولی با قارچ و پنیر",
      price: 10000,
    },
    {
      id: 5,
      title: "سیب زمینی سرخ کرده",
      price: 10000,
    },
    {
      id: 6,
      title: "سیب زمینی سرخ کرده ویژه",
      price: 25000,
    },
    {
      id: 7,
      title: "نوشابه",
      price: 5000,
    },
    {
      id: 8,
      title: "نوشابه رژیمی",
      price: 6000,
    },
    {
      id: 9,
      title: "سالاد سزار",
      price: 25000,
    },
    {
      id: 10,
      title: "سالاد فصل",
      price: 8000,
    },
  ],
};
let img = [
  {
    berger: "./src/assets/Images/Berguer.jpg",
  },
  {
    french: "./src/assets/Images/french_fries.png",
  },
  {
    salad: "./src/assets/Images/salad.png",
  },
  {
    soda: "./src/assets/Images/soda.png",
  },
];

for (let i = 0; data.products.length > i; i++) {
  if (
    data.products[i].title === "همبرگر مخصوص" ||
    data.products[i].title === "همبرگر معمولی" ||
    data.products[i].title === " همبرگر مخصوص قارچ و پنیر" ||
    data.products[i].title === "همبرگر معمولی با قارچ و پنیر"
  ) {
    data.products[i].img = img[0].berger;
  } else if (
    data.products[i].title === "سیب زمینی سرخ کرده" ||
    data.products[i].title === "سیب زمینی سرخ کرده ویژه"
  ) {
    data.products[i].img = img[1].french;
  } else if (
    data.products[i].title === "سالاد سزار" ||
    data.products[i].title === "سالاد فصل"
  ) {
    data.products[i].img = img[2].salad;
  } else if (
    data.products[i].title === "نوشابه" ||
    data.products[i].title === "نوشابه رژیمی"
  ) {
    data.products[i].img = img[3].soda;
  }
}

const counter = document.getElementById("card_cuntiner");
counter.innerHTML = "";

function showItem() {
  let result = data.products
    .map((item) => {
      return `<div
          
          class="card grid grid-cols-4 grid-rows-3 bg-white m-auto mt-5 max-h-[150px] w-[95%] h-[150px] gap-x-2.5 overflow-hidden rounded-2xl"
        >
          <div class=" col-start-1 col-end-3 row-start-1 row-end-4 relative">
            <img
              class="object-cover w-full h-full"
              src="${item.img}"
              alt="Berguer"
            />
          </div>

          <h3 class="col-start-3 col-end-5 row-start-1">${item.title}</h3>
          <p class="col-start-3 col-end-5 row-start-2 row-end-3">
            <span>تومان</span><span class="price" >${item.price}</span>
          </p>
          <div
            class="max1 min-w-[50px] border-2 rounded-[9px]  h-6  flex items-center justify-center col-start-3 col-end-4 row-start-3 row-end-4"
          >
            <button
              class="plus text-center text-lg w-full text-black h-full flex items-center justify-center " 
            >
              +
            </button>
            <p 
              class="counter text-lg text-center  flex items-center justify-center"
            >
              0
            </p>
            <button
              class="mines text-center text-lg w-full h-full flex items-center justify-center"
            >
              -
            </button>
          </div>
          <div class="col-start-4 col-end-5 row-start-3 row-end-4 ml-5 mr-auto">
            <span class="total">0</span><span>تومان</span>
          </div>
        </div>`;
    })
    .join("");
  counter.innerHTML = result;
}
showItem();
totalPrice();
function totalPrice() {
  const btnPlus = document.querySelectorAll(".plus");
  const btnMines = document.querySelectorAll(".mines");
  const Cunts = document.querySelectorAll(".counter");
  btnPlus.forEach((item, index) =>
    item.addEventListener("click", () => {
      let val = parseInt(Cunts[index].innerText);
      Cunts[index].innerText = ++val;
      
    })
  );
  btnMines.forEach((item, index) => {
    item.addEventListener("click", () => {
      let val = Cunts[index].innerText;
      Cunts[index].innerText = --val;
      
    });
  });
}

