const accountId = 152446
let accountEmail = "vishal@google.com"
var accountPass = "1234"
accountCity = "Bhilai"
let accountState;

// accountId = 7 Unmutable

accountEmail = "vn@work.com"       // Mutable
accountPass = "5678"               // Mutable
accountCity = "Dharamshala"        // Mutable 

/* 
Prefer not to use Var
because of issue of block scope and functional scope
*/


console.log(accountId);
console.table([accountId, accountEmail, accountPass, accountCity, accountState]);
 