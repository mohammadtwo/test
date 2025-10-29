import { data1 } from "./constant/products";
import "./style.css";
import { totalPrice } from "./utils/el";

const data = data1;

let final = document.getElementById("final");
let rightToService = document.getElementById("right_to_service");
let DiscountInput = document.getElementById("Discount");
let DiscountBtn = document.getElementById("DiscountBtn");
let discount = document.getElementById("discount");
let finalPrice = document.getElementById("total-price1");
let [plus, mines, counter, price, total] = [
  ".plus",
  ".mines",
  ".counter",
  ".price",
  ".total",
];

rightToService.innerText = 0;
discount.innerText = 0;
final.innerText = 0;

function finalPrice1() {
  finalPrice.innerText = "";
  finalPrice.innerText =
    Number(final.innerText) +
    Number(rightToService.innerText) -
    (isNaN(Number(discount.innerText)) ? 0 : Number(discount.innerText));
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
const container = document.getElementById("card_cuntiner");
container.innerHTML = "";

function showItem() {
  discount.innerText = 0;

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
          <div class="col-start-4 col-end-5 row-start-3 row-end-4 ml-5 mr-auto flex flex-wrap">
            <span class="total"></span><span>تومان</span>
          </div>
        </div>`;
    })
    .join("");
  container.innerHTML = result;
}
showItem();
totalPrice(plus, mines, counter, price, total);
// function totalPrice() {
//   const btnPlus = document.querySelectorAll(".plus");
//   const btnMines = document.querySelectorAll(".mines");
//   const Cunts = document.querySelectorAll(".counter");
//   const price = document.querySelectorAll(".price");
//   const total = document.querySelectorAll(".total");
//   btnPlus.forEach((iteme, index) =>
//     iteme.addEventListener("click", () => {
//       let val = +Cunts[index].innerText;

//       ++val;
//       Cunts[index].innerText = val;
//       total[index].innerText = "";
//       total[index].innerText = parseInt(val * price[index].innerText);
//       data.products[index].total = +total[index].innerText;
//       sum();
//     })
//   );
//   btnMines.forEach((item, index) => {
//     item.addEventListener("click", () => {
//       let val = +Cunts[index].innerText;
//       if (val) {
//         --val;
//       }
//       Cunts[index].innerText = val;
//       total[index].innerText = "";
//       total[index].innerText = parseInt(val * price[index].innerText);
//       data.products[index].total = +total[index].innerText;
//       sum();
//     });
//   });
// }
totalPrice(plus, mines, counter, price, total,sum,data);

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
  totalPrice(plus, mines, counter, price, total);
  alert("سفارش با موفقیت ثبت شد!");
});
