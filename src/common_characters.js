function commonCharacters(string1, string2) {

	let arr1 = string1.toLowerCase().replace(/ /g, "")
	let arr2 = string2.toLowerCase().replace(/ /g, "")
	let result = []

	for(let i = 0; i < arr1.length; i++) {
		if(arr2.indexOf(arr1[i]) !== -1 && result.indexOf(arr1[i]) === -1) {
			result.push(arr1[i])
		}
	}
	return result.join("")
}

console.log(commonCharacters("abcde", "dbff")) //prints => "bd"