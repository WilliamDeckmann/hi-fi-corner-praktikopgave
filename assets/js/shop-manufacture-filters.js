document.addEventListener("DOMContentLoaded", () => {
    
    // Element variable
    const filtersList = document.querySelector("#Filters-manufacture__list");



    // Fetch data
    fetch("./assets/json/general.json")
        .then((response) => response.json())
        .then((result) => {

            // For each category in the general.json file
            result.manufactures.forEach((item) => {

                // Create all product elements
                let filterItem = document.createElement("li")
                filtersList.appendChild(filterItem);
                filterItem.classList.add("Filters-manufactures__item");
                filterItem.innerHTML = `
                    <a class="Filters-manufacture__link font-color_dark-brown" href="shop-list.html?search=${item}">
                        ${item}
                    </a>
                `;
            });
        })
});