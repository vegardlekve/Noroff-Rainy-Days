const baseUrl = "https://lekve.site/API/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");

async function getProduct(url) {
  try {
    const response = await fetch(url);
    const products = await response.json();
    let productHtml = "";

    products.forEach(function (product) {
      productHtml += `<a href="jacket.html?id=${product.id}"><div class="shopbox shop-grid">
      <div class="product-image shop-jakker flex" style="background-image">
        <img src="${product.images[0].src}">
        <h3>${product.name}</h3>
        <p>${product.prices.price} ${product.prices.currency_symbol}</p>
        <p class="cta">Order here</p>
      </div>
     </div>
    </a>`;
    });

    productContainer.innerHTML = productHtml;
  } catch (error) {
    console.log(error);
    productContainer.innerHTML = `<div class="error">An error has occured</div>`;
  }
}

getProduct(baseUrl);
