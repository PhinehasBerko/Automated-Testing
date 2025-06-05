import MyClass from "../src/myClass.js";
import {expect} from "chai";
import "sinon";
import sinon from "sinon";


let myObj = new MyClass;

describe("Test suit:", function(){
    it("Test add method", function(){
        expect(myObj.add(1,3)).to.be.equal(4)
    })
    it("Spy the add Function", function(){
        let spy = sinon.spy(myObj, "add")
        let arg1 = 10; let arg2 = 20;
        myObj.callAnotherFn(arg1, arg2);
        // sinon.assert.calledOnce(spy);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(arg1, arg2)).to.be.true;
    })

    it("Spy the callback Function", function(){
        let callback = sinon.spy();
        myObj.callTheCallback(callback);
        expect(callback.calledOnce).to.be.true;
    })
});
