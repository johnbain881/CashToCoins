let dollarAmount = .56;
let piggyBank = {
    pennies: 0,
    nickels: 0,
    dimes: 0,
    quarters: 0
}

function changeCashToCoins(money) {
    let remainder = money
    //decimal numbers are sometimes inaccurate
    money += 0.009
    if (money > .25) {
        piggyBank.quarters = Math.floor(money / .25);
        remainder = money % .25;
        console.log(remainder)
    }
    if (remainder > .1) {
        piggyBank.dimes = Math.floor(remainder / .1);
        remainder = remainder % .1;
        console.log(remainder)

    }
    if (remainder > .05) {
        piggyBank.nickels = Math.floor(remainder / .05);
        remainder = remainder % .05;
        console.log(remainder)

    }
    if (remainder > .01) {
        piggyBank.pennies = Math.floor(remainder / .01);
        console.log(remainder)

    }
}
changeCashToCoins(dollarAmount)
console.log(piggyBank)