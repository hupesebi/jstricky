function createAccount(pin, amount = 0) {
  return {
    checkBalance(inputPin) {
      if (inputPin !== pin) return "Invalid PIN.";
      return `$${amount}`;
    },
    deposit(inputPin, newAmount) {
      if (inputPin !== pin) return "Invalid PIN.";
      amount += newAmount;
      return `Succesfully deposited $${newAmount}. Current balance: $${amount}.`;
    },
    withdraw(inputPin, withdraw) {
      if (inputPin !== pin) return "Invalid PIN.";
      if (withdraw > amount)
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      amount -= withdraw;
      return `Succesfully withdrew $${withdraw}. Current balance: $${amount}.`;
    },
    changePin(oldPin, newPin) {
      if (oldPin !== pin) return "Invalid PIN.";
      pin = newPin;
      return "PIN successfully changed!";
    }
  };
}

module.exports = { createAccount };
