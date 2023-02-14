function getElementByIdInnerTex(elementId) {
    let getId =  document.getElementById(elementId);
    let getString = getId.innerText;
    let stringToparseFloat = parseFloat(getString);
    console.log(stringToparseFloat);
    return stringToparseFloat;
    
}
function getElementByIdInputFilde(element) {
    let getId =  document.getElementById(element);
    let getString = getId.value;
    let stringToparseFloat = parseFloat(getString);
    getId.value = '';
    return stringToparseFloat;
}
function setInnerTexTotal(privesValueById, newValue) {
    let privesTotal = document.getElementById(privesValueById);
    privesTotal.innerText = newValue;
}
function totalBalanceId(elemntId) {
    let totalBlanceId = document.getElementById(elemntId);
    let stringTOtalBlance = totalBlanceId.innerText;
    let parseFloatTotalBlance = parseFloat(stringTOtalBlance);
    return parseFloatTotalBlance;
}