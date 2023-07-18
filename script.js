window.addEventListener('DOMContentLoaded', function() {
  // Fetch and display the current discount product
  fetchDiscountProduct();

  // Fetch and display the trending products
  fetchTrendingProducts();
});
  
function fetchDiscountProduct() {
    // Simulating a fetch request
  var discountProduct = {
    name: "Discount Coffee",
    image: "coffee_discount.jpg",
    price: 9.99
  };

  var discountProductElement = createProductElement(discountProduct);
  document.getElementById("discount-product").appendChild(discountProductElement);
}
  
function fetchTrendingProducts() {
      // Simulating a fetch request
      var trendingProducts = [
        {
          name: "Trending Coffee 1",
          image: "coffee_trending_1.jpg",
          price: 12.99
        },
        {
          name: "Trending Coffee 2",
          image: "coffee_trending_2.jpg",
          price: 14.99
        },
        {
          name: "Trending Coffee 3",
          image: "coffee_trending_3.jpg",
          price: 11.99
        }
      ];
  
      var trendingProductsElement = document.getElementById("trending-products");
  
      trendingProducts.forEach(function(product) {
        var productElement = createProductElement(product);
        trendingProductsElement.appendChild(productElement);
      });
}
  
function createProductElement(product) {
    var productElement = document.createElement("div");
    productElement.classList.add("product");
  
    var imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.alt = product.name;
    productElement.appendChild(imageElement);
  
    var nameElement = document.createElement("h3");
    nameElement.textContent = product.name;
    productElement.appendChild(nameElement);
  
    var priceElement = document.createElement("p");
    priceElement.textContent = "$" + product.price.toFixed(2);
    productElement.appendChild(priceElement);
  
    return productElement;
}
  