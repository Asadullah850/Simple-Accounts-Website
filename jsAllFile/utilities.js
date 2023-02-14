function getElementByIdPreviousNumber(paramsId) {
    let previousNumber = document.getElementById(paramsId);
    let string = previousNumber.innerText;
    let parseFloatPreviousNumber = parseFloat(string);
    return parseFloatPreviousNumber;
}
function inputFieldgetElementById(elementId) {
    let inputFieldId = document.getElementById(elementId);
    let stringInput = inputFieldId.value;
    let parseFloatInputField = parseFloat(stringInput);
    inputFieldId.value = '';
    return parseFloatInputField;
}
function setTotalBalance(previousBalanceId,newValue) {
    let previousBlanceId = document.getElementById(previousBalanceId);
    previousBlanceId.innerText = newValue;
    return previousBlanceId;
}

// deposit withdraw previous box field
// <!-- deposit withdraw previous box field -->
// <!-- depositInputField -->
// <!-- withdrawInputField -->