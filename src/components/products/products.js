export function showItem(discount, data, container) {
  discount.innerText = 0;
    container.innerHTML = `
      <h1 class='absolute w-full flex justify-center items-center to-0 right- pt-5 text-4xl text-white' >رستوران مک دونالد شعبه تهران</h1>
    <div class=" fixed w-full h-4 bg-[#00688e] bottom-0 right-0"></div>
  `;
  let result = data.products
    .map((item) => {
     return  `<div
          
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
  container.innerHTML += result;
}
