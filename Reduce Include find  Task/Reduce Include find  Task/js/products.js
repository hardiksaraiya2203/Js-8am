fetch("https://fakestoreapi.com/products").then(function (value) {
  return value.json()
}).then(function (value) {
  a = value
  display(a);
  butn(a);
})


function display(b) {
  let dis = b.map(function (value) {

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
  </div></div>`;


  });
  document.getElementById("products").innerHTML = dis.join(" ");
}


function butn(DisB) {

  let comp = DisB.reduce(function (pre, value, index) {
    if(value.category=="men's clothing"){
      value.category="mens clothing"
    }
    if(value.category=="women's clothing"){
      value.category="womens clothing"
    }
    if (pre.includes(value.category) == false) {
      pre.push(value.category);
    }
    return pre;
  }, []).map(function (value) {
    return ` <button class="company-btn px-3 py-2 border-0 fw-bold" onclick="FilterData('${value}')">${value}</button>`
  });
  document.getElementById("companies").innerHTML = `<button class="company-btn px-3 py-2 border-0 fw-bold" onclick="All()">All</button>` + comp.join(" ");
}


function All() {
  display(a);
}


function FilterData(compa) {

  let p = a.filter(function (value) {
    return value.category == compa;
  });
  display(p);
  // return console.log(p);
  // return p;
}


function HighToLow(a) {
    a.sort(function (a, b) {
      if (a.price > b.price) {
        return -1;
      }
      else {
        return 1;
      }
    });
    display(a);

};

function LowToHigh(a) {
  a.sort(function (a, b) {
    if (a.price > b.price) {
      return 1;
    }
    else {
      return -1;
    }

  });
  display(a);

};


// sorting a to z

function atoz(a) {

  a.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    else
      return -1;

  });
  display(a);
};
// sorting a to z end


// sorting z to a
function ztoa(a) {

  a.sort(function (a, b) {
    if (a.title > b.title) {
      return -1;
    }
    else {
      return +1;
    }
  });
  display(a);
};
