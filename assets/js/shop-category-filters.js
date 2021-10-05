document.addEventListener("DOMContentLoaded", () => {
    
    // Element variable
    const categoryList = document.querySelector("#Category__list");



    // Fetch data
    fetch("./assets/json/shopData.json")
        .then((response) => response.json())
        .then((result) => {

            // For each category filter
            result.general.categories.forEach((item) => {

                // Create all product elements
                let categoryItem = document.createElement("li")
                categoryList.appendChild(categoryItem);
                categoryItem.classList.add("Category__item");
                categoryItem.innerHTML = `
                    <a class="Category__link font-color_dark-brown" href="${item.link}">
                        ${item.title}
                    </a>
                `;
            });
        })
});