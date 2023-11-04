// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // convert the given valueinEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    let valueInYen = valueInDollar * 149.37;
    return valueInYen;
}

const fromYenToPound = function (valueInYen) {
    let valueInPound = valueInYen * 0.0054;
    return valueInPound;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };