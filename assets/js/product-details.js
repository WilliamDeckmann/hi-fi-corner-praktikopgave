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
                                Home / ${search} / ${id}
                            </h2>
                        </header>
        
                        <!-- Container -->
                        <section class="Product-details__container">
        
                            <!-- details -->
                            <section class="Product-details__details">
        
                                <!-- Gallery -->
                                <section class="Product-gallery">
        
                                    <!-- Hero -->
                                    <img class="Product-gallery__hero" src="" alt="Product gallery hero">
        
                                    <!-- Gallery -->
                                    <h2 class="Product-gallery__title uppercase">
                                        More views
                                    </h2>
                                    <figure class="Product-gallery__gallery">
                                        <img class="Product-gallery__img" src="" alt="Product gallery img">
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
                                                    See other "manufacture" products
                                                </p>
                                            </a>
        
                                            <!-- Price -->
                                            <div class="Price-container">
                                                <p class="Price Price__sale">
                                                    "price"
                                                </p>
                                                <p class="Price">
                                                    "price"
                                                </p>
                                            </div>
                                        </section>
        
                                        <!-- About -->
                                        <p class="Product-about__title">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi turpis, condimentum vel ligula vitae, lacinia eleifend metus. Integer egestas pulvinar feugiat. Donec purus tortor, tempus vitae lectus eu, sollicitudin commodo metus. Donec purus tortor, tempus vitae lectus eu, sollicitudin commodo metus. Nullam nec interdum elit, at maximus velit. Nulla ut mauris sit amet nibh molestie dignissim.
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
                                                <ul class="Product-color__list">
                                                    <li class="Product-color__item">
                                                        <input class="Product-color__input" type="radio">
                                                        <p class="Product-color__title">
                                                            Black
                                                        </p>
                                                    </li>
                                                    <li class="Product-color__item">
                                                        <input class="Product-color__input" type="radio">
                                                        <p class="Product-color__title">
                                                            White
                                                        </p>
                                                    </li>
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
                                        <ul class="Additional-product-info__list">
                                            <li class="Additional-product-info__item">
                                                <div class="Additional-product-info__option-container">
                                                    <p class="Additional-product-info__option uppercase">
                                                        Manufacture
                                                    </p>
                                                </div>
                                                <div class="Additional-product-info__info-container">
                                                    <p class="Additional-product-info__info uppercase">
                                                        "name"
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </article>
                                </section>
                            </section>
        
        
        
                            <!-- Description -->
                            <section class="Product-description">
                                <h1 class="Product-description__title uppercase">
                                    Description
                                </h1>
                                <ul class="Product-description__list">
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
                    };
                });
        })
});