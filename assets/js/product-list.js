document.addEventListener("DOMContentLoaded", () => {

    // URL variables
    const url = window.location.search;
    const params = new URLSearchParams(url);
    const search = params.get("search");
    
    // Element variable
    const currentPage = document.querySelector("#Current-page");
    const productList_title = document.querySelector("#Product-list__title");
    const productCount_count = document.querySelectorAll(".Product-count__count");
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
                var searchInput = searchBar_input.value
                location.href = `shop-list.html?search=${searchInput}`;
                event.preventDefault();
            };

            // Run function once input is detected
            searchBar_button.addEventListener("click", SearchForProduct);



            // Make case-sensitivity more flexible
            let searchUpperCase = search.charAt(0).toUpperCase() + search.slice(1);

            // Set title same as input
            currentPage.innerHTML = `<span class="Current-page__marker">Home</span> / ${searchUpperCase}`;
            productList_title.textContent = searchUpperCase;

            // Product count variable
            let productCount = 0;
            


            // For each product in the products.json file
            result.products.forEach((item) => {

                // Create all product elements
                function CreateProductItems() {
                    let productItem = document.createElement("li")
                    productList_container.appendChild(productItem);
                    productItem.classList.add("Product-item");
                    productItem.innerHTML = `
                        <!-- Info -->
                        <article class="Product-item__info">
                            <img class="Product-item__img" src="./assets/img/products/${item.img[0]}" alt="Product image">
                            <h2 class="Product-item__title uppercase">
                                ${item.name}
                            </h2>
                            <div class="Price-container_type_product">
                                <p class="Price Price__price font-color_dark-brown" id="${item.id}__price">
                                    £${parseFloat(item.price).toFixed(2)}
                                </p>
                                <p class="Price Price__sale font-color_dark-brown" id="${item.id}__sale">
                                    £${parseFloat(item.sale.price).toFixed(2)}
                                </p>
                            </div>
                        </article>
                        
                        <!-- Button -->
                        <button class="Purchase-button" id="${item.id}__button">  
                            <a class="Purchase-button__link uppercase font-color_white" id="${item.id}__link" href="shop-details.html?search=${search}&id=${item.id}">
                                Add to cart
                            </a>
                        </button>
                    `;



                    // Update product count
                    productCount++;

                    // Product price & sale variables
                    let productPrice = document.querySelector(`#${item.id}__price`);
                    let productSale = document.querySelector(`#${item.id}__sale`);
                    let productButton = document.querySelector(`#${item.id}__button`);

                    // If sold out
                    if(item.soldOut == true) {
                        productPrice.classList.remove("Price_state_marked");
                        productSale.classList.add("Price_state_inactive");
                        productButton.classList.add("Price_state_inactive");
                    }else{

                        // If on sale
                        if(item.sale.active == true) {
                            productPrice.classList.add("Price_state_marked");
                        }else{
                            productSale.classList.add("Price_state_inactive");
                        };
                    }
                };



                // Display product count
                productCount_count.forEach((item) => {
                    item.textContent = productCount;
                });

                // Search for product
                if(search.toLocaleLowerCase() == item.id.toLowerCase() || search.toLocaleLowerCase() == item.category.toLowerCase() || search.toLocaleLowerCase() == item.brand.toLowerCase() || search.toLocaleLowerCase() == item.additional[0].info.toLowerCase()) {

                    CreateProductItems()
                }else if(search == "") {

                    CreateProductItems()
                    currentPage.innerHTML = `<span class="Current-page__marker">Home</span> / Search`;
                    productList_title.textContent = "Search"
                };
            });
        })
});