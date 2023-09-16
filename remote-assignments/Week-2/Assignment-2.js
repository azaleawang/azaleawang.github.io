// Complete the function below to calculate the average price of all the products

function avg(data) {
  //your code here
  const prod = data.products;

  // reduce() Solution
  const sum = prod.reduce(
    (acc, cur) => (acc += cur.price), // callback function
    0 // initial value of acc
  );

  // for-loop Solution
  // let sum = 0;
  // for (let i = 0; i < prod.length; i++) {
  //     sum += prod[i].price ;
  // }

  return sum / data.size;
}
console.log(
  avg({
    size: 3,
    products: [
      {
        name: "Product1",
        price: 100,
      },
      {
        name: "Product2",
        price: 700,
      },
      {
        name: "Product3",
        price: 250,
      },
    ],
  })
);
// should print the average price of all products
