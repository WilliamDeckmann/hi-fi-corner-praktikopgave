document.addEventListener("DOMContentLoaded", () => {

    // URL variables
    const path = window.location.pathname;
    const page = path.split("/").pop();
    
    // Element variable
    const menuList = document.querySelector("#Nav__list");



    // Fetch data
    fetch("./assets/json/shopData.json")
        .then((response) => response.json())
        .then((result) => {

            // For each menu item
            result.general.pages.forEach((item) => {

                // Create all product elements
                let menuItem = document.createElement("li")
                menuList.appendChild(menuItem);
                menuItem.classList.add("Nav__item");
                menuItem.classList.add("Nav__item");
                menuItem.innerHTML = `
                    <a class="Nav__link" id="${item.title}__link" href="${item.link}">
                        ${item.title}
                    </a>
                `;
            });



            // Find the current page
            function FindCurrentPage() {

                // Check if on page: home
                if(page == "index.html") {
                    document.querySelector("#Home__link").classList.add("Nav__link_active");
                };
                
                // Check if on page: shop
                if(page == "brands.html") {
                    document.querySelector("#Brands__link").classList.add("Nav__link_active");
                };
                
                // Check if on page: shop
                if(page == "shop-frontpage.html") {
                    document.querySelector("#Shop__link").classList.add("Nav__link_active");
                } else if(page == "shop-list.html") {
                    document.querySelector("#Shop__link").classList.add("Nav__link_active");
                } else if(page == "shop-details.html") {
                    document.querySelector("#Shop__link").classList.add("Nav__link_active");
                };
            };

            // Initiator
            FindCurrentPage();
        })
});