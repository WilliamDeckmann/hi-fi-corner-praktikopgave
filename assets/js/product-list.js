document.addEventListener("DOMContentLoaded", () => {

    // URL variables
    const url = window.location.search;
    const params = new URLSearchParams(url);
    const search = params.get("search");
    
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



            // Make case-sensitivity more flexible
            let searchUpperCase = search.charAt(0).toUpperCase() + search.slice(1);

            // Set title same as input
            currentPage.textContent = `Home / ${searchUpperCase}`;
            productList_title.textContent = searchUpperCase;



            // For each product in the products.json file
            result.products.forEach((item) => {

                // Create all product elements
                function CreateProductItems() {
                    let productItem = document.createElement("li")
                    productList_container.appendChild(productItem);
                    productItem.classList.add("Product-item");
                    productItem.innerHTML = `
                        <!-- Info -->
                        <header class="Product-item__info">
                            
                            <img class="Product-item__img" src="./assets/img/products/${item.img[0]}" alt="Product image">
                            <h2 class="Product-item__title">
                                ${item.id}
                            </h2>
                            <p class="Price Price__price">
                                £${parseFloat(item.price).toFixed(2)}
                            </p>
                            <p class="Price Price__sale">
                                £${parseFloat(item.sale.price).toFixed(2)}
                            </p>
                        </header>
                        
                        <!-- Button -->
                        <button class="Purchase-button">  
                            <a class="Purchase-button__link uppercase" href="shop-details.html?search=${search}&id=${item.id}">
                                Add to cart
                            </a>
                        </button>
                    `;



                    // Sale
                    if(item.sale.active == true) {
                        document.querySelectorAll(".Price__price").forEach((item) => {
                            item.classList.add("Price__inactive")
                        });
                    }else{
                        document.querySelectorAll(".Price__sale").forEach((item) => {
                            item.style.display = "none";
                        });
                    };
                };



                // Search for product
                if(search.toLocaleLowerCase() == item.id.toLowerCase() || search.toLocaleLowerCase() == item.category.toLowerCase() || search.toLocaleLowerCase() == item.brand.toLowerCase() || search.toLocaleLowerCase() == item.additional[0].info.toLowerCase()) {

                    CreateProductItems()
                }else if(search == "") {

                    CreateProductItems()
                    currentPage.textContent = "Home / Search";
                };
            });
        })
});