
function createHTML(productsData) {
  const rawTemplate = document.getElementById('products-template').innerHTML;
  const compiledTemplate = Handlebars.compile(rawTemplate);
  const generatedHTML = compiledTemplate(productsData);

  const productsContainer = document.getElementById('products-container');
  productsContainer.innerHTML = generatedHTML;
}

const request = new XMLHttpRequest();
request.open('GET', 'https://dummyjson.com/products')
request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    const data = JSON.parse(request.responseText)
    createHTML(data);
    console.log(data);
  }
}
request.send();