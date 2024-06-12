const accountId = 144553; // This value cannot be changed!
let accountEmail = "varenya@gmail.com"
var accountPassword = "1234"
accountCity = "Nagpur" //Not recommended but it works. 
let accountState;

// we dont use 'var' these days, since it brings an issue of scope, therefore 'let' is used since. Therefore we prefer not use var.! 

// accountId = 13345;

accountPassword = "3213"
accountCity = "Mumbai"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])