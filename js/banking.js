// Deposit Handaler
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
}