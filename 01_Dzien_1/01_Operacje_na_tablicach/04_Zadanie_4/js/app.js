document.addEventListener("DOMContentLoaded", function () {

    const products = [
        {
            name: "Fiat Tipo",
            category: "car",
            price: 29900,
            condition: "new"
        },
        {
            name: "MacBook Pro",
            category: "computer",
            price: 9999,
            condition: "new"
        },
        {
            name: "Xiaomi Redmi Note 8",
            category: "phone",
            price: 2399,
            condition: "new"
        },
        {
            name: "Audi A6",
            category: "car",
            price: 23450,
            condition: "used"
        },
        {
            name: "Samsung Galaxy Note 9",
            category: "phone",
            price: 1899,
            condition: "used"
        },
        {
            name: "Seat Leon",
            category: "car",
            price: 66000,
            condition: "new"
        },
        {
            name: "Nike Sneakers",
            category: "shoes",
            price: 345,
            condition: "new"
        },
        {
            name: "Dacia Logan",
            category: "car",
            price: 33500,
            condition: "new"
        }
    ];

    const allProducts = document.getElementById("all-products")
    const filteredProducts = document.getElementById("filtered-products")

    products.forEach(function (element) {
        const li = document.createElement("li");
        li.innerHTML = `<strong> ${element.name}</strong><span>, ${element.price} - ${element.condition}</span>`
        allProducts.appendChild(li);
    })

    products.filter(function (element) {
            if (element.category === "car" && element.condition === "new" && element.price <= 45000) {
                const li = document.createElement("li");
                li.innerHTML = `<strong> ${element.name}</strong><span>, ${element.price} - ${element.condition}</span>`
                filteredProducts.appendChild(li);
            }
        }
    )


})
;