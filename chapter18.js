// var i = 0;
// while (i < 500) {
//   console.log(i + ": Hello, JavaScript!");
//   i++;
// }

// var count = 10;
// while (count > 0) {
//   alert(count);
//   count--;
// }
// alert("Blast Off!");

// var people = ["Deborah", "Carla", "Mary", "Suzen"];
// var i = 0;
// while (people[i]) {
//   alert(people[i]);
//   i++;
// }

// declare globals
let money = 20;
let lunches = 0;

//display lunch budget
document.getElementById("money").innerHTML = money;

//listen for order
document.getElementById("placeOrder").addEventListener("click", buyLunches);

/* buys specified number of sandwiches per day at current prices */
function buyLunches() {
  /*
    todo: 
     * reset the form */
  resetForm();
  var day = 0;
  /* start a loop*/
  while (money > 0) {
    var priceToday = getSandwichPrice();
    var numberOfSandwiches = document.getElementById("numSandwiches").value;
    var totalPrice = priceToday * numberOfSandwiches;

    if (money >= totalPrice) {
      money -= totalPrice;
      day++;
      lunches++;
      document.getElementById("receipt").innerHTML +=
        "<p>On day " +
        day +
        ", sandwiches are: $" +
        priceToday +
        ". You " +
        "have $" +
        money.toFixed(2) +
        " left.</p>";
    } else {
      document.getElementById("receipt").innerHTML +=
        "<p>Today," +
        " sandwiches are: $" +
        priceToday +
        ". You don't have" +
        " enough money. Maybe your sister will give you some" +
        " of her sandwich.</p>";
      money = 0;
    }
  }
  /* get daily sandwich order
 * calculate total price
 * figure out if there's enough money
 * if so: subtract money, increment number of lunches, 
and start loop over
 * if not: display 'out of money' message
 * display total lunches after loop exits */
}

/*
gets the current price of sandwiches
*/
function getSandwichPrice() {
  let sandwichPrice = (Math.random() * (5 - 1) + 1).toFixed(2);
  return sandwichPrice;
}

/*
resets the game so that a new order can be placed
*/
function resetForm() {
  money = 20;
  lunches = 0;
  document.getElementById("receipt").innerHTML = "";
}
