const accountId = 12345;
let accountEmail = "cvsingh@gmail.com";
var accountPassword = "1122";
accountCity = "Mathura";
let accountState;

// accountId = 67890; // const value can't be change

/* 
Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])
*/

accountEmail = "cvsingh@google.com";
accountPassword = "3344";
accountCity = "Noida";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
