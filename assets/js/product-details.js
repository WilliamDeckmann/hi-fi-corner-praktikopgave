document.addEventListener("DOMContentLoaded", () => {

    // URL variables
    let url = window.location.search;
    let params = new URLSearchParams(url);
    let search = params.get("search");
    let id = params.get("id");
    
    // Element variable
    const productDetails = document.querySelector("#Product-details");



    // Fetch data
    fetch("./assets/json/products.json")
        .then((response) => response.json())
        .then((result) => {

            // Make first letter in search uppercase
            let searchUpperCase = search.charAt(0).toUpperCase() + search.slice(1);

            // For each product in the products.json file
            result.products.forEach((item) => {

                // Find product
                if(id == item.id) {

                    // Create all product elements
                    productDetails.innerHTML = `
                    <!-- Header -->
                    <header class="Product-details__header">
    
                        <!-- Current page -->
                        <h2 class="Current-page">
                            Home / ${searchUpperCase} / ${id}
                        </h2>
                    </header>
    
                    <!-- Container -->
                    <section class="Product-details__container">
    
                        <!-- details -->
                        <section class="Product-details__details">
    
                            <!-- Gallery -->
                            <section class="Product-gallery">
    
                                <!-- Hero -->
                                <img class="Product-gallery__hero" src="./assets/img/products/${item.img[0]}" alt="Product gallery hero">
    
                                <!-- Gallery -->
                                <h2 class="Product-gallery__title uppercase">
                                    More views
                                </h2>
                                <figure class="Product-gallery__container" id="Product-gallery__container">
                                </figure>
                            </section>
    
    
    
                            <!-- Product info -->
                            <section class="Product-info">
    
                                <!-- Product about -->
                                <section class="Product-about">
                                    <h2 class="Product-about__title">
                                        ${item.id}
                                    </h2>
    
                                    <!-- Offer -->
                                    <section class="Product-info__offer">
    
                                        <!-- Other products -->
                                        <a class="Other-products" href="#">
                                            <p class="Other-products__title">
                                                See other ${item.additional[0].info} products
                                            </p>
                                        </a>
    
                                        <!-- Price -->
                                        <div class="Price-container">
                                            <p class="Price Price__price">
                                                £${parseFloat(item.price).toFixed(2)}
                                            </p>
                                            <p class="Price Price__sale">
                                                £${parseFloat(item.sale.price).toFixed(2)}
                                            </p>
                                        </div>
                                    </section>
    
                                    <!-- About -->
                                    <p class="Product-about__title">
                                        ${item.details}
                                    </p>
                                </section>
    
    
    
                                <!-- product options -->
                                <ul class="Product-options">
                                    <li class="Product-options__item">
                                        <a class="Product-options__link" href="#">
                                            <p class="Product-options__title uppercase">
                                                Ask a question
                                            </p>
                                        </a>
                                    </li>
                                    <li class="Product-options__item">
                                        <a class="Product-options__link" href="#">
                                            <p class="Product-options__title uppercase">
                                                Part exchange
                                            </p>
                                        </a>
                                    </li>
                                    <li class="Product-options__item">
                                        <a class="Product-options__link" href="#">
                                            <p class="Product-options__title uppercase">
                                                Pay by finance
                                            </p>
                                        </a>
                                    </li>
                                    <li class="Product-options__item">
                                        <a class="Product-options__link" href="#">
                                            <p class="Product-options__title uppercase">
                                                Seen a better price?
                                            </p>
                                        </a>
                                    </li>
                                </ul>
    
    
    
                                <!-- Product selection -->
                                <section class="Product-selection">
    
                                    <!-- Product color selection -->
                                    <section class="Product-color">
    
                                        <!-- Form -->
                                        <form class="Product-color__form" action="">
    
                                            <!-- Error label -->
                                            <label class="Product-color__error-label Product-color__error-label_active">
                                                Finish <span class="Product-color__error-span">*</span>
                                            </label>
    
                                            <!-- List -->
                                            <ul class="Product-color__list" id="Product-color__list">
                                                
                                                <!-- Product color items go here --> 

                                            </ul>
                                        </form>
    
                                        <!-- Error message -->
                                        <p class="Product-color__error-message">
                                            * Required fields
                                        </p>
                                    </section>
    
                                    <!-- Product quantity -->
                                    <section class="Product-quantity">
    
                                        <!-- Quantity -->
                                        <form class="Quantity">
                                            <label class="Quantity__label" for="">
                                                Qty:
                                            </label>
                                            <input class="Quantity__input" type="text" >
                                            <button class="Quantity__button uppercase">
                                                Add to cart
                                            </button>
                                        </form>
    
                                        <!-- Or -->
                                        <p class="Product-quantity__or uppercase">-Or-</p>
    
                                        <!-- Paypal -->
                                        <div class="PayPal">
                                            <a class="PayPal__link" href="#">
                                                <img class="PayPal__logo" src="" alt="PayPal logo">
                                            </a>
                                            <p class="PayPal__description">
                                                The safer, easier way to pay
                                            </p>
                                        </div>
    
                                        <!-- Line -->
                                        <hr class="Product-quantity__line">
                                    </section>
                                </section>
    
    
    
                                <!-- Additional -->
                                <article class="Additional-product-info">
                                    <h2 class="Additional-product-info__title uppercase">
                                        Additional information
                                    </h2>
                                    <ul class="Additional-product-info__list" id="Additional-product-info__list">
                                        
                                        <!-- Additional product info items go here -->

                                    </ul>
                                </article>
                            </section>
                        </section>
    
    
    
                        <!-- Description -->
                        <section class="Product-description">
                            <h1 class="Product-description__title uppercase">
                                Description
                            </h1>
                            <ul class="Product-description__list" id="Product-description__list">
                                <li class="Product-description__item">
                                    <p class="Product-description__option">
                                        Power Output (8 / 4 Ohm RMS)
                                    </p>
                                    <p class="Product-description__info">
                                        45 W / 60 W
                                    </p>
                                </li>
                            </ul>
                        </section>
                    </section>
    
                    <!-- Footer -->
                    <footer class="Product-details__footer">
                        <section class="Product-call">
                            <i class="fas fa-phone-alt Phone icon"></i>
                            <h2 class="Product-call__title uppercase">
                                Call us about this product
                            </h2>
                        </section>
                    </footer>
                    `;



                    // Image
                    let galleryContainer = document.querySelector("#Product-gallery__container");

                    // For each img
                    item.img.forEach((item) => {
        
                        // Create, append & add content
                        let galleryImg = document.createElement("img")
                        galleryContainer.appendChild(galleryImg);
                        galleryImg.classList.add("Product-gallery__img");
                        galleryImg.src = `./assets/img/products/${item}`;
                        galleryImg.alt = "Product gallery img";
                    });



                    // Sale
                    if(item.sale.active == true) {
                        document.querySelectorAll(".Price__price").forEach((item) => {
                            item.classList.add("Price__inactive")
                        });
                    }else{
                        document.querySelectorAll(".Price__sale").forEach((item) => {
                            item.style.display = "none";
                        });
                    };



                    // Colors
                    let colorList = document.querySelector("#Product-color__list");
        
                    // For each color
                    item.colors.forEach((item) => {
        
                        // Create, append & add content
                        let colorItem = document.createElement("li")
                        colorList.appendChild(colorItem);
                        colorItem.classList.add("Product-color__item");
                        colorItem.innerHTML = `
                            <input class="Product-color__input" type="radio">
                            <p class="Product-color__title">
                                ${item}
                            </p>
                        `;
                    });



                    // Additional information
                    let additionalList = document.querySelector("#Additional-product-info__list");
        
                    // For each additional info
                    item.additional.forEach((item) => {
                        
                        // Create, append & add content
                        let additionalItem = document.createElement("li")
                        additionalList.appendChild(additionalItem);
                        additionalItem.classList.add("Additional-product-info__item");
                        additionalItem.innerHTML = `
                        <div class="Additional-product-info__title-container">
                            <p class="Additional-product-info__title uppercase">
                                ${item.title}
                            </p>
                        </div>
                        <div class="Additional-product-info__info-container">
                            <p class="Additional-product-info__info uppercase">
                                ${item.info}
                            </p>
                        </div>
                        `;
                    });


                    // Description
                    let descriptionList = document.querySelector("#Product-description__list");
        
                    // For each additional info
                    item.description.forEach((item) => {
                        
                        // Create, append & add content
                        let descriptionItem = document.createElement("li")
                        descriptionList.appendChild(descriptionItem);
                        descriptionItem.classList.add("Product-description__item");
                        descriptionItem.innerHTML = `
                            <p class="Product-description__option">
                                ${item.title}
                            </p>
                            <p class="Product-description__info">
                                ${item.info}
                            </p>
                        `;
                    });
                };
            });
        })
});