const detailProduct = document.querySelector(".detailProduct");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const jacket = params.get("id");

const url = "https://lekve.site/API/wp-json/wc/store/products/" + jacket;

async function detailJacket() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    createHtml(details);
  } catch (error) {
    console.log(error);
    detailProduct.innerHTML = `<div class="error">An error has occured</div>`;
  }
}

detailJacket();

function createHtml(details) {
  detailProduct.innerHTML = `<div class="jacket-box flex">
                                    <img src="${details.images[0].src}">
                                    <h1>${details.name}</h1>
                                    <h2>${details.prices.price} ${details.prices.currency_symbol}</h2>
                                    ${details.description}
                                    <a href="checkout.html" class="cta">ADD TO CART</a>
                                </div>`;
}
