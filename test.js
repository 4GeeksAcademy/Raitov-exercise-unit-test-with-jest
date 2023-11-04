


    test("One euro should be 1.07 dollars", function() {
        // Import the function from app.js
        const { fromEuroToDollar } = require('./app.js');

        // Use the function like its supposed to be used
        const dollars = fromEuroToDollar(3.5);

        // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
        const expected = 3.5 * 1.07;

        // This is comparison for the unit test
        expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
    })

    test("One dollar should be 149.37 yens", function() {
        const { fromDollarToYen } = require('./app.js');
        const yens = fromDollarToYen(5);
        const expected = 5 * 149.37;
        expect(fromDollarToYen(5)).toBe(746.85);
    })

    test("One yen should be 0.0054 pounds", function() {
        const { fromYenToPound } = require('./app.js');
        const pound = fromYenToPound(10000);
        const expected = 10000 * 0.0054;
        expect(fromYenToPound(10000)).toBe(54);

    })
