import "./style.css";

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
let final = document.getElementById("final");
let rightToService = document.getElementById("right_to_service");
let DiscountInput = document.getElementById("Discount");
let DiscountBtn = document.getElementById("DiscountBtn");
let discount = document.getElementById("discount");
rightToService.innerText = 0;
discount.innerText = 0;

final.innerText = 0;
let finalPrice = document.getElementById("total-price1");
function finalPrice1() {
  finalPrice.innerText = "";
  finalPrice.innerText =
    Number(final.innerText) +
    Number(rightToService.innerText) -
    Number(discount.innerText);
}

function sum() {
  rightToService.innerText = "";
  final.innerText = "";
  let result = data.products.reduce((acc, cur) => {
    const value = Number(cur.total) || 0;
    return acc + value;
  }, 0);
  final.innerText = result;
  rightToService.innerText = result * 0.0009;
  discount.innerText = 0;

  finalPrice1();
}
function Discount(DiscountInput, final, rightToService) {
  let DiscountV = DiscountInput.value.toLowerCase();
  let result = Number(final.innerText) + Number(rightToService.innerText);
  switch (DiscountV) {
    case "gold":
      result *= 0.2;
      break;
    case "silver":
      result *= 0.15;
      break;
    case "bronze":
      result *= 0.1;
      break;
    default:
      result = "کد تخفیف وارد شده صحیح نمیباشد";
      break;
  }
  DiscountV = "";
  DiscountInput.value = "";
  discount.innerText = "";
  discount.innerText = result;
  finalPrice1();
}
DiscountBtn.addEventListener("click", () => {
  Discount(DiscountInput, final, rightToService);
});
const counter = document.getElementById("card_cuntiner");
counter.innerHTML = "";

function showItem() {
  discount.innerText = 0;
  counter.innerHTML = `
      <h1 class='absolute w-full flex justify-center items-center to-0 right- pt-5 text-4xl text-white' >رستوران مک دونالد شعبه تهران</h1>
    <div class=" fixed w-full h-4 bg-[#00688e] bottom-0 right-0"></div>
  `;
 let result = data.products
    .map((item) => { 
      return `<div
          
          class="card grid grid-cols-4 grid-rows-3 bg-white m-auto my-2 max-h-[150px] w-[95%] h-[150px] gap-x-2.5 overflow-hidden rounded-2xl"
        >
          <div class=" col-start-1 col-end-3 row-start-1 row-end-4 relative">
            <img
              class="object-cover w-full max-w-[170px] h-full"
              src="${item.img}"
              alt="Berguer"
            />
          </div>

          <h3 class="col-start-3 col-end-5 row-start-1">${item.title}</h3>
          <p class="col-start-3 col-end-5 row-start-2 row-end-3">
            <span>تومان</span><span class="price" >${item.price}</span>
          </p>
          <div
            class="max1 min-w-[50px] overflow-hidden rounded-[9px]  h-6  flex items-center justify-center col-start-3 col-end-4 row-start-3 row-end-4"
          >
            <button
              class="plus text-center text-lg w-full bg-[#008191] text-black h-full flex items-center justify-center " 
            >
              +
            </button>
            <p 
              class="counter text-lg lg:mx-3 mx-1 text-center  flex items-center justify-center"
            >
              0
            </p>
            <button
              class="mines bg-[#008191] text-center text-lg w-full h-full flex items-center justify-center"
            >
              -
            </button>
          </div>
          <div class="col-start-4 col-end-5 row-start-3 row-end-4 ml-5 mr-auto flex flex-wrap">
            <span class="total"></span><span>تومان</span>
          </div>
        </div>`;
    })
    .join("");
  counter.innerHTML += result;
}
showItem();
totalPrice();
function totalPrice() {
  const btnPlus = document.querySelectorAll(".plus");
  const btnMines = document.querySelectorAll(".mines");
  const Cunts = document.querySelectorAll(".counter");
  const price = document.querySelectorAll(".price");
  const total = document.querySelectorAll(".total");
  btnPlus.forEach((iteme, index) =>
    iteme.addEventListener("click", () => {
      let val = +Cunts[index].innerText;

      ++val;
      Cunts[index].innerText = val;
      total[index].innerText = "";
      total[index].innerText = parseInt(val * price[index].innerText);
      data.products[index].total = +total[index].innerText;
      sum();
    })
  );
  btnMines.forEach((item, index) => {
    item.addEventListener("click", () => {
      let val = +Cunts[index].innerText;
      if (val) {
        --val;
      }
      Cunts[index].innerText = val;
      total[index].innerText = "";
      total[index].innerText = parseInt(val * price[index].innerText);
      data.products[index].total = +total[index].innerText;
      sum();
    });
  });
}
finalPrice1();
const submitOrder = document.getElementById("submitOrder");
submitOrder.addEventListener("click", () => {
  data.products.forEach((prod) => {
    prod.total = 0;
  });

  final.innerText = 0;
  rightToService.innerText = 0;
  discount.innerText = 0;
  DiscountInput.value = "";
  finalPrice.innerText = 0;

  showItem();
  totalPrice();
  alert("سفارش با موفقیت ثبت شد!");
});
