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

    // View button variables
    const viewButton = document.querySelectorAll(".Product-view__button")
    const gridButton = document.querySelectorAll(".Product-view__grid")
    const listButton = document.querySelectorAll(".Product-view__list")



    // Fetch data
    fetch("./assets/json/shopData.json")
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
                    var productItem = document.createElement("li")
                    productList_container.appendChild(productItem);
                    productItem.classList.add("Product-item");
                    productItem.classList.add("Product-item_state_grid");
                    productItem.innerHTML = `
                        <!-- Info -->
                        <img class="Product-item__img" src="./assets/img/products/${item.img[0]}" alt="Product image">
                        <section class="Product-item__container">
                            <article class="Product-item__info">
                                <h2 class="Product-item__title uppercase">
                                    ${item.name}
                                </h2>
                                <div class="Price-container_type_product">
                                    <p class="Price Price__price font-color_dark-brown" id="${item.id}__price">
                                        ??${parseFloat(item.price).toFixed(2)}
                                    </p>
                                    <p class="Price Price__sale font-color_dark-brown" id="${item.id}__sale">
                                        ??${parseFloat(item.sale.price).toFixed(2)}
                                    </p>
                                </div>
                            </article>
                            
                            <!-- Button -->
                            <button class="Purchase-button" id="${item.id}__button">  
                                <a class="Purchase-button__link uppercase font-color_white" id="${item.id}__link">
                                    Add to cart
                                </a>
                            </button>
                        </section>
                    `;



                    // Find product button
                    let buttonLink = document.querySelector(`#${item.id}__link`);

                    // Set href of product link
                    if(search.toLowerCase() == item.name.toLowerCase() || search.toLowerCase() == item.category.toLowerCase() || search.toLowerCase() == item.brand.toLowerCase() || search.toLowerCase() == item.additional[0].info.toLowerCase()) {

                        buttonLink.href = `shop-details.html?search=${search}&id=${item.id}`
                    }else if(search == "") {

                        buttonLink.href = `shop-details.html?search=search&id=${item.id}`
                    };



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



                    // List-view button
                    listButton.forEach((item) => {
                        item.addEventListener("click", () => {

                            // Remove & add grid & list classes
                            productList_container.classList.remove("Product-list__container_state_grid")
                            productList_container.classList.remove("Product-list__container_state_list")
                            productList_container.classList.add("Product-list__container_state_list")

                            // Remove & add grid & list classes
                            productItem.classList.remove("Product-item_state_grid")
                            productItem.classList.remove("Product-item_state_list")
                            productItem.classList.add("Product-item_state_list")

                            // Turn on active class & remove all others who have the class
                            viewButton.forEach((button) => {
                                button.classList.remove("Product-view_active")
                            });
                            listButton.forEach((button) => {
                                button.classList.add("Product-view_active")
                            });
                        });
                    });


                    
                    // Grid-view button
                    gridButton.forEach((button) => {
                        button.addEventListener("click", () => {

                            // Remove & add grid & list classes
                            productList_container.classList.remove("Product-list__container_state_grid")
                            productList_container.classList.remove("Product-list__container_state_list")
                            productList_container.classList.add("Product-list__container_state_grid")

                            // Remove & add grid & list classes
                            productItem.classList.remove("Product-item_state_grid")
                            productItem.classList.remove("Product-item_state_list")
                            productItem.classList.add("Product-item_state_grid")

                            // Turn on active class & remove all others who have the class
                            viewButton.forEach((button) => {
                                button.classList.remove("Product-view_active")
                            });
                            gridButton.forEach((button) => {
                                button.classList.add("Product-view_active")
                            });
                        });
                    })
                };



                // Display product count
                productCount_count.forEach((item) => {
                    item.textContent = productCount;
                });

                // Search for product
                if(search.toLowerCase() == item.name.toLowerCase() || search.toLowerCase() == item.category.toLowerCase() || search.toLowerCase() == item.brand.toLowerCase() || search.toLowerCase() == item.additional[0].info.toLowerCase()) {

                    CreateProductItems()
                }else if(search == "") {

                    CreateProductItems()
                    currentPage.innerHTML = `<span class="Current-page__marker">Home</span> / Search`;
                    productList_title.textContent = "Search"
                };
            });
        })
});