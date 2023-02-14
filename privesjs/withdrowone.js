document.getElementById('WithdrowButt').addEventListener('click',function(){
    let previesWithdrowBlance = document.getElementById('privWithdrow');
    let  previesWithdrowBlanceString = previesWithdrowBlance.innerText;
    let parstFlotPrivesWithdrow = parseFloat(previesWithdrowBlanceString);

    let inputFildeWithdrow = document.getElementById('WithdrowInputFilde');
    let fildeWithdrowString = inputFildeWithdrow.value;
    let withdrowParstFlot = parseFloat(fildeWithdrowString);
    // console.log(withdrowParstFlot);
    let totalOfwithdrow = parstFlotPrivesWithdrow + withdrowParstFlot;
    previesWithdrowBlance.innerText = totalOfwithdrow;
    inputFildeWithdrow.value = '';

    let totalBlance = document.getElementById('blanceTotal');
    let inntextTotalBlance = totalBlance.innerText;
    let parstFlotBlance = parseFloat(inntextTotalBlance);
    let totalCalculatBalance = parstFlotBlance - withdrowParstFlot;
        totalBlance.innerText = totalCalculatBalance;

    console.log(totalCalculatBalance);

})