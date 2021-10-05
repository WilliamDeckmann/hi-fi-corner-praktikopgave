document.addEventListener("DOMContentLoaded", () => {
    
    // Element variable
    const categoryList = document.querySelector("#Category-list");



    // Fetch data
    fetch("./assets/json/shopData.json")
        .then((response) => response.json())
        .then((result) => {

            // For each category in the general.json file
            result.general.categories.forEach((item) => {

                // Create all category elements
                let categoryItem = document.createElement("li")
                categoryList.appendChild(categoryItem);
                categoryItem.classList.add("Category-list__item");
                categoryItem.innerHTML = `
                    <a class="Category-list__link" href="${item.link}">
                        <img class="Category-list__img" src="./assets/img/categories/${item.img}" alt="">
                        <h2 class="Category-list__title uppercase font-color_white">
                            ${item.title}
                        </h2>
                    </a>
                `;

                // Check to find
                if(item.img == "") {
                    categoryItem.classList.add("Category-list__item_background-img_false");
                };
            });
        })
});