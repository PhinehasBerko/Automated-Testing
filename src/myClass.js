class MyClass {
    constructor(){
        console.log("initiate");
    }

    add (arg1, arg2){
        var result = arg1 + arg2;
        return result
    }

    callAnotherFn(arg1, arg2){
        let result = this.add(arg1,arg2)
        return result
    }

    callTheCallback(callback){
        callback();
    }
}



export default MyClass;