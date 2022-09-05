//1
//Write one example explaining how you can write a callback function ?

function data(name){
    console.log(name);
}

function data1(a,b,ab){
    let result = a + b;
    ab(result);

}

data1(12,25,data);//37

//2
//"Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

let number = () =>{
    console.log("Numbers");
    setTimeout(() =>{
        console.log("1");
        setTimeout(() =>{
            console.log("2");
            setTimeout(() =>{
                console.log("3");
                setTimeout(() =>{
                    console.log("4");
                    setTimeout(() =>{
                        console.log("5");
                        setTimeout(() =>{
                            console.log("6");
                            setTimeout(() =>{
                                console.log("7");
                            },7000);
                        },6000);
                    },5000);
                },4000);
            },3000);
        },2000);
    },1000);
};
number()


//3
//"Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

let printNumber = ( time, num ) =>{
    return new Promise(( resolve,reject) =>{
        if(num){
            setTimeout(() =>{
                resolve(num())
            },time)
        }
        else{
            reject(console.log("No number"))
        }
    })
}
printNumber(0, () =>console.log("Numbers"))
      .then(() =>{
            return printNumber(1000, () =>console.log("1"))
      })
      .then(() =>{
        return printNumber(2000, () =>console.log("2"))
      })
      .then(() =>{
       return printNumber(3000, () =>console.log("3"))
      })
      .then(() =>{
      return printNumber(4000, () =>console.log("4"))
      })
      .then(() =>{
      return printNumber(5000, () =>console.log("5"))
      })
      .then(() =>{
      return printNumber(6000, () =>console.log("6"))
      })
      .then(() =>{
      return printNumber(7000, () =>console.log("7"))
      })

//4
//Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 
let promise = (z) =>
new Promise((right,wrong) =>{
    if(z=="yes"){
        return right();
      
    }
    else{
        return wrong();
    }
})
promise("yes").then(() =>{
    console.log("Promise Resolved");
}).catch(() =>{
    console.log("Promise rejected");
})

//5
//Create examples to explain callback function

function func1(){
    console.log("The func1");
}
function func2(argument){
    console.log("callback function");
    argument();
}
func2(func1)

//6
//Create examples to explain callback hell function

const getEmpId = () => {
	setTimeout(() => {
		console.log("Fetching the ID's");
		let id = [1, 2, 3, 4, 5];
		console.log(id);

		setTimeout(() => {
			let empDetails = {
				fName: 'Harsh',
				lName: 'Bajaj',
				age: 28,
			};
			console.log(`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is 
            ${empDetails.age}`);

			setTimeout(() => {
				(empDetails.gender = 'Male'),
					console.log(
						`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is 
                        ${empDetails.age} and the gender is ${empDetails.gender}`
					);
			}, 2000);
		}, 2000);
	}, 2000);
};

getEmpId();

//7
//Create examples to explain promises function
let promises = (z) =>
new Promise((right,wrong) =>{
    if(z=="yes"){
        return right();
      
    }
    else{
        return wrong();
    }
})
promise("yes").then(() =>{
    console.log("Promise Resolved");
}).catch(() =>{
    console.log("Promise rejected");
})

//8
//Create examples to explain async await function

const functionOne = () => {
    return "I am function One";
}

const functionTwo = () => {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("I am function Two");
        }, 3000);
    })
}

const functionThree = () => {
    return "I am function Three";
}

const callAllFunctions = async () => {
    let responseOne = functionOne();
    console.log(responseOne);

    
    let responseTwo = await functionTwo();
    console.log(responseTwo);

    let responseThree = functionThree();
    console.log(responseThree);
}

callAllFunctions();

//9
//Create examples to explain promise.all function

const function1 = () => {
    return "I am function One";
}

const function2 = () => {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            return("I am function Two");
        }, 3000);
    })
}

const function3 = () => {
    return "I am function Three";
}

const callAllFunction = () => {
    let responseOne = function1();
    console.log(responseOne);

    
    let responseTwo = function2();
    console.log(responseTwo);

    let responseThree = function3();
    console.log(responseThree);
}

callAllFunction();