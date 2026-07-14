function performDOMOperations(){

    // 1. Change Product Name
    document.getElementById("product1").innerText = "Gaming Mouse";

    // 2. Print Product Names
    let products = document.getElementsByClassName("productName");

    console.log("Product Names:");

    for(let i=0;i<products.length;i++){
        console.log(products[i].innerText);
    }

    // 3. Print Prices
    let prices = document.querySelectorAll(".price");

    console.log("Prices:");

    prices.forEach(function(price){
        console.log(price.innerText);
    });

    // 4. Change Description
    document.querySelector(".description").innerText =
    "RGB Gaming Mouse with High Precision.";

    // 5. Count Products
    let cards = document.querySelectorAll(".card");

    console.log("Total Products: " + cards.length);

    // 6. innerHTML, innerText, textContent
    let description =
    document.querySelector(".description");

    console.log("innerHTML:");
    console.log(description.innerHTML);

    console.log("innerText:");
    console.log(description.innerText);

    console.log("textContent:");
    console.log(description.textContent);

    // 7. Get Image Attributes
    let image =
    document.getElementById("productImage");

    console.log("Image Source:");
    console.log(image.getAttribute("src"));

    console.log("Alt:");
    console.log(image.getAttribute("alt"));

    // 8. Change Image
    image.src = "gamingmouse.jpg";

    // 9. Check Alt Attribute
    console.log("Has Alt:");
    console.log(image.hasAttribute("alt"));

    // 10. Remove Title Attribute
    image.removeAttribute("title");

    console.log("Title attribute removed.");
}
