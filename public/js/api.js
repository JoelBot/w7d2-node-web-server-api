

function fetchAPI(endPoint) {
    fetch("http://localhost:8080/api/v1/" + endPoint)
    .then(response => response.json())
    .then(response => console.log(response))
}

function renderDom() {
    var output = document.getElementById('dataSection')
}
fetchAPI("users")
fetchAPI("addresses")
fetchAPI("orders")
fetchAPI("items")
