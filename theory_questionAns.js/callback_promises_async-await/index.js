//  we are creating the problem statement first
// we need an array of dummy data

const datas = [
	{ name: "devesh", age: 24, profession: "devloper" },
	{ name: "rajesh", age: 26, profession: "devloper" },
	{ name: "pawan", age: 29, profession: "frontend" },
	{ name: "sufiyan", age: 26, profession: "fullstack" },
]


/*
function getDatas() {
	setTimeout(
		() => {
			let output = ""
			datas.forEach((data) => {
				output += `<li>${data.name}    ${data.profession}</li>`
			})
			document.body.innerHTML = output;
		}, 1000
	)
}

function addData(pushed_data) {
	setTimeout(() => {
		datas.push(pushed_data)
		// callback();
	}, 2000)
}
getDatas();
addData({ name: "raju", profession: "fullstack" });
*/

//************* yah pe problem ye ho rahi hai ki hamre getDatas function ko run hone me sirf 1sec lag rahe hai jabki addData function run hone me 2sec that because jabtak humara adddata function value add karega tab tak getdata function end ho chuka hoga dom se to isi problem ko solve karne ki liye hum callback ka use karege like when our first task is done then only excute 2nd one .//

/*
function getDatas() {
	setTimeout(
		() => {
			let output = ""
			datas.forEach((data) => {
				output += `<li>${data.name}    ${data.profession}</li>`
			})
			document.body.innerHTML = output;
		}, 1000
	)
}

function addData(pushed_data, callback) {
	setTimeout(() => {
		datas.push(pushed_data)
		callback();
	}, 2000)
}
addData({ name: "raju", profession: "fullstack" }, getDatas);
*/



//***************** there is an issue with callback which is callback hell for solving this problem promises come in picture it give 2 things either resolve or reject */

/*function getDatas() {
	setTimeout(() => {
		let output = ""
		datas.forEach((data) => {
			output += `<li>${data.name}</li>`
		})
		document.body.innerHTML = output;
	}, 1000);
}

function addData(addeddata) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			datas.push(addeddata)
			let err = false
			if (!err) {
				resolve();
			} else {
				reject("abara ka dabra")
			}
			// getDatas
		}, 2000);
	})
}
addData({ name: "ram", age: 41 }).then(getDatas).catch(err => console.log(err))*/


// our next topic is async await 

function getDatas() {
	setTimeout(() => {
		let output = ""
		datas.forEach((data) => {
			output += `<li>${data.name}</li>`
		})
		document.body.innerHTML = output;
	}, 1000);
}
function addData(addeddata) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			datas.push(addeddata)
			let err = false
			if (!err) {
				resolve();
			} else {
				reject("abara ka dabra")
			}
			// getDatas
		}, 2000);
	})
}

const start = async () => {

	await addData({ name: "ram", age: 41 })
	getDatas()

}
start();

// one more example of async await api call
const apiData = async () => {
	try {
		const response = await fetch("https://www.facebook.com")
		const data = response.json(response)
		console.log(data);
	} catch (error) {
		console.log(err);
	}
}