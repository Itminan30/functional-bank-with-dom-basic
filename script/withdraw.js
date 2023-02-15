document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    const previousBalanceTotal = getTextElementValueById('balance-total');
    if(previousBalanceTotal>=newWithdrawAmount){
        setTextElementValueById('withdraw-total', newWithdrawTotal);
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        setTextElementValueById('balance-total', newBalanceTotal);
    }
    else{
        alert("Don't Have Enough Balance");
    }
    
})