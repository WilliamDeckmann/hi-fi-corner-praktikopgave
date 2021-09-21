document.addEventListener("DOMContentLoaded", () => {
    
    // Element variable
    const productList_title = document.querySelector("#Product-list__title");
    const productCount_count = document.querySelector("#Product-count__count");
    const productList_container = document.querySelector("#Product-list__container");
    const searchBar_input = document.querySelector("#Search-bar__input");
    const searchBar_button = document.querySelector("#Search-bar__button");



    // Fetch data
    fetch("./assets/json/products_test.json")
        .then((response) => response.json())
        .then((result) => {

            // Create product
            function SearchForProduct(event) {

                // Prevent page from reloading when submitting form
                event.preventDefault();

                // Remove all unwanted products
                let foundProductItem = document.querySelectorAll(".Product-item");
                foundProductItem.forEach((item) => {
                    item.remove();
                });

                // Set Product-list title same as input
                productList_title.textContent = searchBar_input.value;

                // For each product in the products.json file
                result.products.forEach((item) => {

                    // Find product
                    if(searchBar_input.value == item.id || searchBar_input.value == item.category || searchBar_input.value == item.brand) {

                        // Create all product elements
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
                                <a class="Purchase-button__link uppercase" href="details.html?id=${item.id}">
                                    Add to cart
                                </a>
                            </button>
                        `;
                    };
                });
            };



            // Run function once input is detected
            searchBar_button.addEventListener("click", SearchForProduct);
        })
});