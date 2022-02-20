
// This link is for developing on my local computer
// const baseUrl = "http://localhost:10018/wp-json/wc/store/products";

// And this link is for use after the WP and database has been uploaded 
// from local server on my computer to my web-hotel. 
const baseUrl = "https://runrun.no/rainydays/wp-json/wc/store/products";


const productContainer = document.querySelector(".manyProducts");
const perPage = document.querySelector(".per-page-selection");
const categories = document.querySelectorAll(".categories");
const searchButton = document.querySelector(".search-button");

async function getProducts(url) {
    try {
        const response = await fetch(url);
        const getResults = await response.json();
        productContainer.innerHTML = "";
        createHTML(getResults);
    }
    catch (error) {
        console.log(error);
    }
}
getProducts(baseUrl);

function createHTML(products) {
    products.forEach(function (product) {
        productContainer.innerHTML +=
            `<a href="details.html?id=${product.id}">
            <div class="oneProduct">
                <h2>${product.name}</h2>
                <img src="${product.images[0].src}" alt="${product.name}">
            </div>
            </a>`
            
    });
}

perPage.onchange = function (event) {
    const newUrl = baseUrl + `?per_page=${event.target.value}`;
    productContainer.innerHTML = "";
    getProducts(newUrl);
}

categories.forEach(function (category) {
    category.onclick = function (event) {
        let newUrl;
        if (event.target.id === "featured") {
            newUrl = baseUrl + "?featured=true";
        }
        else {
            const categoryChosen = event.target.value;
            // newUrl = this.baseUrl + `?category=${categoryChosen}`
            newUrl = baseUrl + `?category=${categoryChosen}`
        }
        productContainer.innerHTML = "";
        getProducts(newUrl);
    }
})

// This part of the code does not work

// searchButton.onclick = function () {
//     const searchInput = document.querySelector("#search-input");
//     console.log(searchInput);
//     const newUrl = baseUrl + `?search=${searchInput}`;
//     productContainer.innerHTML = "";
//     getProducts(newUrl);
// }
