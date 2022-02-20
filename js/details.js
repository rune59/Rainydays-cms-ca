
const detailContainer = document.querySelector(".oneProduct");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

// This link is for developing on my local computer
// const url = "http://localhost:10018/wp-json/wc/store/products/" + id;

// And this link is for use after the WP and database has been uploaded 
// from local server on my computer to my web-hotel. 
const url = "https://runrun.no/rainydays/wp-json/wc/store/products/" + id;

console.log(url);

async function getThisProduct() {

    try {
        const response = await fetch(url);
        const thisProduct = await response.json();
        // console.log("Name:" + thisProduct.name);
        // console.log("Price:" + thisProduct.prices.price);
        // console.log("Type:" + thisProduct.type);
        // console.log("Short description:" + thisProduct.short_description);
        // console.log("Category:" + thisProduct.categories[0].name);
        // console.log("Quantity in stock:" + thisProduct.quantity_limit);

        createHTML(thisProduct);
    }
    catch(error) {
        console.log(error);
    }
    
}
getThisProduct();


function createHTML(thisProduct) {
    detailContainer.innerHTML =
            `<div class="oneProduct">
                <h2>${thisProduct.name}</h2>
                <img src="${thisProduct.images[0].src}" alt="${thisProduct.name}">
                <h3>Product name: ${thisProduct.name}</h3>
                <h3>Price in NOK: ${thisProduct.prices.price}</h3>
                <h3>Short description: ${thisProduct.short_description}</h3>
                <h3>Category: ${thisProduct.categories[0].name}</h3>
                <h3>Type: ${thisProduct.type}</h3>
                <h3>Quantity in stock: ${thisProduct.quantity_limit}</h3>
            </div>`
        ;
}



