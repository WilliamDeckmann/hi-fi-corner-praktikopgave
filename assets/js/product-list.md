# product-list.js

## What is the function of this js file?

- At first it fetches all the data from a json file containing all the data for the product-items.

- It then redirects you to a new site with the url changed to match the search result.

- For each item in the json file, it checks to see wether it matches the search result submitted in the input.

- If the input value matches either the id, category, or brand, it will create and append the matching item/items.

- Each product-item includes a bit of inner html with the necessary data inside it.

- If no results match the submitted input, no product-items will show and all previous items are removed.

- Each product-item also gets a unique id and search tag applied to their url, based on data from the json file.


## Extra functions

- When submitting an input in the search field, the search result will be displayed at the top of the product-list container and header.