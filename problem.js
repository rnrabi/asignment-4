// Problem-1 

function calculateMoney(tikets) {
    const perTiketPrice = 120;
    const gateMan = 500;
    const stapMan = 50 * 8;

    if (tikets < 0) {
        return 'Invalid Number';
    }

    const totalIncome = perTiketPrice * tikets;
    const totalExpend = gateMan + stapMan;
    const result = totalIncome - totalExpend;
    return result;
}


// const returnTk = calculateMoney(1055);
// console.log(returnTk);



// Problem-02 *************

function checkName(name) {
    const goodLetter = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    if (typeof name !== "string") {
        return 'invalid'
    }

    else {
        for (const letter of goodLetter) {
            if (letter === name[name.length - 1].toLowerCase()) {
                return 'Good Name';
            }
        }
        return 'Bad Name';
    }

}



// const resultName = checkName('Salman'); 
// console.log(resultName);



// Problem-3 **************

function deleteInvalids(arrs) {
    let numArray = [];
    if (!Array.isArray(arrs)) {
        return 'Invalid Array';
    }
    for (const arr of arrs) {
        if (typeof arr === 'number' && !isNaN(arr)) {
            numArray.push(arr);
        }
    }
    return numArray;
}


// const resultArray = deleteInvalids({num: [ 1 , 2 , 3 ]});
// console.log(resultArray);



// Problem-4 ***********

function password(pass) {
    if (!pass.name || (!pass.birthYear || pass.birthYear < 1000) || !pass.siteName) {
        return 'invalid';
    }
    const upperCse = pass.siteName[0].toUpperCase();
    const nameSite = upperCse + pass.siteName.substring(1);
    const passwordName = nameSite + '#' + pass.name + '@' + pass.birthYear;
    return passwordName;
}


// const resultPass = password({ name: "rahat" , birthYear: 2002, siteName: "Facebook" });
// console.log(resultPass);



// Problem-5 ************** 

function monthlySavings(arrs, liveCost) {

    if (!Array.isArray(arrs) || typeof liveCost !== 'number') {
        return 'Invalid Input';
    }

    let totalPayment = 0;
    for (const arr of arrs) {
        if (arr >= 3000) {
            const tex = arr * 0.2;
            const remainingPayment = arr - tex;
            totalPayment = totalPayment + remainingPayment;
        }
        else if (arr < 3000) {
            totalPayment = totalPayment + arr;
        }
    }

    const totalSaving = totalPayment - liveCost;
    if (totalSaving < 0) {
        return 'earn more';
    }
    return totalSaving;
}


// const totalSave = monthlySavings(100, [ 900 , 2700 , 3400]);
// console.log(totalSave);