document.addEventListener("DOMContentLoaded", () => {
    
    // Element variable
    const manufactures_list = document.querySelector("#Manufactures__list");



    // Fetch data
    fetch("./assets/json/general.json")
        .then((response) => response.json())
        .then((result) => {

            // For each category in the general.json file
            result.manufactures.forEach((item) => {

                // Create all product elements
                let manufacturesItem = document.createElement("li")
                manufactures_list.appendChild(manufacturesItem);
                manufacturesItem.classList.add("Manufactures__item");
                manufacturesItem.innerHTML = `
                    <a class="Category-list__link uppercase" href="shop-list.html?search=${item}">
                        ${item}
                    </a>
                `;
            });
        })
});