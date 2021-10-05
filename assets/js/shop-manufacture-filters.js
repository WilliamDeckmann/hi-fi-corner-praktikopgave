document.addEventListener("DOMContentLoaded", () => {
    
    // Element variable
    const filtersList = document.querySelector("#Filters-manufacture__list");



    // Fetch data
    fetch("./assets/json/shopData.json")
        .then((response) => response.json())
        .then((result) => {

            // For each category in the general.json file
            result.general.manufactures.forEach((item) => {

                // Create manufacture count variables
                let manufactureCount = 0;

                // For each item that matches the manufacture
                result.products.forEach((product) => {
                    
                    if (item == product.additional[0].info) {
                        manufactureCount++;
                    };
                });



                // Create all product elements
                let filterItem = document.createElement("li")
                filtersList.appendChild(filterItem);
                filterItem.classList.add("Filters-manufactures__item");
                filterItem.innerHTML = `
                    <a class="Filters-manufacture__link font-color_dark-brown" href="shop-list.html?search=${item}">
                        ${item} (${manufactureCount})
                    </a>
                `;
            });
        })
});