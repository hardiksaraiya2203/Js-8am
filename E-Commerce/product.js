let products = [];

fetch("https://fakestoreapi.com/products").then(y => y.json()).then(y => {
    console.log(y);
    products = y;
    display(y);
    displayBtn(y);
});

const display = (y) => {
    let showProduct = y.map((value) => {
        return `<div class=" col-sm-6  col-md-4 p-2" >
            <div class="product-card">
            <div class="image">
            <img w-100 src="${value.image}" alt="Product Image">
            </div>
            <h2 class="fsP fw-bold">${value.title}</h2>
            <p class="price">Price: $${value.price}</p>
            <div class="rating">
            <span class="star fw-bold"> Rating ${value.rating.rate}</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9734;</span>
            </div>
            <p class="description"><small>${value.description}</small></p>
            <p class="category fw-bold mb-0">Category: ${value.category}</p>
        </div></div>`
    })
    document.getElementById('products').innerHTML = showProduct.join(" ")
}

const displayBtn = (y) => {
    let showBtn = y.reduce((pre, value, index) => {
        if (value.category == "men's clothing") {
            value.category = "mens clothing"
        }
        if (value.category == "women's clothing") {
            value.category = "womens clothing"
        }
        if (pre.includes(value.category) == false) {
            pre.push(value.category)
        }
        return pre;
    }, [])
        .map((value) => {
            return `<button class="company-btn px-3 py-2 border-0 fw-bold text-capitalize" onclick="filterData('${value}')">${value}</button>`
        })
    document.getElementById('companies').innerHTML = showBtn.join(" ") + ` <button class="company-btn px-3 py-2 border-0 fw-bold" onclick="displayAll()">All</button>`;
}
// displayBtn();

const filterData = (categories) => {
    let showfilteredData = products.filter((value) => {
        return value.category === categories
    });
    display(showfilteredData);
}


const displayAll = (y) => {
    display(y)
}


const dropDown = () => {
    let selectlist = document.getElementById("select").value;
    if (selectlist == "atoz") {

        products.sort(function (a, b) {
            if (a.title > b.title) {
                return 1;
            }
            else {
                return -1
            }
        })
        display(products)

    }
    else if (selectlist == "ztoa") {

        products.sort(function (a, b) {
            if (a.title > b.title) {
                return -1
            }
            else {
                return 1
            }
        })
        display(products);


    }

    else if (selectlist == "lowtohigh") {
        products.sort((a, b) => {
            return a.price - b.price;
        })
        display(products);
    }

    else if (selectlist == "hightolow") {
        products.sort((a, b) => {
            return b.price - a.price;
        })
        display(products);
    }

}

var dt = new Date();
var hours = dt.getHours();
var AmOrPm = hours >= 12 ? 'pm' : 'am';
hours = (hours % 12) || 12;
var minutes = dt.getMinutes();
var finalTime = "Time  - " + hours + ":" + minutes + " " + AmOrPm;
document.getElementById('Date').innerHTML = finalTime;