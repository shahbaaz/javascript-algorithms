function checkCashRegister(price, cash, cid) {
    const INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS";
    const CLOSED = "CLOSED";
    const OPEN = "OPEN";
    let status = OPEN;
    let change = [];
    let cidTotal = getTotal(cid);
    let changeDue = cash - price;

    // if cash-in-drawer is less than change due, return {status: "INSUFFICIENT_FUNDS", change: []}
    if (cidTotal < changeDue) {
        return { status: INSUFFICIENT_FUNDS, change: [] };
    }

    // If cash-in-drawer is equal to changeDue, return {status: "CLOSED", change: [...cid]}
    if (cidTotal === changeDue) {
        return { status: CLOSED, change: [...cid] };
    }

    for (let i = cid.length - 1; i >= 0; i--) {
        if (cid[i][0] === "ONE HUNDRED" && changeDue >= 100) {
            const { updatedChange, updatedChangeDue} = addChangeToReturn(cid[i], change, changeDue, 100);
            change = [...updatedChange];
            changeDue = updatedChangeDue;
        } else if (cid[i][0] === "TWENTY" && changeDue >= 20) {
            const { updatedChange, updatedChangeDue} = addChangeToReturn(cid[i], change, changeDue, 20);
            change = [...updatedChange];
            changeDue = updatedChangeDue;
        } else if (cid[i][0] === "TEN" && changeDue >= 10) {
            const { updatedChange, updatedChangeDue} = addChangeToReturn(cid[i], change, changeDue, 10);
            change = [...updatedChange];
            changeDue = updatedChangeDue;
        } else if (cid[i][0] === "FIVE" && changeDue >= 5) {
            const { updatedChange, updatedChangeDue} = addChangeToReturn(cid[i], change, changeDue, 5);
            change = [...updatedChange];
            changeDue = updatedChangeDue;
        } else if (cid[i][0] === "ONE" && changeDue >= 1) {
            const { updatedChange, updatedChangeDue} = addChangeToReturn(cid[i], change, changeDue, 1);
            change = [...updatedChange];
            changeDue = updatedChangeDue;
        } else if (cid[i][0] === "QUARTER" && changeDue >= 0.25) {
            const { updatedChange, updatedChangeDue} = addChangeToReturn(cid[i], change, changeDue, 0.25);
            change = [...updatedChange];
            changeDue = updatedChangeDue;
        } else if (cid[i][0] === "DIME" && changeDue >= 0.10) {
            const { updatedChange, updatedChangeDue} = addChangeToReturn(cid[i], change, changeDue, 0.10);
            change = [...updatedChange];
            changeDue = updatedChangeDue;
        } else if (cid[i][0] === "NICKEL" && changeDue >= 0.05) {
            const { updatedChange, updatedChangeDue} = addChangeToReturn(cid[i], change, changeDue, 0.05);
            change = [...updatedChange];
            changeDue = updatedChangeDue;
        } else if (cid[i][0] === "PENNY" && changeDue >= 0.01) {
            const { updatedChange, updatedChangeDue} = addChangeToReturn(cid[i], change, changeDue, 0.01);
            change = [...updatedChange];
            changeDue = updatedChangeDue;
        }
    }

    if (changeDue !== 0) {
        status = INSUFFICIENT_FUNDS;
        change = [];
    }

    return {status, change};
}

const addChangeToReturn = (cidItem, change, changeDue, currencyType) => {
    let amountToAdd = 0;
    const updatedChange = [...change];
    let updatedChangeDue = change;
    // changeDue is greater than cidItem[1]
    if (changeDue > cidItem[1]) {
        amountToAdd = cidItem[1];
        updatedChange.push([cidItem[0], amountToAdd]);
        updatedChangeDue = Number((changeDue - amountToAdd).toFixed(2));
    } else {
        // changeDue is less than cidItem[1] and greater than 
        amountToAdd = Math.floor(changeDue / currencyType) * currencyType;
        updatedChange.push([cidItem[0], amountToAdd]);
        updatedChangeDue = Number((changeDue - amountToAdd).toFixed(2));
    }
    return {updatedChange, updatedChangeDue};
};

// Get total amount from the 2D array
const getTotal = (cid) => {
    let cidTotal = 0;

    cid.forEach(element => {
        cidTotal += element[1];
    });

    return Number(cidTotal.toFixed(2));
};

const test1 = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
const test2 = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
const test3 = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
const test4 = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
const test5 = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

console.log('TEST1', test1, typeof test1, 'should return an object');
console.log('TEST1', test1, 'should return {status: "OPEN", change: [["QUARTER", 0.5]]}');
console.log('TEST2', test2, 'should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}');
console.log('TEST3', test3, 'should return {status: "INSUFFICIENT_FUNDS", change: []}');
console.log('TEST4', test4, 'should return {status: "INSUFFICIENT_FUNDS", change: []}');
console.log('TEST5', test5, 'should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}');