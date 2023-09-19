/**
 * Complete the functions below to make AJAX call to a URL by GET method, and show the
response data on the page. You may render UI with any style.
 */

// handling click event
const clickHandler = () => {
  ajax(
    "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
    function (response) {
      render(response);
    }
  );
};

// get data by AJAX fetch
function ajax(src, callback) {
  // your code here
  fetch(src)
    .then((response) => response.json())
    .then((data) => callback(data))
    .then(() => console.log("callback done"));
}

// render data on page
function render(data) {
  // your code here
  const contentDiv = document.createElement("div");
  contentDiv.className = "render-json";
  for (const prod of data) {
    let prodOl = document.createElement("ol");
    let name = document.createElement("h3");
    name.textContent = prod.name;
    let descpt = document.createElement("p");
    descpt.innerHTML = `<em>${prod.description}</em>`;

    let price = document.createElement("p");
    price.innerHTML = `<p>$ ${prod.price}</p>`;
    prodOl.appendChild(name);
    prodOl.appendChild(descpt);
    prodOl.appendChild(price);
    contentDiv.insertAdjacentElement("beforeend", prodOl);
  }
  document.querySelector(".main").appendChild(contentDiv);
}

// register click event listener
document.querySelector(".fetchBtn").addEventListener("click", clickHandler);
