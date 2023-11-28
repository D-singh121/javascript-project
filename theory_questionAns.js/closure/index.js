//********  laxical scope ************** */
/*function outer() {
	let name = "devesh";

	function inner() {
		let surname = "choudhary"
		function mostInner() {
			console.log(name + " " + surname);
		}
		mostInner();
	}
	inner();
	console.log(surname);

}
outer();
*/
// console.log(name);

//****************** closure  *************** */


function parent() {
	let name = "dee"

	function child() {
		console.log(name);
	}
	return child; // yaha pe sirf function return nahi hoga , child func ka pura laxical scope return hoga  */
}
const parentClosure = parent(); // hum parent func ko call karenge to uska pura global excution context hi end ho jayega but agar hum child func ko return karte hai  to child function ke sath uska pura laxical scope context bhi memory refrence me chala jayega jisme parent function ka scope bhi hoga ; 

parentClosure();