const datas = [
	{ name: "devesh", age: 24, profession: "devloper" },
	{ name: "rajesh", age: 26, profession: "devloper" },
	{ name: "pawan", age: 29, profession: "frontend" },
	{ name: "sufiyan", age: 26, profession: "fullstack" },
]
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

//***************  forEach  *************************//
// let newNum = [];
// const foreach = number.forEach((item) => {
// 	if (item > 4) {
// 		newNum.push(item)
// 	}
// })
// console.log(foreach);
// console.log(newNum);


//**********************  Map    **************************//
//>> map return all itrating values not like filter
// let mappedvalue = number.map((item) => {
// 	 return item + 10;
// })
// console.log(mappedvalue);

//**********************   filter  ********************//
// filter returns only true values ;
// let sorted = number.filter((values) => (values > 5))
// console.log(sorted);

//******************** reduce ************************* */
//** this is used in shopping bill total count purpose and many  more  */
// reduce ek initial value leta hai fir use accumulator me bhej deta hai aur current value hamari aaray ki 0 index vali value hogi 
// -- agar hum initialvalue nahi dete hai to vo by default array ki [0]index position ki value ko initialvalue me set kar deta hai. 
let shoppingTotal = number.reduce((acc, curr) => {
	console.log(`accumulator: ${acc} and current value: is ${curr}`);
	return acc + curr
})
console.log(shoppingTotal);
// o/p: 45