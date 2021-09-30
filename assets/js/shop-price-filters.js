document.addEventListener("DOMContentLoaded", () => {
    
    // Element variable
    const filtersList = document.querySelector("#Filters-price__list");



    // Fetch data
    fetch("./assets/json/general.json")
        .then((response) => response.json())
        .then((result) => {

            // For each category in the general.json file
            result.priceRange.forEach((item) => {

                // Create all product elements
                let filterItem = document.createElement("li")
                filtersList.appendChild(filterItem);
                filterItem.classList.add("Filters-price__item");
                filterItem.innerHTML = `
                    <a class="Filters-price__link font-color_dark-brown" href="">
                        £${parseFloat(item.min).toFixed(2)} - £${parseFloat(item.max).toFixed(2)}
                    </a>
                `;
            });
        })
});