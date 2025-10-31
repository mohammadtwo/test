import { data1 } from "./constant/products";
import "./style.css";
import { totalPrice } from "./utils/el";
import { showItem } from "./components/products/products";

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


showItem(discount, data, container);
totalPrice(plus, mines, counter, price, total);

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

showItem(discount, data, container);
  totalPrice(plus, mines, counter, price, total);
  alert("سفارش با موفقیت ثبت شد!");
});
