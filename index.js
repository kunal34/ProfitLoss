const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#message");

checkButton.addEventListener("click", () => {
    let ip = Number(initialPrice.value);
    let qty = Number(stockQuantity.value);
    let curr = Number(currentPrice.value);
    check(ip, qty, curr);
});

function check(ip, qty, curr) {
    console.log(ip, qty, curr);
    if(ip === 0 || qty === 0 || curr === 0 )  {
        showOutput('Please enter all fields  🥴');
        outputBox.style.backgroundColor = 'orange';
    
    }else if (ip < 0 || qty < 0 || curr < 0) {
        showOutput('Please enter valid numbers in all fields  🙄');
        outputBox.style.backgroundColor = 'orange';
    }
    else {
        
        calculateProfitAndLoss(ip, qty, curr);
    }
}




function calculateProfitAndLoss(initial, quantity, current) {
    
    if (initial > current) {
        let loss = ((initial - current) * quantity).toFixed(2);
        let lossPercentage = ((loss / initial) * 100).toFixed(2);
        outputBox.style.backgroundColor = 'red';
        showOutput(`The loss is ${loss} and the loss percent is ${lossPercentage}%  😞`);
    } else if (current > initial) {
        
        let profit = ((current - initial) * quantity).toFixed(2);
        let profitPercentage = ((profit / initial) * 100).toFixed(2);
        outputBox.style.backgroundColor = 'green';
        showOutput(`The profit is ${profit} and the profit percent is ${profitPercentage} 😃`);
    } else {
        showOutput(`No Profit No Loss  😎`);
        outputBox.style.backgroundColor = 'Orange';
    }
}

function showOutput(message) {
    outputBox.innerHTML = message;
}

function showMessage(msg) {
    message.innerText = msg;
}