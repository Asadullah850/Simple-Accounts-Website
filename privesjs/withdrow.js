document.getElementById('WithdrowButt').addEventListener('click',function(){
    let privesValue = getElementByIdInnerTex('privWithdrow');
    let inputFildeValue = getElementByIdInputFilde('WithdrowInputFilde');
    let totalClaculet = privesValue + inputFildeValue;
    setInnerTexTotal('privWithdrow',totalClaculet);
    let totalBalanceHtml = totalBalanceId('blanceTotal');
    let withdrowBalanceClaculet = totalBalanceHtml - inputFildeValue;
    setInnerTexTotal('blanceTotal',withdrowBalanceClaculet);
    console.log(totalBalanceHtml);


})