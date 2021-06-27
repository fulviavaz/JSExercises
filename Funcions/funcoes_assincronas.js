const compareToten = function(testNumber) {
    return new Promise ( ( resolve, reject) => {
        if ( typeof testNumber !== "number") {
            reject("Not a Number");
            }

            setTomeout(() => {
                if (testNumber > 10){
                    resolve (true);
                    
                }else{
                    resolve(false);

                }
            } , testNumber * 100);
    })
}

let TimeStart = Date.now();
let result = await compareToten(8);
console.log("time", Date.now() - TimeStart);
console.log("result", result);