document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("darkModeToggle");

    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark-mode");
        toggleBtn.innerText = "☀️";
    }

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem("dark-mode", isDarkMode);
        toggleBtn.innerText = isDarkMode ? "☀️" : "🌙";
    });
});

// =========================================================================

AOS.init();
window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});


const products = [
    { img: "img/1.jpeg", name: "Car Model 1", stock: 10, price: 1000 },
    { img: "img/2.jpeg", name: "Car Model 2", stock: 15, price: 1200 },
    { img: "img/3.jpeg", name: "Car Model 3", stock: 5, price: 900 },
    { img: "img/4.jpeg", name: "Car Model 4", stock: 7, price: 1100 },
    { img: "img/5.jpeg", name: "Car Model 5", stock: 20, price: 1500 },
    { img: "img/6.jpeg", name: "Car Model 6", stock: 3, price: 1300 },
    { img: "img/7.jpeg", name: "Car Model 6", stock: 3, price: 1300 },
    { img: "img/8.jpeg", name: "Car Model 6", stock: 3, price: 1300 },
    { img: "img/9.jpeg", name: "Car Model 6", stock: 3, price: 1300 },
    { img: "img/10.jpeg", name: "Car Model 6", stock: 3, price: 1300 },
    { img: "img/11.jpeg", name: "Car Model 6", stock: 3, price: 1300 },
    { img: "img/12.jpeg", name: "Car Model 6", stock: 3, price: 1300 },
    { img: "img/13.jpeg", name: "Car Model 6", stock: 3, price: 1300 },
    { img: "img/14.jpeg", name: "Car Model 6", stock: 3, price: 1300 },
    { img: "img/15.jpeg", name: "Car Model 6", stock: 3, price: 1300 },
    { img: "img/16.jpeg", name: "Car Model 6", stock: 3, price: 1300 },
    { img: "img/17.jpeg", name: "Car Model 6", stock: 3, price: 1300 },
    { img: "img/18.jpeg", name: "Car Model 6", stock: 3, price: 1300 }
];

function displayProducts() {
    const container = document.getElementById('product-container');

    products.forEach(product => {
        const cardHTML = `
            <div class="col-md-4">
                <div class="card d-flex flex-row p-2">
                    <img src="${product.img}" class="card-img-left" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">Price: $${product.price}</p>
                        <p class="card-text">Stock: ${product.stock}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}
displayProducts();
