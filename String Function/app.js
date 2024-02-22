let array = []
fetch(`https://jsonplaceholder.typicode.com/comments`).then(function (value) {
    return value.json();
}).then(function (value) {
    array = value;
    display(value);
    // console.log(array)
})

function display(value) {
    let DP = value.map(function (v) {
        return `<tr><td>${v.postId}</td><td>${v.id}</td><td>${v.name}</td><td>${v.email}</td><td>${v.body}</td></tr>`
    });
    document.getElementById('display').innerHTML = DP.join(" ");
}

function filterId(a) {
    let textValue = document.getElementById('searchTerm').value;
    const val = a.value;

    let fId = array.filter(function (value) {
        if (val == 'Equal') {
            return value.id == textValue;
        }
        else {
            return value.id != textValue;
        }
    });
    // console.log(fId.length);
    display(fId);
}
function filterBody(a) {
    let textValue = document.getElementById('searchTerm').value.trim().toLowerCase();
    const val = a.value;

    console.log(textValue, typeof (textValue));
    console.log(val, typeof (val))

    let fBody = array.filter(function (value, index) {
        if (val == "E") {

            return value.body.toLowerCase().replace(/\n/g, " ") == textValue;
        }
        // console.log(fBody);
        else if (val == "NE") {

            return value.body.toLowerCase().replace(/\n/g, " ") != textValue;

        }
        else if (val == "C") {
            return value.body.toLowerCase().includes(textValue);
        }
        else if (val == "NC") {
            return !value.body.toLowerCase().includes(textValue);
        }
        else if (val == "S") {
            return value.body.toLowerCase().startsWith(textValue);
        }
        else if (val == "EW") {
            return value.body.toLowerCase().endsWith(textValue);
        }

    });
    display(fBody);

}