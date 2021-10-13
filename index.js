const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#message");

checkButton.addEventListener("click", () => {
    let ip = initialPrice.value;
    let qty = stockQuantity.value;
    let curr = currentPrice.value;
    check(ip, qty, curr);
});

function check(ip, qty, curr) {
    console.log(ip.length, qty, curr);
    if(ip.length === 0 || qty.length === 0 || curr.length === 0 )  {
        showOutput('Please enter all fields');
    }else {
        calculateProfitAndLoss(ip, qty, curr);
    }
}




function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        let loss = ((initial - current) * quantity).toFixed(2);
        let lossPercentage = ((loss / initial) * 100).toFixed(2);
        outputBox.style.backgroundColor = 'red';
        showOutput(`The loss is ${loss} and the loss percent is ${lossPercentage}%`);
    } else if (current > initial) {
        let profit = ((current - initial) * quantity).toFixed(2);
        let profitPercentage = ((profit / initial) * 100).toFixed(2);
        outputBox.style.backgroundColor = 'green';
        showOutput(`The profit is ${profit} and the profit percent is ${profitPercentage}`);
    } else {
        showOutput(`No Pain No Gain`);
    }
}

function showOutput(message) {
    outputBox.innerHTML = message;
}

function showMessage(msg) {
    message.innerText = msg;
}