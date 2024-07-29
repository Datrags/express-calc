let {mean, median, mode} = require("./math_functions");

describe(" even arrays ", function() {
    beforeEach(function() {
        arr = ["1", "2", '3', '4', '5', '6', '6', '7'];
    });
    
    test(" mean() ", function() {
        expect(mean(arr)).toBe(4.25);
    });
    test(" median() ", function() {
        expect(median(arr)).toBe(4.5);
    });
    test(" mode() ", function() {
        expect(mode(arr)).toBe("6")
    });
});

describe(" odd arrays ", function() {
    beforeEach(function() {
        arr = ["1", "2", '3', '5', '5'];
    }) 
    
    test(" mean() ", function() {
        expect(mean(arr)).toBe(3.2);
    });
    test(" median() ", function() {
        expect(median(arr)).toBe("3");
    });
    test(" mode() ", function() {
        expect(mode(arr)).toBe("5");
    });
    
});