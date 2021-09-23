document.addEventListener("DOMContentLoaded", () => {

    // URL variables
    let url = window.location.search;
    let params = new URLSearchParams(url);
    let search = params.get("search");
    let searchtUpperCase = search.charAt(0).toUpperCase() + search.slice(1);
    
    // Element variable
    const currentPage = document.querySelector("#Current-page");
    const productList_title = document.querySelector("#Product-list__title");
    const productCount_count = document.querySelector("#Product-count__count");
    const productList_container = document.querySelector("#Product-list__container");
    const searchBar_input = document.querySelector("#Search-bar__input");
    const searchBar_button = document.querySelector("#Search-bar__button");



    // Fetch data
    fetch("./assets/json/products.json")
        .then((response) => response.json())
        .then((result) => {

            // Redirect user to the search result
            function SearchForProduct(event) {

                // Redirect user on click
                var searhInput = searchBar_input.value
                location.href = `shop-list.html?search=${searhInput}`;
                event.preventDefault();
            };

            // Run function once input is detected
            searchBar_button.addEventListener("click", SearchForProduct);



            // Set title same as input
            currentPage.textContent = `Home / ${searchtUpperCase}`;
            productList_title.textContent = searchtUpperCase;

            // For each product in the products.json file
            result.products.forEach((item) => {

                // Search for product
                if(search == item.id.toLowerCase() || search == item.category || search == item.brand.toLowerCase()) {

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
                                ${item.id}
                            </h2>
                            <p class="Product-item__price">
                                ${item.price}
                            </p>
                        </header>
                        
                        <!-- Button -->
                        <button class="Purchase-button">  
                            <a class="Purchase-button__link uppercase" href="details.html?search=${search}&id=${item.id}">
                                Add to cart
                            </a>
                        </button>
                    `;
                };
            });
        })
});