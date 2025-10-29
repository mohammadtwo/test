export function El({
  element,
  children,
  eventListener,
  dataset,
  restAttrs = {},
  ...rest
}) {
  const elem = document.createElement(element);
  // create the element => <div></div>
  for (const attr in rest) {
    elem[attr] = rest[attr];
  }
  // add rest attributes to the element => <div attr></div>
  if (children) {
    for (const child of children) {
      elem.append(child);
    }
  }
  // [element , element] => add children to the element => <div>{children}</div>
  if (eventListener) {
    eventListener.map((el) => elem.addEventListener(el.event, el.callback));
  }
  // add the event listener to the element
  if (dataset) {
    for (const key in dataset) {
      elem.dataset[key] = dataset[key];
    }
  }
  // add data to the element => <div dataId=""></div>
  for (const key in restAttrs) {
    elem.setAttribute(key, restAttrs[key]);
  }
  return elem;
}
export function setImage(data,img){
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
}
export function totalPrice(plus,mines,counter,priceI,totalI,sum,data) {
  const btnPlus = document.querySelectorAll(plus);
  const btnMines = document.querySelectorAll(mines);
  const Cunts = document.querySelectorAll(counter);
  const price = document.querySelectorAll(priceI);
  const total = document.querySelectorAll(totalI);
  btnPlus.forEach((item, index) =>
    item.addEventListener("click", () => {
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