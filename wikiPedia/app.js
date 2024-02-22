function searchItems() {
    let searchValue = document.getElementById('search').value;

    fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=' + searchValue)
        .then(y => y.json())
        .then(y => {
            display(y);
        });

}
function display(data) {
    let result = data.query.search.map(function (v) {
        return `<div class="item">
            <h3 id="title">${v.title}</h3>
            <p>${v.snippet}</p></div>`
    });

    document.getElementById('result').innerHTML = result.join(" ");
}

