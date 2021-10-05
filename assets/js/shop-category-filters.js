document.addEventListener("DOMContentLoaded", () => {
    
    // Element variable
    const categoryList = document.querySelector("#Category__list");



    // Fetch data
    fetch("./assets/json/shopData.json")
        .then((response) => response.json())
        .then((result) => {

            // For each category filter
            result.general.categoryFilters.forEach((item) => {

                // Create container
                let categoryItem = document.createElement("li")
                categoryList.appendChild(categoryItem);
                categoryItem.classList.add("Category__container");

                // Create button
                let categoryButton = document.createElement("button")
                categoryItem.appendChild(categoryButton);
                categoryButton.classList.add("Category__button");

                // Create title
                let categoryTitle = document.createElement("p")
                categoryButton.appendChild(categoryTitle);
                categoryTitle.classList.add("Category__title");
                categoryTitle.classList.add("font-color_dark-brown");
                categoryTitle.textContent = item.title;

                // Create link
                let categoryOptions = document.createElement("ul")
                categoryItem.appendChild(categoryOptions);
                categoryOptions.classList.add("Category__options");
                categoryOptions.classList.add("Category_state_inactive");

                // Create link
                item.options.forEach((option) => {
                    let categoryLink = document.createElement("a")
                    categoryOptions.appendChild(categoryLink);
                    categoryLink.classList.add("Category__link");
                    categoryLink.classList.add("font-color_dark-brown");
                    categoryLink.textContent = option.title;
                    categoryLink.href = option.link;
                });

                categoryButton.addEventListener("click", () => {
                    categoryOptions.classList.toggle("Category_state_inactive")
                    categoryTitle.classList.toggle("Category_state_active")
                });
            });
        })
});