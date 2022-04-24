const featuredUrl =
  "https://lekve.site/API/wp-json/wc/store/products/?featured=true";

const featuredContainer = document.querySelector(".featured");

async function getFeatured(url) {
  try {
    const response = await fetch(url);
    const featured = await response.json();
    featured.forEach(function (feature) {
      featuredContainer.innerHTML += `<div class="featureImg"><img src="${feature.images[0].src}">
                                        </div>`;
    });
  } catch (error) {
    console.log(error);
    featuredContainer.innerHTML = `<div class="error">An error has occured</div>`;
  }
}

getFeatured(featuredUrl);
