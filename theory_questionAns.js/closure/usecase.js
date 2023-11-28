// document.getElementById('blue').onclick = function () {
// 	document.body.style.backgroundColor = "blue"
// }
// document.getElementById('green').onclick = function () {
// 	document.body.style.backgroundColor = "green"
// }


function clickHnadler(color) {
	// document.body.style.backgroundColor = `${color}`

	return function () {
		document.body.style.backgroundColor = `${color}` // now this  color varible is accesible because of laxical scope and code will run using colsure.
	}
}

document.getElementById("blue").onclick = clickHnadler("blue");
document.getElementById("green").onclick = clickHnadler("green")
document.getElementById("orange").onclick = clickHnadler("orange")