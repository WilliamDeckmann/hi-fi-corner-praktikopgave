document.addEventListener("DOMContentLoaded", () => {
    
    // Element variable
    const categoryList = document.querySelector("#Category__list");



    // Fetch data
    fetch("./assets/json/general.json")
        .then((response) => response.json())
        .then((result) => {

            // For each category in the general.json file
            result.categories.forEach((item) => {

                // Create all product elements
                let categoryItem = document.createElement("li")
                categoryList.appendChild(categoryItem);
                categoryItem.classList.add("Category__item");
                categoryItem.innerHTML = `
                    <a class="Category__link uppercase" href="${item.link}">
                        ${item.title}
                    </a>
                `;
            });
        })
});