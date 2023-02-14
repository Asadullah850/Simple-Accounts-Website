
document.getElementById('withdrawButt').addEventListener('click',function(){
    let withrawPreviousId = getElementByIdPreviousNumber('withdrawDepositNumber');
    let withdrawFieldId = inputFieldgetElementById('withdrawInputField');
if (isNaN(withdrawFieldId)) {
    return alert("please enter the number you wish")
}
else{
    let totalWithdraw = withrawPreviousId + withdrawFieldId;
    setTotalBalance('withdrawDepositNumber',totalWithdraw)
    let totalBalanceId = getElementByIdPreviousNumber('balanceTotal');
    let calculetBalance = totalBalanceId - withdrawFieldId;
    setTotalBalance('balanceTotal',calculetBalance);
}

})
