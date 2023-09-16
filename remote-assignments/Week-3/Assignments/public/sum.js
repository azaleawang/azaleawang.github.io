document.addEventListener("DOMContentLoaded", () =>  {
  const numberInput = document.querySelector("#numberInput");
  const calculateButton = document.querySelector("#calBtn");
  const resultElement = document.querySelector("#result");

  calculateButton.addEventListener("click", () => {
    const number = +numberInput.value.trim();
    if (!number) {
      resultElement.textContent = "Please enter a valid number";
    } else {
      fetch(`/data?number=${number}`)
        .then((response) => response.text())
        .then((data) => {
          resultElement.textContent = data;
        })
        .catch((error) => {
          console.error("Error:", error);
          resultElement.textContent =
            "An error occurred";
        });
    }
  });
});
