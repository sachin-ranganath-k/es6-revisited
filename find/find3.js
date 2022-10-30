//Display user who has admin rights

var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: true },
];

var admin = users.find((adminRight) => {
  return adminRight.admin === true;
});

console.log(admin); //{ id: 1, admin: true }



/*********************************** */
//Find the account with a balance of 12.
var accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

var account = accounts.find((account) => {
  return (account.balance = 12);
});

console.log(account);