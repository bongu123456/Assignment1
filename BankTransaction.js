const transactions = [
    { id: 1, type: "credit", amount: 5000 },
    { id: 2, type: "debit", amount: 2000 },
    { id: 3, type: "credit", amount: 10000 },
    { id: 4, type: "debit", amount: 3000 }
  ];
  
  
  // 1. filter() all credit transactions
  const creditTransactions = transactions.filter(txn => txn.type === "credit");
  console.log("Credit Transactions:", creditTransactions);
  
  
  // 2. map() to extract only transaction amounts
  const amounts = transactions.map(txn => txn.amount);
  console.log("Transaction Amounts:", amounts);
  
  
  // 3. reduce() 
  const finalBalance = transactions.reduce((balance, txn) => {
    if (txn.type === "credit") {
      return balance + txn.amount;
    } else {
      return balance - txn.amount;
    }
  }, 0);
  
  console.log("Final Account Balance:", finalBalance);
  
  
  // 4. find() the first debit transaction
  const firstDebit = transactions.find(txn => txn.type === "debit");
  console.log("First Debit Transaction:", firstDebit);
  
  
  // 5. findIndex() of transaction with amount 10000
  const indexOf10000 = transactions.findIndex(txn => txn.amount === 10000);
  console.log("Index of Transaction Amount 10000:", indexOf10000);
  