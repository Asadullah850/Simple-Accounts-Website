document.getElementById('depositButt').addEventListener('click',function(){
    let elementId = getElementByIdPreviousNumber('previousDepositNumber');
    let inputFieldId = inputFieldgetElementById('depositInputField');
   if (isNaN(inputFieldId)) {
     return alert("please enter the number you wish")
   }else{
   
    let setValueTotal = elementId + inputFieldId;
    setTotalBalance('previousDepositNumber',setValueTotal);
    // console.log(elementId,inputFieldId,setValueTotal);
    let totalBalanceId = getElementByIdPreviousNumber('balanceTotal');
    let totaBalanceCalulet = inputFieldId + totalBalanceId;
    setTotalBalance('balanceTotal',totaBalanceCalulet);
   }
})