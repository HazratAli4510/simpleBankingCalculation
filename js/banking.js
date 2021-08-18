
/* // Deposit Handaler
const dipositBtn = document.getElementById('diposit-Btn')
dipositBtn.addEventListener('click', function () {
    // Get Deposit Ammount
    const depositInput = document.getElementById('diposit-input')
    const depositInputValue = depositInput.value
    const depositAmount = parseFloat(depositInputValue)

    if (depositAmount < 1) {
        // clearing the input field
        depositInput.value = ''
        return alert('Please enter a valid amout')
    }

    // get Current deposit balance
    const depositElement = document.getElementById('deposit-amount')
    const depositTotalText = depositElement.innerText
    const currentDepositToal = parseFloat(depositTotalText)


    //Get current MainBalance
    const mainBalanceElement = document.getElementById('mainBalance')
    const mainBalanceText = mainBalanceElement.innerText
    const mainBalanceAmount = parseFloat(mainBalanceText)


    // adding the deposit to total deposit balance
    const newDepositAmount = depositAmount + currentDepositToal
    depositElement.innerText = newDepositAmount

    // adding the deposit to total deposit balance
    const newBalance = mainBalanceAmount + depositAmount
    mainBalanceElement.innerText = newBalance

    // clearing the input field
    depositInput.value = ''

})


// Withdraw Handaller

const withdrawBtn = document.getElementById('withdrawBtn')
withdrawBtn.addEventListener('click', function () {
    //Get Withdraw Amount
    const withdrawInput = document.getElementById('withdrawInput')
    const withdrawInputValue = withdrawInput.value
    const withdrawAmount = parseFloat(withdrawInputValue)

    if (withdrawInputValue < 1) {
        // clearing the input field
        withdrawInput.value = ''
        return alert('Please enter a valid amout')
    }
    //get Current Withdraw total
    const withdrawTotalElement = document.getElementById('withdrawTotal')
    const withdrawTotalText = withdrawTotalElement.innerText
    const withdrawTotalAmount = parseFloat(withdrawTotalText)

    //Get current MainBalance
    const mainBalanceElement = document.getElementById('mainBalance')
    const mainBalanceText = mainBalanceElement.innerText
    const mainBalanceAmount = parseFloat(mainBalanceText)

    //adding withdraw amout to withdraw total amount
    if (withdrawAmount <= mainBalanceAmount) {
        const totalWithdraw = withdrawAmount + withdrawTotalAmount
        withdrawTotalElement.innerText = totalWithdraw

        //Deduct balace from MainBalance
        const newBalance = mainBalanceAmount - withdrawAmount
        mainBalanceElement.innerText = newBalance
        // clearing the input field
        withdrawInput.value = ''
        if (mainBalanceAmount.length > 10) {
            mainBalanceAmount.toFixed('5')
        }
    } else {
        alert('Not enough balance')
    }
})

//logout button
document.getElementById('logout').onclick = function () {
    window.location.href = 'index.html'
} */

//Function to get number from inputField
function numberIntoInputField(inputFieldId) {
    const theInputElement = document.getElementById(inputFieldId)
    const theNumber = parseFloat(theInputElement.value)
    theInputElement.value = ''
    return theNumber
}

// Function to get number into innerText
function numberIntoInnerText(innerTextID) {
    const theElement = document.getElementById(innerTextID)
    const theNumber = parseFloat(theElement.innerText)
    return theNumber
}

// function to update balance
function balanceUpdate(oldBalance, newAmount, isAdd) {
    if (isAdd == true) {
        const newBalance = oldBalance + newAmount
        return newBalance
    } else {
        const newBalance = oldBalance - newAmount
        return newBalance
    }
}

// Deposit Button handle
document.getElementById('diposit-Btn').addEventListener('click', function () {
    const inputAmount = numberIntoInputField('diposit-input')
    const newBalance = balanceUpdate(inputAmount, numberIntoInnerText('deposit-amount'), true)
    const mainBalance = balanceUpdate(numberIntoInnerText('mainBalance'), inputAmount, true)
    // update Balance
    if (newBalance > 0) {
        // update balance to total deposit
        document.getElementById('deposit-amount').innerText = newBalance
        //Update balance to main balance
        document.getElementById('mainBalance').innerText = mainBalance
    }
})

// Withdraw Button handle
document.getElementById('withdrawBtn').addEventListener('click', function () {
    debugger
    const inputAmount = numberIntoInputField('withdrawInput')
    if (inputAmount > 0 && numberIntoInnerText('mainBalance') >= inputAmount) {
        const newWithdrawBalance = balanceUpdate(numberIntoInnerText('withdrawTotal'), inputAmount, true)
        //update Total withdraw balance update
        document.getElementById('withdrawTotal').innerText = newWithdrawBalance
        // update main balance
        const mainBalance = balanceUpdate(numberIntoInnerText('mainBalance'), inputAmount, false)
        document.getElementById('mainBalance').innerText = mainBalance
    }
})