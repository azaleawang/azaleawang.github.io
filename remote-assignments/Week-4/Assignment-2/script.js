/**
 * Complete the functions below to make AJAX call to a URL by GET method, and show the
response data on the page. You may render UI with any style.
 */

// handling click event
const clickHandler = (e) => {
  ajax(
    "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
    function (response) {
      render(response);
    }
  ).finally(() => e.target.remove());
};

// get data by AJAX fetch
function ajax(src, callback) {
  // your code here
  return fetch(src)
    .then((response) => response.json())
    .then((data) => callback(data))
    .then(() => console.log("callback done"))
    .catch((error) => {
      console.error("Error in AJAX request:", error);
    });
}

// render data on page
function render(data) {
  // your code here
  const contentDiv = document.createElement("ul");
  contentDiv.className = "render-json";
  data.forEach((prod) => {
    let prodLi = document.createElement("li");
    prodLi.innerHTML = `
      <h3>${prod.name}</h3>
      <p><em>${prod.description}</em></p>
      <p>$ ${prod.price}</p>
      <br/>
      `;
    contentDiv.insertAdjacentElement("beforeend", prodLi);
  });
  document.querySelector(".main").appendChild(contentDiv);
}

// register click event listener
document
  .querySelector(".fetchBtn")
  .addEventListener("click", (e) => clickHandler(e));
