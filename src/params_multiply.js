//note: sum needs to start at 1 because anything multiplied by 0 will return 0
function multipleArguments(...params) {
	let i;
	let sum = 1;
	for(i = 0; i < arguments.length; i++) {
		sum *= arguments[i];
	}
	return sum
}

console.log(multipleArguments(1,2,3,4))