let balance = 1000;
const pin = "1234";
let isLoggedIn = false;
const transactionTypes = [];
const transactionAmounts = [];
const transactionStatuses = [];

const getUserInput = function (message) {
  return prompt(message);
};

const validatePin = function (enteredPin) {
  return enteredPin === pin;
};

const showMenu = function () {
  if (!isLoggedIn) {
    return "Please log in first.";
  }

  const action = getUserInput(`
    Welcome to the ATM! Choose an option:
    1. Check Balance
    2. Deposit Money
    3. Withdraw Money
    4. View Transaction History
    5. Logout
  `);

  return handleAction(action);
};

const login = function () {
  let enteredPin = getUserInput("Enter your PIN:");

  while (!validatePin(enteredPin)) {
    console.log("Incorrect PIN. Please try again.");
    enteredPin = getUserInput("Enter your PIN:");
  }

  isLoggedIn = true;
  return showMenu();
};

const checkBalance = function () {
  console.log(`Your current balance is: $${balance}`);
  return showMenu();
};

const addTransaction = function (type, amount, status) {
  transactionTypes.push(type);
  transactionAmounts.push(amount);
  transactionStatuses.push(status);
};

const depositMoney = function () {
  const amount = getAmountFromUser("deposit");

  if (isValidAmount(amount)) {
    balance += amount;
    addTransaction("Deposit", amount, "Success");
    console.log(`You have deposited $${amount}. New balance: $${balance}`);
    return showMenu();
  } else {
    addTransaction("Deposit", amount, "Failed");
    console.log("Invalid deposit amount.");
    return showMenu();
  }
};

const withdrawMoney = function () {
  const amount = getAmountFromUser("withdraw");

  if (!isValidAmount(amount)) {
    addTransaction("Withdraw", amount, "Failed");
    console.log("Invalid withdrawal amount.");
    return showMenu();
  } else if (amount > balance) {
    addTransaction("Withdraw", amount, "Failed");
    console.log("Insufficient funds.");
    return showMenu();
  } else {
    const confirmWithdrawal = getUserInput(
      `Are you sure you want to withdraw $${amount}? (yes/no)`
    );

    if (confirmWithdrawal.toLowerCase() === "yes") {
      balance -= amount;
      addTransaction("Withdraw", amount, "Success");
      console.log(`You have withdrawn $${amount}. New balance: $${balance}`);
      return showMenu();
    } else {
      addTransaction("Withdraw", amount, "Failed");
      console.log("Withdrawal cancelled.");
      return showMenu();
    }
  }
};

const viewTransactions = function () {
  if (transactionTypes.length > 0) {
    const transactionHistory = transactionTypes
      .map(
        (type, index) =>
          `${index + 1}. ${type} - $${transactionAmounts[index]} (${
            transactionStatuses[index]
          })`
      )
      .join("\n");
    console.log(`Transaction History:\n${transactionHistory}`);
  } else {
    console.log("No transactions yet.");
  }

  return showMenu();
};

const stopATM = function () {
  console.log("\n ATM session ended. \n");
  return;
};

const logout = function () {
  const LOGOUT = getUserInput(`Are you sure you want to log out? (yes/no)`);

  if (LOGOUT.toLowerCase() === "yes") {
    isLoggedIn = false;
    console.log("\n You have successfully logged out.");
    return stopATM();
  } else {
    console.log("\n Logout cancelled.");
    return showMenu();
  }
};

const actionHandlers = [
  undefined,
  checkBalance,
  depositMoney,
  withdrawMoney,
  viewTransactions,
  logout,
];

const handleAction = function (action) {
  const validActions = ["1", "2", "3", "4", "5"];

  if (validActions.includes(action) && actionHandlers[action]) {
    return actionHandlers[action]();
  } else {
    console.log("Invalid option. Please try again.");
    return showMenu();
  }
};

const getAmountFromUser = function (actionType) {
  let amountInput = getUserInput(`Enter the amount you want to ${actionType}:`);

  while (!isValidAmount(amountInput)) {
    console.log("Please enter a valid amount greater than 0.");
    amountInput = getUserInput(`Enter the amount you want to ${actionType}:`);
  }

  return +amountInput;
};

const isValidAmount = function (amount) {
  const numAmount = Number(amount);
  return numAmount > 0;
};

const start = function () {
  return login();
};

start();
