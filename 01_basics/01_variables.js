const accountId = 144553

let accountEmail = "sample@gmail.com"

var accountPassword = "12345"

accountCity = "Jaipur"

// accountId = 2 const don't allow changes

console.log(accountId);

/*
prefer not to use var
because of issue in block scope & functional scope
*/

accountEmail = "sas@gmail.com"
accountPassword = "123321"
accountCity = "Bengaluru"

console.table([accountEmail, accountPassword, accountCity]);