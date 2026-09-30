import React, { useState } from 'react'
import AtmCashAvaliabilty from './components/AtmCashAvaliabilty'
// import Header from './components/Header'
import Withdraw from './components/Withdraw'
import ActionButton from './components/ActionButton'
import TransactionResult from './components/TransactionResult'
import RemaingCash from './components/RemaingCash'

function App() {
  const [notes,setNotes]=useState({
    2000:0,
    500:0,
    200:0,
    100:0
  })

  const[withdrawAmount,setWithdrawAmount]=useState("");
  const[transactionStatus,setTransactionStatus]=useState("");
  const[remainingCash,setRemaingCash]=useState("");
  const[dispanseAmount,setDispanseAmount]=useState({
    2000:0,
    500:0,
    200:0,
    100:0
  })


  const handleNoteChange=(denomination,value)=>{
    setNotes((prev)=>({
      ...prev,
      [denomination]:Number(value),
    }));
  };

  const handleWithdraw = () => {
  console.log("this is called");

  let amount = Number(withdrawAmount);

  console.log("Withdraw amount =", amount);
  console.log("Available notes =", notes);

  const totalAtmCash =
    notes[2000] * 2000 +
    notes[500] * 500 +
    notes[200] * 200 +
    notes[100] * 100;

  console.log("Total ATM cash =", totalAtmCash);

  let avaliableNotes = { ...notes };

  let count2000 = 0;
  let count500 = 0;
  let count200 = 0;
  let count100 = 0;

  while (amount >= 2000 && avaliableNotes[2000] > 0) {
    count2000++;
    amount -= 2000;
    avaliableNotes[2000]--;
  }

  while (amount >= 500 && avaliableNotes[500] > 0) {
    count500++;
    amount -= 500;
    avaliableNotes[500]--;
  }

  while (amount >= 200 && avaliableNotes[200] > 0) {
    count200++;
    amount -= 200;
    avaliableNotes[200]--;
  }

  while (amount >= 100 && avaliableNotes[100] > 0) {
    count100++;
    amount -= 100;
    avaliableNotes[100]--;
  }

  console.log("Remaining amount after calculation =", amount);

  console.log("Dispensed:", {
    2000: count2000,
    500: count500,
    200: count200,
    100: count100,
  });

  if (amount === 0) {
    console.log("TRANSACTION SUCCESS");

    setTransactionStatus("Transaction Successful");

    const newRemainingCash =
      avaliableNotes[2000] * 2000 +
      avaliableNotes[500] * 500 +
      avaliableNotes[200] * 200 +
      avaliableNotes[100] * 100;

    setRemaingCash(newRemainingCash);

    setNotes(avaliableNotes);

    setDispanseAmount({
      2000: count2000,
      500: count500,
      200: count200,
      100: count100,
    });
  } else {
    console.log("TRANSACTION FAILED");

    setTransactionStatus("Transaction Failed");

    setRemaingCash(totalAtmCash);

    setDispanseAmount({
      2000: 0,
      500: 0,
      200: 0,
      100: 0,
    });
  }
};

  



  return (
    <>
    <AtmCashAvaliabilty notes={notes} onChange={handleNoteChange}/>
    <Withdraw withdrawAmount={withdrawAmount} setWithdrawAmount={setWithdrawAmount} />
    <ActionButton onClick={handleWithdraw} />
    <RemaingCash remainingCash={remainingCash} withdrawAmount={withdrawAmount}/>
    <TransactionResult transactionStatus={transactionStatus} withdrawAmount={withdrawAmount} dispanseAmount={dispanseAmount}/>
    </>
  )
}

export default App