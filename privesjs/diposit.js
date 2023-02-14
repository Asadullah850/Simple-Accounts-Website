document.getElementById('diposit-butt').addEventListener('click',function(){

    let privesValue = getElementByIdInnerTex('depositPri');
    let inputFildeValue = getElementByIdInputFilde('inputDiposit');
    let totalBlance = privesValue + inputFildeValue;
    setInnerTexTotal('depositPri',totalBlance);
    let totalBalanceHtml = totalBalanceId('blanceTotal');
    let dipositBalanceClaculet = totalBalanceHtml + inputFildeValue;
    setInnerTexTotal('blanceTotal',dipositBalanceClaculet);

})
