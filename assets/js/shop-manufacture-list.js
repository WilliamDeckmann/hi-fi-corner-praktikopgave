document.addEventListener("DOMContentLoaded", () => {
    
    // Element variable
    const manufactures_list = document.querySelector("#Manufacture__list");



    // Fetch data
    fetch("./assets/json/shopData.json")
        .then((response) => response.json())
        .then((result) => {

            // For each manufacture list
            for(let i = 0; i < 7; i++) {
                // Create all product elements
                let manufacturesItem = document.createElement("li")
                manufactures_list.appendChild(manufacturesItem);
                manufacturesItem.classList.add("Manufacture-list__item");
                manufacturesItem.innerHTML = `
                    <a class="Manufacture-list__link uppercase" href="shop-list.html?search=${result.general.manufactures[i]}">
                        ${result.general.manufactures[i]}
                    </a>
                `;
            };
        })
});