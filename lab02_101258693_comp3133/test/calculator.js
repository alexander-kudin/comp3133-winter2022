const assert = require('chai').assert;
const { add, mul, div, sub } = require('../app/calculator.js');

describe('Calculator App', function(){
    it(`ADD should add 5 to 2 and get 7`, function(){
        let result = add(5, 2)
        assert.equal(result, 7);
    });

    it(`ADD should add 5 to 2 and get 8`, function(){
        let result = add(5, 2)
        assert.equal(result, 8);
    });

    it('MUL should multiply 2 by 2 and fet 4', function(){
        let result = mul(2, 2)
        assert.equal(result, 4);
    });

    it('MUL should multiply 2 by 2 and fet 5', function(){
        let result = mul(2, 2)
        assert.equal(result, 5);
    });

    it('DIV should devide 10 by 2 and get 5', function(){
        let result = div(10, 2)
        assert.equal(result, 5);
    });

    it('DIV should devide 10 by 2 and get 4', function(){
        let result = div(10, 2)
        assert.equal(result, 4);
    });

    it('SUB should substruct 2 from 10 and get 8', function(){
        let result = sub(10, 2)
        assert.equal(result, 8);
    });

    it('SUB should substruct 2 from 10 and get 7', function(){
        let result = sub(10, 2)
        assert.equal(result, 7);
    });
});