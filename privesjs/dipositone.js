document.getElementById('diposit-butt').addEventListener('click',function(){
    let previesBlance = document.getElementById('depositPri');
    let previesBlanceString = previesBlance.innerText;
    let parstFlotPrives = parseFloat(previesBlanceString);
    // console.log(parstFlotPrives);
    let inputFilde = document.getElementById('inputDiposit');
    let dipositFildeString = inputFilde.value;
    let dipoParstFlot = parseFloat(dipositFildeString);
    // console.log(dipoParstFlot);
    let totalOfDipo = dipoParstFlot + parstFlotPrives;
    previesBlance.innerText = totalOfDipo;
    inputFilde.value = '';
    // console.log(previesBlance);
    // set balance
    let totalBlance = document.getElementById('blanceTotal');
    let inntextTotalBlance = totalBlance.innerText;
    let parstFlotBlance = parseFloat(inntextTotalBlance);
    let totalCalculatBalance = parstFlotBlance + dipoParstFlot;
    // totalBlance = totalCalculatBalance;
    totalBlance.innerText = totalCalculatBalance;
    // console.log(totalCalculatBalance);

})



