document.addEventListener("DOMContentLoaded", () => {
    
    // Element variable
    const productList_container = document.querySelector("#Product-list__container");
    const productList_error = document.querySelector("#Product-list__error");
    const searchBar_input = document.querySelector("#Search-bar__input");



    // Fetch data
    fetch("./assets/json/products_test.json")
        .then((response) => response.json())
        .then((result) => {

            // Create product
            function CreateProduct() {

                // For each product
                result.products.forEach((item) => {

                    // Find product
                    if(searchBar_input.value == item.id || searchBar_input.value == item.category || searchBar_input.value == item.brand) {

                        var productItem = document.createElement("li")
                        productList_container.appendChild(productItem);
                        productItem.classList.add("Product-item");
                        productItem.style.borderColor = item.brand
                        productItem.innerHTML = `
                            <!-- Info -->
                            <header class="Product-item__info">
                                
                                <img class="Product-item__img" src="${item.img}" alt="Product image">
                                <h2 class="Product-item__title">
                                    ${item.title}
                                </h2>
                                <p class="Product-item__price">
                                    ${item.price}
                                </p>
                            </header>
                            
                            <!-- Button -->
                            <button class="Purchase-button">  
                                <a class="Purchase-button__link uppercase" href="#">
                                    Add to cart
                                </a>
                            </button>
                        `;
                    } else {
                        console.log("Product notfound");
                    }
                });
            };



            // Run function once input is detected
            searchBar_input.addEventListener("input", CreateProduct);
        })
});